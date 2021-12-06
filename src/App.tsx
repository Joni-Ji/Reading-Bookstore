import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { person, compass, reader } from 'ionicons/icons';
import Read from './pages/Read';
import Discovery from './pages/Discovery';
import AboutMe from './pages/AboutMe';
import Slides from './pages/Slides';


const App: React.FC = () => (
  
  <IonApp>
    
    <Slides/>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Read">
            <Read />
          </Route>
          <Route path="/Discovery">
            <Discovery />
          </Route>
          <Route path="/AboutMe">
            <AboutMe />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/Read">
            <IonIcon icon={reader} />
            <IonLabel>Read</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Discovery" href="/Discovery">
            <IonIcon icon={compass} />
            <IonLabel>Discovery</IonLabel>
          </IonTabButton>
          <IonTabButton tab="AboutMe" href="/AboutMe">
            <IonIcon icon={person} />
            <IonLabel>About Me</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
