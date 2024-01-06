import React from "react";
import "./App.css";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { library, search, home } from "ionicons/icons";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import audioIdReducer from "./redux/audioid/reducer";
import Home from "./pages/Home";
import MusicPlayerPage from "./pages/MusicPlayerPage";
import Library from "./pages/Library";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword";
import Search from "./pages/Search";
import Login from "./pages/Login";

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

setupIonicReact();
interface RootState {
  audioId: {
    selectedAudioId: string;
  };
}

const rootReducer = combineReducers<RootState>({
  audioId: audioIdReducer,
});

const store = createStore(rootReducer);

const App: React.FC = () => (
  <IonApp>
    <Provider store={store}>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Redirect exact path="/" to="/login" />
            <Route path="/home" component={Home} />
            <Route path="/music-player" component={MusicPlayerPage} />
            <Route path="/library" component={Library} />
            <Route path="/search" component={Search} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
            </IonTabButton>
            <IonTabButton tab="search" href="/search">
              <IonIcon icon={search} />
            </IonTabButton>
            <IonTabButton tab="library" href="/library">
              <IonIcon icon={library} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/create-account" component={CreateAccount} />
      </IonReactRouter>
    </Provider>
  </IonApp>
);

export default App;
