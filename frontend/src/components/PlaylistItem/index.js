import { useDispatch, useSelector } from "react-redux";
import { fetchDeletePlaylist } from "../../store/playlists";
import { Link } from "react-router-dom";

const PlaylistItem = ({ playlist }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const removePlaylist = async (e) => {
    e.preventDefault();

    await dispatch(fetchDeletePlaylist(playlist.id));
  };

  if (playlist.userId === user.id) {
    return (
      <>
        <Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
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
