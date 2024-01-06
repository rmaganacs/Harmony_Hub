import React from "react";
import {
  IonContent,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import SwiperComponent from "../components/SwiperComponent";
import MusicList from "../components/MusicList";
import MusicData from "../data/MusicData";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar>
      </IonToolbar>
      <IonContent fullscreen>
        <IonText className="poppins-heading" style={{ fontSize: "37px" }}>
          Discover
        </IonText>
        <div style={{ paddingTop: "20px" }}>
          <SwiperComponent />
        </div>
        <MusicList fetchData={() => Promise.resolve()} filePath={MusicData} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
