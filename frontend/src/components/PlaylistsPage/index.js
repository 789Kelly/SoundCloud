import { useDispatch, useSelector } from "react-redux";
import PlaylistItem from "../PlaylistItem";
import { fetchPlaylists } from "../../store/playlists";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const PlaylistsPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const playlists = Object.values(useSelector((state) => state.playlists));
  const sessionUser = useSelector((state) => state.session.user);
  // if no session user, there shouldn't be any playlists so redirect to /; but why is it showing all playlists with user logged in
  useEffect(() => {
    dispatch(fetchPlaylists());
  }, [dispatch]);

  if (!sessionUser.id) history.push("/");

  if (!playlists.length) {
    return (
      <>
        <h2>Nothing to hear here</h2>
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
