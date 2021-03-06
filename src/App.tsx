import React from "react";

import { Route, Redirect } from "react-router-dom";

import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabs,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";

import { list, trophyOutline } from "ionicons/icons";

import { IonReactRouter } from "@ionic/react-router";

import Courses from "./pages/Courses";
import CourseGoals from "./pages/CourseGoals";
import AllGoals from "./pages/AllGoals";
import Filter from "./pages/Filter";

import SideDrawer from "./components/SideDrawer";
import CoursesContextProvider from "./data/CoursesContextProvider";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/theme.css";
import CoursesContext from "./data/courses-context";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <SideDrawer />
      <IonTabs>
        
        <CoursesContextProvider>
          <IonRouterOutlet id="main">
            <Route path="/courses" exact>
              <Courses />
            </Route>
            <Route path="/courses/:courseId">
              <CourseGoals />
            </Route>
            <Route path="/filter">
              <Filter />
            </Route>
            <Route path="/all-goals">
              <AllGoals />
            </Route>
            <Redirect to="/courses" />
          </IonRouterOutlet>
        </CoursesContextProvider>

        <IonTabBar slot="bottom">
          <IonTabButton tab="all-goals" href="/all-goals">
            <IonIcon icon={list} />
            <IonLabel>All Goals</IonLabel>
          </IonTabButton>
          <IonTabButton tab="courses" href="/courses">
            <IonIcon icon={trophyOutline} />
            <IonLabel>Courses</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
