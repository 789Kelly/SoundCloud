import { useDispatch, useSelector } from "react-redux";
import PlaylistItem from "../PlaylistItem";
import { fetchPlaylists } from "../../store/playlists";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PlaylistsPage = () => {
  const dispatch = useDispatch();
  const playlists = Object.values(useSelector((state) => state.playlists));

  useEffect(() => {
    dispatch(fetchPlaylists());
  }, [dispatch]);

  if (!playlists.length) {
    return (
      <>
        <h2>You haven't added any playlists yet!</h2>
        <Link to="/playlists/new">Add New Playlist</Link>
      </>
    );
  } else {
    return (
      <>
        <ul>
          {playlists.map((playlist) => (
            <PlaylistItem key={playlist.id} playlist={playlist} />
          ))}
        </ul>
        <Link to="/playlists/new">Add New Playlist</Link>
      </>
    );
  }
};

export default PlaylistsPage;
