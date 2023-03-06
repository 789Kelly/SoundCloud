import { useDispatch, useSelector } from "react-redux";
import PlaylistItem from "../PlaylistItem";
import { fetchPlaylists } from "../../store/playlists";
import { useEffect } from "react";
import { Link, Redirect, NavLink } from "react-router-dom";
import "./PlaylistsPage.css";
import { useState } from "react";

const PlaylistsPage = () => {
  const dispatch = useDispatch();

  const playlists = Object.values(useSelector((state) => state.playlists));
  const sessionUser = useSelector((state) => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false);
  // if no session user, there shouldn't be any playlists so redirect to /; but why is it showing all playlists with user logged in
  useEffect(() => {
    dispatch(fetchPlaylists()).then(() => setIsLoaded(true));
  }, [dispatch]);

  if (!sessionUser?.id) return <Redirect to="/" />;

  // if (!playlists?.length) {
  //   return (
  //     <>
  //       <h2>Nothing to hear here</h2>
  //       <Link to="/playlists/new">Add New Playlist</Link>
  //     </>
  //   );
  // } else {
  return (
    isLoaded && (
      <>
        <div id="playlist-banner">
          <img
            src="https://i1.sndcdn.com/visuals-000209466755-UWAJEv-t1240x260.jpg"
            alt="Playlists Banner"
            style={{ width: "100%" }}
          />
          <img
            src={sessionUser?.previewImage}
            alt="Best Playlists"
            id="playlist-user-img"
          />
          <p id="my-playlists">My Playlists</p>
          <span id="playlist-user">{sessionUser?.username}</span>
        </div>
        <div id="for-screens">
          <NavLink to={`/playlists/new`}>
            <button className="add-playlist-btn">Add new playlist</button>
          </NavLink>
          <hr id="discover-hrss" />
          <ul className="remove-indent">
            {isLoaded &&
              playlists.map((playlist) => (
                <li key={playlist.id}>
                  <PlaylistItem playlist={playlist} />
                  <hr id="discover-hrss" />
                </li>
              ))}
          </ul>
        </div>
        {/* <Link to="/playlists/new">Add New Playlist</Link> */}
      </>
    )
  );
};

export default PlaylistsPage;
