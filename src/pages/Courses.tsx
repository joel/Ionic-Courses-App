import React from 'react';

import {
  IonHeader, IonContent, IonToolbar, IonTitle, IonGrid, IonPage,
  IonRow, IonCol, IonCard, IonCardContent, IonButton,
  IonCardHeader, IonCardTitle, IonCardSubtitle
} from '@ionic/react';

export const COURSE_DATA = [
  {
    id: 'b1',
    title: 'English B1',
    enrolled: new Date('03/22/2020'),
    goals: [
      { id: 'c1g1', text: 'Finish the course!' },
      { id: 'c1g2', text: 'Learn a lot' },
    ]
  },
  { id: 'b2', title: 'English B2', enrolled: new Date('01/18/2017'),
  goals: [
    { id: 'c2g1', text: 'Finish the course!' },
    { id: 'c2g2', text: 'Learn a lot' },
  ] },
  { id: 'c1', title: 'English C1', enrolled: new Date('06/05/2015'),
  goals: [
    { id: 'c3g1', text: 'Finish the course!' },
    { id: 'c3g2', text: 'Learn a lot' },
  ] },
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
                  <IonCardHeader>
                    <IonCardTitle>
                      {course.title}
                    </IonCardTitle>
                    <IonCardSubtitle>
                      Enrolled on {course.enrolled.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}
                    </IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <div className='ion-text-right'>
                      <IonButton fill='clear' color='secondary' routerLink={`/courses/${course.id}`}>
                        View Course Goals
                      </IonButton>
                    </div>
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
