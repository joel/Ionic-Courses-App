import React, { useState, useRef } from "react";

import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonButton,
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonFab,
  IonFabButton,
  isPlatform,
  IonAlert,
  IonToast,
} from "@ionic/react";

import { useParams } from "react-router-dom";
import { create, trash, addOutline } from "ionicons/icons";

import { COURSE_DATA } from "./Courses";
import EditModal from "../components/EditModal";

const CourseGoals: React.FC = () => {
  const [startedDeleting, setStartedDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  interface Goal {
    id: string;
    text: string;
  }

  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);

  const slidingOptionRef = useRef<HTMLIonItemSlidingElement>(null);

  const selectedCourseId = useParams<{ courseId: string }>().courseId;

  const selectedCourse = COURSE_DATA.find((c) => c.id === selectedCourseId);

  const startDeleteGoalHandler = () => {
    setStartedDeleting(true);
  };

  const deleteGoalHandler = () => {
    setStartedDeleting(false);
    setToastMessage("Deleted goal!");
  };

  const startEditGoalHandler = (goalId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const goal = selectedCourse?.goals.find((g) => g.id === goalId);
    slidingOptionRef.current?.closeOpened();
    if (!goal) {
      return;
    }
    setIsEditing(true);
    console.log("Edited...");
    setSelectedGoal(goal);
  };

  const cancelEditGoalHandler = () => {
    setIsEditing(false);
    setSelectedGoal(null);
  };

  const startAddGoalHandler = () => {
    setIsEditing(true);
    console.log("Adding goals...");
    setSelectedGoal(null);
  };

  return (
    <React.Fragment>
      <IonToast
        isOpen={!!toastMessage}
        message={toastMessage}
        duration={2000}
        color="success"
        position="middle"
        onDidDismiss={() => {
          setToastMessage("");
        }}
      />

      <EditModal
        show={isEditing}
        onCancel={cancelEditGoalHandler}
        editedGoal={selectedGoal}
      />

      <IonAlert
        isOpen={startedDeleting}
        header="Are you sure?"
        message="This cannot be undone."
        buttons={[
          {
            text: "No",
            role: "cancel",
            handler: () => {
              setStartedDeleting(false);
            },
          },
          {
            text: "Yes",
            handler: deleteGoalHandler,
          },
        ]}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/courses/list" />
            </IonButtons>
            {!isPlatform("android") && (
              <IonButtons slot="end">
                <IonButton onClick={startAddGoalHandler} color="secondary">
                  <IonIcon slot="icon-only" icon={addOutline} />
                </IonButton>
              </IonButtons>
            )}
            <IonTitle>
              {selectedCourse ? selectedCourse.title : "No Course Found!"}
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {selectedCourse && (
            <IonList>
              {selectedCourse.goals.map((goal) => (
                <IonItemSliding key={goal.id} ref={slidingOptionRef}>
                  <IonItemOptions side="start">
                    <IonItemOption
                      onClick={startDeleteGoalHandler}
                      color="danger"
                    >
                      <IonIcon slot="icon-only" icon={trash} />
                    </IonItemOption>
                  </IonItemOptions>
                  <IonItem lines="full">
                    <IonLabel>{goal.text}</IonLabel>
                  </IonItem>
                  <IonItemOptions side="end">
                    <IonItemOption
                      onClick={startEditGoalHandler.bind(null, goal.id)}
                    >
                      <IonIcon slot="icon-only" icon={create} />
                    </IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
              ))}
            </IonList>
          )}
          {isPlatform("android") && (
            <IonFab horizontal="end" vertical="bottom" slot="fixed">
              <IonFabButton color="secondary" onClick={startAddGoalHandler}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default CourseGoals;
