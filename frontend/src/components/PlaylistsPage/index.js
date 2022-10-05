import { useDispatch, useSelector } from "react-redux";
import PlaylistItem from "../PlaylistItem";
import { fetchPlaylists } from "../../store/playlists";
import { useEffect } from "react";
import { Link, Redirect, NavLink } from "react-router-dom";
import "./PlaylistsPage.css";

const PlaylistsPage = () => {
  const dispatch = useDispatch();

  const playlists = Object.values(useSelector((state) => state.playlists));
  const sessionUser = useSelector((state) => state.session.user);
  // if no session user, there shouldn't be any playlists so redirect to /; but why is it showing all playlists with user logged in
  useEffect(() => {
    dispatch(fetchPlaylists());
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
    <>
      <div id="gradient-boxs">
        <div id="left-playlist">
          <div>
            <p id="album-titres">My Playlists</p>
            <span id="album-descriptions">{sessionUser?.username}</span>
          </div>
          <span id="circles">MIXES</span>
        </div>
        <img
          src="https://media.pitchfork.com/photos/5f08e1ae9f0d624cf3ecafc7/1:1/w_320,c_limit/legends%20never%20die_juice%20wrld.jpg"
          alt="Best Playlists"
          id="album-imgs"
        />
      </div>
      <div id="for-screens">
        <NavLink to={`/playlists/new`}>
          <button className="btn-3s">Add new playlist</button>
        </NavLink>
        <hr id="discover-hrs" />
        <ul className="remove-indent">
          {playlists?.map((playlist) => (
            <li key={playlist.id}>
              <PlaylistItem playlist={playlist} />
              <hr id="discover-hrss" />
            </li>
          ))}
        </ul>
      </div>
      {/* <Link to="/playlists/new">Add New Playlist</Link> */}
    </>
  );
};

export default PlaylistsPage;
