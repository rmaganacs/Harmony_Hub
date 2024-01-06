import React from "react";
import { useDispatch } from "react-redux";
import "./CardComponent.css";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { setSelectedAudioId } from "../redux/audioid/actions";

interface CardProps {
  id: string;
  title: string;
  subTitle: string;
  imageSrc: string;
}

const CardComponent: React.FC<CardProps> = ({
  id,
  title,
  subTitle,
  imageSrc,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const cardStyle: React.CSSProperties = {
    width: "200px",
    height: "200px",
    borderRadius: "10px",
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.5)",
  };

  const handleCardClick = () => {
    dispatch(setSelectedAudioId(id));
    history.push("/music-player");
  };

  return (
    <div>
      <IonCard style={cardStyle} onClick={handleCardClick}>
        <IonCardHeader>
          <IonCardTitle className="poppins-title">{title}</IonCardTitle>
          <IonCardSubtitle className="poppins-subtitle">
            {subTitle}
          </IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    </div>
  );
};

export default CardComponent;
