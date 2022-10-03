import { useDispatch, useSelector } from "react-redux";
import { fetchDeletePlaylist } from "../../store/playlists";
import { Link, NavLink } from "react-router-dom";

const PlaylistItem = ({ playlist }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const removePlaylist = async (e) => {
    e.preventDefault();

    await dispatch(fetchDeletePlaylist(playlist.id));
  };

  if (playlist?.userId === user?.id) {
    return (
      <>
        <NavLink to={`/playlists/${playlist.id}`}>
          <img
            src={playlist.previewImage}
            alt="Playlist Preview"
            // style={{ width: "100%" }}
            // className="nav-link"
          />
        </NavLink>
        <NavLink to={`/playlists/${playlist.id}`}>
          <p>{playlist.name}</p>
        </NavLink>
        <p>{playlist.description}</p>
        <Link to={`/playlists/${playlist.id}/edit`}>Edit</Link>
        <button onClick={removePlaylist}>Delete Playlist</button>
      </>
    );
  } else {
    return (
      <>
        <Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
      </>
    );
  }
};

export default PlaylistItem;
