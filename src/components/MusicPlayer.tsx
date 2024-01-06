import React, { useState, useEffect } from "react";
import {
  IonGrid,
  IonIcon,
  IonImg,
  IonRange,
  IonRow,
  IonText,
} from "@ionic/react";
import { arrowBack, heartOutline } from "ionicons/icons";
import loopBtn from "../images/loop.svg";
import loopBtnSel from "../images/loop_selected.svg";
import shuffleBtn from "../images/shuffle.svg";
import pauseBtn from "../images/pause-circle.svg";
import playBtn from "../images/play-circle.svg";
import skipNextBtn from "../images/skip-next.svg";
import skipPrevBtn from "../images/skip-previous.svg";
import MusicData from "../data/MusicData";
import "./MusicPlayer.css";
import { useHistory } from "react-router-dom";

interface MusicPlayerProps {
  songId: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ songId }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSrc, setAudioSrc] = useState<string | undefined>(undefined);
  const [image, setImage] = useState<string | undefined>(undefined);
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [artist, setArtist] = useState<string | undefined>(undefined);
  const audioRef = React.createRef<HTMLAudioElement>();
  const [currentTime, setCurrentTime] = useState(0);
  const [maxDuration, setMaxDuration] = useState(0);
  const history = useHistory();
  const [isLooping, setIsLooping] = useState(false);

  useEffect(() => {
    const song = MusicData.find((song) => song.id === songId);
    if (song) {
      setImage(song.imgSrc);
      setAudioSrc(song.file);
      setTitle(song.title);
      setArtist(song.artist);
      setIsPlaying(true);
    }
  }, [songId]);

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement?.currentTime || 0);
    };

    const handleMetadataLoaded = () => {
      setMaxDuration(audioElement?.duration || 0);
    };

    const handleSongEnd = () => {
      setIsPlaying(false);
    };

    if (audioElement) {
      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      audioElement.addEventListener("loadedmetadata", handleMetadataLoaded);
      audioElement.addEventListener("ended", handleSongEnd);
      if (isPlaying) {
        audioElement.play().catch(() => {
          // Error
        });
      } else {
        audioElement.pause();
      }
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
        audioElement.removeEventListener(
          "loadedmetadata",
          handleMetadataLoaded
        );
        audioElement.removeEventListener("ended", handleSongEnd);
      }
    };
  }, [isPlaying, currentTime]);

  function formatTime(timeInSeconds: number): string {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  function handleBackBtn(): void {
    history.push("/home");
  }

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src={audioSrc}
        autoPlay={isPlaying}
        loop={isLooping}
      />
      <IonGrid>
        <IonRow class="ion-justify-content-between">
          <IonIcon
            icon={arrowBack}
            size="large"
            onClick={() => handleBackBtn()}
          />
          <IonText className="poppins-title" style={{ fontSize: "20px" }}>
            Now Playing
          </IonText>
          <div style={{ width: "32px" }}></div>
        </IonRow>
      </IonGrid>
      <IonGrid style={{ marginTop: "40px" }}>
        <IonRow class="ion-justify-content-center">
          <IonImg src={image} className="mainPhoto" />
        </IonRow>
      </IonGrid>
      <IonGrid style={{ marginTop: "20px" }}>
        <IonRow class="ion-justify-content-between">
          <IonText className="poppins-title" style={{ fontSize: "25px" }}>
            {title}
          </IonText>
          <IonIcon
            icon={heartOutline}
            style={{
              fontSize: "25px",
              color: "rgba(153, 156, 156)",
              marginTop: "7px",
            }}
          />
        </IonRow>
      </IonGrid>
      <IonGrid style={{ paddingTop: "0px", marginTop: "-10px" }}>
        <IonRow>
          <IonText
            className="poppins-subtitle"
            style={{ fontSize: "15px", color: "rgba(153, 156, 156)" }}
          >
            {artist}
          </IonText>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow class="ion-justify-content-center">
          <IonRange
            min={0}
            max={maxDuration}
            step={1}
            value={currentTime}
            onIonChange={(e) => {
              const newTime = e.detail.value as number;
              setCurrentTime(newTime);
              if (audioRef.current) {
                audioRef.current.currentTime = newTime;
              }
            }}
          />
        </IonRow>
        <IonRow class="ion-justify-content-between">
          <IonText style={{ fontSize: "14px", color: "rgba(153, 156, 156)" }}>
            {formatTime(currentTime)}
          </IonText>
          <IonText style={{ fontSize: "14px", color: "rgba(153, 156, 156)" }}>
            {formatTime(maxDuration)}
          </IonText>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow class="ion-justify-content-center">
          <IonImg
            src={isLooping ? loopBtnSel : loopBtn}
            onClick={() => setIsLooping(!isLooping)}
            className="subIcons"
            style={{ width: "25px", marginRight: "50px" }}
          />
          <IonImg src={skipPrevBtn} className="subIcons" />
          <IonImg
            src={isPlaying ? pauseBtn : playBtn}
            onClick={togglePlay}
            style={{ marginLeft: "30px", marginRight: "30px" }}
            className="mainIcons"
          />
          <IonImg src={skipNextBtn} className="subIcons" />
          <IonImg
            src={shuffleBtn}
            className="subIcons"
            style={{ width: "25px", marginLeft: "50px" }}
          />
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default MusicPlayer;
