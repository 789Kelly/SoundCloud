import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";

function SongItem({ song }) {
  const dispatch = useDispatch();

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
      <ReactPlayer url={song.url} />
    </div>
  );
}

export default SongItem;
