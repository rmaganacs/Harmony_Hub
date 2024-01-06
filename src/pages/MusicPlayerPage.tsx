import React from "react";
import { useSelector } from "react-redux";
import { IonContent, IonPage } from "@ionic/react";
import MusicPlayer from "../components/MusicPlayer";
import { RootState } from "../redux/types";

const MusicPlayerPage: React.FC = () => {
  const selectedAudioId = useSelector(
    (state: RootState) => state.audioId.selectedAudioId
  );
  return (
    <IonPage>
      <IonContent fullscreen>
        <MusicPlayer songId={selectedAudioId} />
      </IonContent>
    </IonPage>
  );
};

export default MusicPlayerPage;
