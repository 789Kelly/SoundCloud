import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ReactHowler from "react-howler";
import { useState } from "react";

function SongItem({ song }) {
  // const dispatch = useDispatch();
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setPlaying(true);
  };

  const pause = () => {
    setPlaying(false);
  };

  const user = useSelector((state) => state.session.user);
  return (
    <div id="playlist-item">
      <div id="playlist-flex">
        <img src={song.imageUrl} alt="Song Preview" id="playlist-card" />
        <p id="play-name">{song.title}</p>
      </div>
      {/* <div id="right-align-play">
        <NavLink to={`/songs/${song.id}/edit`}>
          <button className="btn-3ss">Edit</button>
        </NavLink>
        <button className="btn-3ss">Delete</button>
      </div> */}
      <div>
        <ReactHowler
          playing={playing}
          src="https://res.cloudinary.com/diyjzl1ol/video/upload/v1677969351/01_-_What_s_Going_On_pnssve.mp3"
        />
        <button onClick={play}>></button>
        <button onClick={pause}>||</button>
      </div>
    </div>
  );
}

export default SongItem;
