import React from 'react';

import { IonHeader, IonContent, IonToolbar, IonTitle, IonPage } from '@ionic/react';

const CourseGoals: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Course Goals
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>
          This works - Course goals page!
        </h2>
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;
