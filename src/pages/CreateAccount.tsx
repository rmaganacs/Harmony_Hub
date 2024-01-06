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

const CreateAccount: React.FC = () => {
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
            <IonText className="mainText">Create an Account</IonText>
            <IonText className="subText">Create a new account</IonText>
          </IonRow>
        </IonGrid>
        <IonGrid className="grid2">
          <IonRow class="ion-justify-content-between" style={{display: "flex", flexDirection: "column"}}>
            <IonInput
              shape="round"
              className="grid2-spacing"
              label="Name"
              labelPlacement="floating"
              fill="outline"
              // value={username}
              // onIonChange={(e) => setUsername(e.detail.value!)}
            />
            <IonInput
              shape="round"
              className="grid2-spacing"
              label="Email"
              labelPlacement="floating"
              fill="outline"
              // value={username}
              // onIonChange={(e) => setUsername(e.detail.value!)}
            />
            <IonInput
              shape="round"
              className="grid2-spacing"
              label="Phone"
              labelPlacement="floating"
              fill="outline"
              // value={username}
              // onIonChange={(e) => setUsername(e.detail.value!)}
            />
            <IonInput
              shape="round"
              type="password"
              className="grid2-spacing"
              label="Password"
              labelPlacement="floating"
              fill="outline"
              // value={password}
              // onIonChange={(e) => setPassword(e.detail.value!)}
            />
            <IonInput
              shape="round"
              type="password"
              className="grid2-spacing"
              label="Confirm Password"
              labelPlacement="floating"
              fill="outline"
              // value={password}
              // onIonChange={(e) => setPassword(e.detail.value!)}
            />
            <IonButton className="grid2-spacing" shape="round" expand="block" onClick={handleCreate}>
              CREATE ACCOUNT
            </IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CreateAccount;
