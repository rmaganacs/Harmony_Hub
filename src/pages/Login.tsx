import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonGrid,
  IonInput,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import axios from 'axios';
const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [failed, setFailed] = useState(false);

  const history = useHistory();
  
  const handleLogin = async () => {
    axios.post('http://localhost:5000/login', {username, password})
        .then(res => {
          console.log(res.data.Status)
            console.log("login: " + res.data);
            if(res.data.Status === "Success") {
                if(res.data.role === "user") {
                    setFailed(false);
                    history.push('/home')
                }
            } else if(res.data.Status === "Failure") {
              setFailed(true);
            }
        }).catch(err => console.log(err))
  };

  return (
    <IonPage>
      <IonContent>
        <IonGrid className="grid1">
          <IonRow class="ion-justify-content-between" style={{display: "flex", flexDirection: "column"}}>
            <IonText className="mainText">Login</IonText>
            <IonText className="subText">Please sign in to continue.</IonText>
          </IonRow>
        </IonGrid>
        <IonGrid className="grid2">
          <IonRow class="ion-justify-content-between" style={{display: "flex", flexDirection: "column"}}>
            {failed === true && 
              <IonText className="errorText" style={{marginBottom: "20px"}}>
                The email or password is incorrect.
              </IonText>
            }
            <IonInput
              shape="round"
              className="vertical-align"
              label="Username"
              labelPlacement="floating"
              fill="outline"
              value={username}
              onIonChange={(e) => setUsername(e.detail.value!)}
            />
            <IonInput
              shape="round"
              type="password"
              className="grid2-spacing"
              label="Password"
              labelPlacement="floating"
              fill="outline"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
            />
            <IonButton className="grid2-spacing" shape="round" expand="block" onClick={handleLogin}>
              LOGIN
            </IonButton>
            <IonRow class="ion-justify-content-between" style={{display: "flex", flexDirection: "row"}}>
              <IonText className="linkText" style={{marginTop: "20px"}} onClick={() => history.push('/create-account')}>Create Account</IonText>
              <IonText className="linkText" style={{marginTop: "20px"}} onClick={() => history.push('/forgot-password')}>Forgot Password</IonText>
            </IonRow>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
