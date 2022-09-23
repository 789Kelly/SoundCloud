import { useDispatch } from "react-redux";
import { deletePlaylist } from "../../store/playlists";
import { Link } from "react-router-dom";

const PlaylistItem = ({ playlist }) => {
  const dispatch = useDispatch();

  const removePlaylist = (e) => {
    e.preventDefault();

    dispatch(deletePlaylist(playlist.id));
  };

  return (
    <>
      <Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
      <Link to={`/playlists/${playlist.id}/edit`}>Edit</Link>
      <button onClick={removePlaylist}>Delete Playlist</button>
    </>
  );
};

export default PlaylistItem;
