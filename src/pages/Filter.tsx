import React from 'react';

import { IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonMenuButton
} from '@ionic/react';

const Filter: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot='start'>
            <IonMenuButton />
          </IonButton>
          <IonTitle>
            Filter
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>
          The filter page.... (WIP)
        </h2>
      </IonContent>
    </IonPage>
  );
};

export default Filter;
