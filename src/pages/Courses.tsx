import React from 'react';

import { IonHeader, IonContent, IonToolbar, IonTitle, IonGrid, IonPage,
  IonRow, IonCol, IonCard, IonCardContent, IonButton } from '@ionic/react';

export const COURSE_DATA = [
  { id: 'b1', title: 'English B1' },
  { id: 'b2', title: 'English B2' },
  { id: 'c1', title: 'English C1' },
];

const Courses: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Courses
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {COURSE_DATA.map(course => (
            <IonRow key={course.id}>
              <IonCol size-md='4' offset-md='4'>
                <IonCard>
                  <IonCardContent className='ion-text-center'>
                    <h2>
                      {course.title}
                    </h2>
                    <IonButton routerLink={`/courses/${course.id}`}>
                      View Course Goals
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Courses;
