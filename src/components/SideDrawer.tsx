import React from "react";

import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
} from "@ionic/react";

import { list, options } from 'ionicons/icons';

const SideDrawer = () => {
  return (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Course Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle>
            <IonItem button routerLink="/all-goals" routerDirection="none">
              <IonIcon slot="start" icon={list} />
              <IonLabel>All Goals</IonLabel>
            </IonItem>
            <IonItem button routerLink="/filter" routerDirection="none">
              <IonIcon slot="start" icon={options} />
              <IonLabel>Filter</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default SideDrawer;
