import React, { useState } from 'react';

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
  IonModal,
} from '@ionic/react';

import { useParams } from 'react-router-dom';
import { create, trash, addOutline } from 'ionicons/icons';

import { COURSE_DATA } from './Courses';

const CourseGoals: React.FC = () => {
  const [startedDeleting, setStartedDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const selectedCourseId = useParams<{ courseId: string }>().courseId;

  const selectedCourse = COURSE_DATA.find(c => c.id === selectedCourseId);

  const startDeleteGoalHandler = () => {
    setStartedDeleting(true);
  };

  const deleteGoalHandler = () => {
    setStartedDeleting(false);
    setToastMessage('Deleted goal!');
  };

  const startEditGoalHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsEditing(true);
    console.log('Edited...')
  };

  const cancelEditGoalHandler = () => {
    setIsEditing(false);
  };

  const startAddGoalHandler = () => {
    setIsEditing(true);
    console.log('Adding goals...')
  };

  return (
    <React.Fragment>
      <IonModal isOpen={isEditing}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              Edit Goal
            </IonTitle>
          </IonToolbar>
          <IonContent>
            <p>
              Editing....
            </p>
            <IonButton onClick={cancelEditGoalHandler}>
              Cancel
            </IonButton>
            <IonButton>
              Save
            </IonButton>
          </IonContent>
        </IonHeader>
      </IonModal>
      <IonToast
        isOpen={!!toastMessage}
        message={toastMessage}
        duration={2000}
        color='success'
        position='middle'
        onDidDismiss={ () => {
          setToastMessage('');
        }}
      />
      <IonAlert
        isOpen={startedDeleting}
        header='Are you sure?'
        message='This cannot be undone.'
        buttons={[
          {
            text: 'No', role: 'cancel', handler: () => {
              setStartedDeleting(false);
            }
          },
          {
            text: 'Yes',
            handler: deleteGoalHandler
          }
        ]}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonBackButton defaultHref='/courses/list' />
            </IonButtons>
            { !isPlatform('android') &&
              <IonButtons slot='end'>
                <IonButton onClick={startAddGoalHandler} color='secondary'>
                  <IonIcon slot='icon-only' icon={addOutline} />
                </IonButton>
              </IonButtons>
            }
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
                    <IonItemOption onClick={startDeleteGoalHandler} color='danger'>
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
          { isPlatform('android') &&
            <IonFab horizontal='end' vertical='bottom' slot='fixed'>
              <IonFabButton color='secondary' onClick={startAddGoalHandler}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          }
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default CourseGoals;
