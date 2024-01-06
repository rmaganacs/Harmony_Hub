import React from "react";
import {
  IonButton,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { useHistory } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const history = useHistory();
  
  const handleCreate = () => {
    console.log();
  }

  function handleBackBtn(): void {
    history.push("/login");
  }

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow class="ion-justify-content-between">
            <IonIcon
              icon={arrowBack}
              size="large"
              onClick={() => handleBackBtn()}
            />
          </IonRow>
        </IonGrid>
        <IonGrid className="grid1">
          <IonRow class="ion-justify-content-between" style={{display: "flex", flexDirection: "column"}}>
            <IonText className="mainText">Forgot Password</IonText>
            <IonText className="subText">Enter Email Address</IonText>
          </IonRow>
        </IonGrid>
        <IonGrid className="grid2">
          <IonRow class="ion-justify-content-between" style={{display: "flex", flexDirection: "column"}}>
            <IonInput
              shape="round"
              className="grid2-spacing"
              label="Email Address"
              labelPlacement="floating"
              fill="outline"
              // value={username}
              // onIonChange={(e) => setUsername(e.detail.value!)}
            />
            <IonButton className="grid2-spacing" shape="round" expand="block" onClick={handleCreate}>
              SEND
            </IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ForgotPassword;
