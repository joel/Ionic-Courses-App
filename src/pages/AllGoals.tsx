import React from "react";

import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButton,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";

import { COURSE_DATA } from "./Courses";

const AllGoals: React.FC = () => {
  const goals = COURSE_DATA.flatMap((course) => {
    return course.goals.map(goal => {
      return { ...goal, courseTitle: course.title };
    });
  });

  console.log(goals);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start">
            <IonMenuButton />
          </IonButton>
          <IonTitle>Course Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {goals.map((goal) => (
            <IonItem key={goal.id}>
              <IonLabel>
                <h2>{goal.text}</h2>
                <p>{goal.courseTitle}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AllGoals;
