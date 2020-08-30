import React, { useState } from "react";

import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonPage,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonButtons,
  IonButton,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  isPlatform,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";

import { addOutline } from "ionicons/icons";

import AddCourseModal from "../components/AddCourseModal";

export const COURSE_DATA = [
  {
    id: "b1",
    title: "English B1",
    enrolled: new Date("03/22/2020"),
    goals: [
      { id: "c1g1", text: "Finish the course!" },
      { id: "c1g2", text: "Learn a lot" },
    ],
  },
  {
    id: "b2",
    title: "English B2",
    enrolled: new Date("01/18/2017"),
    goals: [
      { id: "c2g1", text: "Finish the course!" },
      { id: "c2g2", text: "Learn a lot" },
    ],
  },
  {
    id: "c1",
    title: "English C1",
    enrolled: new Date("06/05/2015"),
    goals: [
      { id: "c3g1", text: "Finish the course!" },
      { id: "c3g2", text: "Learn a lot" },
    ],
  },
];

const Courses: React.FC = () => {
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const startAddCourseHandler = () => {
    setIsAdding(true);
  };

  const cancelAddCourseHandler = () => {
    setIsAdding(false);
  };

  return (
    <React.Fragment>
      <AddCourseModal show={isAdding} onCancel={cancelAddCourseHandler} />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Courses</IonTitle>
            {!isPlatform("android") && (
              <IonButtons slot="end">
                <IonButton onClick={startAddCourseHandler} color="secondary">
                  <IonIcon slot="icon-only" icon={addOutline} />
                </IonButton>
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            {COURSE_DATA.map((course) => (
              <IonRow key={course.id}>
                <IonCol size-md="4" offset-md="4">
                  <IonCard>
                    <IonCardHeader>
                      <IonCardTitle>{course.title}</IonCardTitle>
                      <IonCardSubtitle>
                        Enrolled on{" "}
                        {course.enrolled.toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })}
                      </IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <div className="ion-text-right">
                        <IonButton
                          fill="clear"
                          color="secondary"
                          routerLink={`/courses/${course.id}`}
                        >
                          View Course Goals
                        </IonButton>
                      </div>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
          {isPlatform("android") && (
            <IonFab horizontal="end" vertical="bottom" slot="fixed">
              <IonFabButton color="secondary" onClick={startAddCourseHandler}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default Courses;
