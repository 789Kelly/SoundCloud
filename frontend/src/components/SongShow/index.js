import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSong } from "../../store/songs";
import "./SongShow.css";
import ReactHowler from "react-howler";

const SongShow = () => {
  const dispatch = useDispatch();

  const { songId } = useParams();

  const user = useSelector((state) => state.session.user);

  const [isLoaded, setIsLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setPlaying(!playing);
  };

  const song = useSelector((state) => state?.songs[songId]);

  useEffect(() => {
    dispatch(fetchSong(songId)).then(() => setIsLoaded(true));
  }, []);

  return (
    <>
      {isLoaded && (
        <>
          <div id="gradient-boxs">
            <div id="left-playlist">
              <div id="song-top-flex">
                <ReactHowler playing={playing} src={song?.url} />
                <img
                  src="/images/play-pause.png"
                  alt="Play Button"
                  id="play-btn"
                  onClick={play}
                />
                <div>
                  <p id="album-titre">{song?.title}</p>
                  <p id="album-descriptions"> {song?.description} </p>
                </div>
              </div>
              <img
                src="/images/PngItem_1197423.png"
                alt="Sound Wave"
                id="soundwave"
              />
            </div>
            <img src={song?.previewImage} alt="Album Preview" id="album-imgs" />
          </div>
          {/* <img src={user?.previewImage} alt="Album Preview" />
          <input /> */}
        </>
      )}
    </>
  );
};

export default SongShow;
