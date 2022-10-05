import { useDispatch, useSelector } from "react-redux";
import { fetchDeletePlaylist } from "../../store/playlists";
import { Link, NavLink } from "react-router-dom";
import "./PlaylistItem.css";

const PlaylistItem = ({ playlist }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const removePlaylist = async (e) => {
    e.preventDefault();

    await dispatch(fetchDeletePlaylist(playlist.id));
  };

  return (
    <div id="playlist-item">
      <div id="playlist-flex">
        {/* <NavLink to={`/playlists/${playlist.id}`}> */}
        {/* <img
          src={playlist.previewImage}
          alt="Playlist Preview"
          // style={{ width: "100%" }}
          // className="nav-link"
          id="playlist-card"
        /> */}
        {/* </NavLink> */}
        {/* <NavLink to={`/playlists/${playlist.id}`} id="play-name"> */}
        <p id="play-name">{playlist.name}</p>
        {/* </NavLink> */}
      </div>
      <div id="right-align-play">
        <NavLink to={`/playlists/${playlist.id}/edit`}>
          <button className="btn-3ss">Edit</button>
        </NavLink>
        <button onClick={removePlaylist} className="btn-3ss">
          Delete
        </button>
      </div>
    </div>
  );
};

export default PlaylistItem;
