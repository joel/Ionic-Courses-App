import React from 'react';

import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
} from '@ionic/react';

import { useParams } from 'react-router-dom';
import { create, trash } from 'ionicons/icons';

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

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/' />
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
