import React, { useState, useEffect } from "react";
import {
  IonList,
  IonItem,
  IonInfiniteScroll,
  IonText,
  IonGrid,
  IonRow,
  IonImg,
} from "@ionic/react";
import "./MusicList.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedAudioId } from "../redux/audioid/actions";
import dots from "../images/dots.svg";

interface Song {
  id: string;
  title: string;
  artist: string;
  imgSrc?: string;
}

interface MusicListProps {
  fetchData: () => Promise<void>;
  filePath: Song[];
}

const MusicList: React.FC<MusicListProps> = ({ fetchData, filePath }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [disableInfiniteScroll, setDisableInfiniteScroll] = useState(false);
  const [displayedSongs, setDisplayedSongs] = useState<Song[]>([]);
  const [displayCount, setDisplayCount] = useState(10);

  const handleCardClick = (id: string) => {
    dispatch(setSelectedAudioId(id));
    history.push("/music-player");
  };

  useEffect(() => {
    fetchData().then(() => {
      setDisableInfiniteScroll(false);
      setDisplayedSongs(filePath.slice(0, displayCount));
    });
  }, []);

  const loadMoreData = () => {
    setDisableInfiniteScroll(true);
    const newDisplayCount = displayCount + 10;
    setDisplayCount(newDisplayCount);
    setDisplayedSongs(filePath.slice(0, newDisplayCount));
    fetchData().then(() => {
      setDisableInfiniteScroll(false);
    });
  };

  return (
    <>
      <IonList class="bg-transparent">
        {displayedSongs.map((song: Song) => (
          <IonItem
            key={song.id}
            color="none"
            lines="none"
            style={{ margin: "20px" }}
            onClick={() => handleCardClick(song.id)}
          >
            <IonImg className="listPhoto" src={song.imgSrc} />
            <IonGrid style={{ marginLeft: "20px", marginRight: "20px" }}>
              <IonRow>
                <IonText
                  className="poppins-title"
                  style={{ fontSize: "17px", fontWeight: "500" }}
                >
                  {song.title}
                </IonText>
              </IonRow>
              <IonText
                className="poppins-subtitle"
                style={{
                  fontSize: "15px",
                  color: "rgba(153, 156, 156)",
                  fontWeight: "500",
                }}
              >
                {song.artist}
              </IonText>
            </IonGrid>
            <IonRow class="ion-justify-content-end">
              <IonImg src={dots} style={{ width: "20px" }} />
            </IonRow>
          </IonItem>
        ))}
      </IonList>
      <IonInfiniteScroll
        threshold="10px"
        disabled={disableInfiniteScroll}
        onIonInfinite={(e: CustomEvent<void>) => loadMoreData()}
        style={{ marginBottom: "30px" }}
      ></IonInfiniteScroll>
    </>
  );
};

export default MusicList;
