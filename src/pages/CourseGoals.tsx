import React from 'react';

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
} from '@ionic/react';

import { useParams } from 'react-router-dom';
import { create, trash, addOutline } from 'ionicons/icons';

import { COURSE_DATA } from './Courses';

const CourseGoals: React.FC = () => {
  const selectedCourseId = useParams<{ courseId: string }>().courseId;

  const selectedCourse = COURSE_DATA.find(c => c.id === selectedCourseId);

  const deleteGoalHandler = () => {
    console.log('Deleted...');
  };

  const startEditGoalHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    console.log('Edited...')
  };

  const startAddGoalHandler = () => {
    console.log('Adding goals...')
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/courses/list' />
          </IonButtons>
          <IonButtons slot='end'>
            <IonButton onClick={startAddGoalHandler}>
              <IonIcon slot='icon-only' icon={addOutline} />
            </IonButton>
          </IonButtons>
          <IonTitle>
            {selectedCourse ? selectedCourse.title : 'No Course Found!'}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {selectedCourse && <IonList>
          {
            selectedCourse.goals.map(goal => (
              <IonItemSliding key={goal.id}>
                <IonItemOptions side='start'>
                  <IonItemOption onClick={deleteGoalHandler} color='danger'>
                    <IonIcon slot='icon-only' icon={trash} />
                  </IonItemOption>
                </IonItemOptions>
                <IonItem lines='full'>
                  <IonLabel>
                    {goal.text}
                  </IonLabel>
                </IonItem>
                <IonItemOptions side='end'>
                  <IonItemOption onClick={startEditGoalHandler}>
                    <IonIcon slot='icon-only' icon={create} />
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))
          }
        </IonList>}
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;
