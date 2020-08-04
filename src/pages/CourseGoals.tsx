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
} from '@ionic/react';

import { useParams } from 'react-router-dom';
import { create } from 'ionicons/icons';

import { COURSE_DATA } from './Courses';

const CourseGoals: React.FC = () => {
  const selectedCourseId = useParams<{ courseId: string }>().courseId;

  const selectedCourse = COURSE_DATA.find(c => c.id === selectedCourseId);

  const deleteItemHandler = () => {
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
          {selectedCourse.goals.map(goal => <IonItem key={goal.id} lines='full' button onClick={deleteItemHandler}>
            <IonLabel>
              {goal.text}
            </IonLabel>
            <IonButton slot='end' fill='clear' color='dark' onClick={startEditGoalHandler}>
              <IonIcon slot='icon-only' icon={create}/>
            </IonButton>
          </IonItem>)}
        </IonList>}
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;
