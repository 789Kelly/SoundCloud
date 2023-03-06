import { useDispatch, useSelector } from "react-redux";
import { fetchDeletePlaylist } from "../../store/playlists";
import { Link, NavLink } from "react-router-dom";
import "./PlaylistItem.css";
import SongItem from "../SongItem";
import PlaylistSongItem from "../PlaylistSongItem";

const PlaylistItem = ({ playlist }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const removePlaylist = async (e) => {
    e.preventDefault();

    await dispatch(fetchDeletePlaylist(playlist.id));
  };

  return (
    <div className="playlist-container">
      <div className="playlist-right-flex">
        <div>
          {/* <NavLink to={`/playlists/${playlist.id}`}> */}
          <img
            src={playlist.previewImage}
            alt="Playlist Preview"
            className="playlist-img"
          />
          {/* </NavLink> */}
        </div>
        <div>
          {/* <NavLink to={`/playlists/${playlist.id}`} id="play-name"> */}
          <p className="playlist-name">{playlist.name}</p>
          {/* </NavLink> */}
          <img
            src="/images/soundwave.png"
            alt="soundwave"
            className="playlist-soundwave"
          />
          {/* <hr id="discover-hrss" />
        {playlist?.Songs?.map((song, index) => (
          <li key={song.id}>
            <PlaylistSongItem song={song} index={index} />
            <hr id="discover-hrss" />
          </li>
        ))} */}
          <table className="playlist-box">
            <tbody>
              <tr className="playlist-row">
                {/* <div id="playlist-flex"> */}
                <td>
                  <NavLink
                    to={`/songs/${playlist?.Songs[0]?.id}`}
                    id="playlist-flex"
                  >
                    <img
                      src={playlist?.Songs[0]?.previewImage}
                      alt="Song Preview"
                      className="playlist-song-img"
                    />
                  </NavLink>
                </td>
                {/* <td>
                  <NavLink
                    to={`/songs/${playlist?.Songs[0]?.id}`}
                    id="playlist-flex"
                  >
                    <p id="play-name">1</p>
                  </NavLink>
                </td> */}
                <td>
                  <NavLink
                    to={`/songs/${playlist?.Songs[0]?.id}`}
                    id="playlist-flex"
                  >
                    <p id="play-name">
                      {playlist?.Songs[0]?.description} -{" "}
                      {playlist?.Songs[0]?.title}
                    </p>
                  </NavLink>
                </td>
                {/* </div> */}
              </tr>
              <tr className="playlist-row">
                {/* <div id="playlist-flex"> */}
                <td>
                  <NavLink
                    to={`/songs/${playlist?.Songs[1]?.id}`}
                    id="playlist-flex"
                  >
                    <img
                      src={playlist?.Songs[1]?.previewImage}
                      alt="Song Preview"
                      className="playlist-song-img"
                    />
                  </NavLink>
                </td>
                {/* <td>
                  <NavLink
                    to={`/songs/${playlist?.Songs[0]?.id}`}
                    id="playlist-flex"
                  >
                    <p id="play-name">1</p>
                  </NavLink>
                </td> */}
                <td>
                  <NavLink
                    to={`/songs/${playlist?.Songs[1]?.id}`}
                    id="playlist-flex"
                  >
                    <p id="play-name">
                      {playlist?.Songs[1]?.description} -{" "}
                      {playlist?.Songs[1]?.title}
                    </p>
                  </NavLink>
                </td>
                {/* </div> */}
              </tr>
              <tr className="playlist-row">
                {/* <div id="playlist-flex"> */}
                <td>
                  <NavLink
                    to={`/songs/${playlist?.Songs[2]?.id}`}
                    id="playlist-flex"
                  >
                    <img
                      src={playlist?.Songs[2]?.previewImage}
                      alt="Song Preview"
                      className="playlist-song-img"
                    />
                  </NavLink>
                </td>
                {/* <td>
                  <NavLink
                    to={`/songs/${playlist?.Songs[0]?.id}`}
                    id="playlist-flex"
                  >
                    <p id="play-name">1</p>
                  </NavLink>
                </td> */}
                <td>
                  <NavLink
                    to={`/songs/${playlist?.Songs[2]?.id}`}
                    id="playlist-flex"
                  >
                    <p id="play-name">
                      {playlist?.Songs[2]?.description} -{" "}
                      {playlist?.Songs[2]?.title}
                    </p>
                  </NavLink>
                </td>
                {/* </div> */}
              </tr>
              <tr className="playlist-row">
                {/* <div id="playlist-flex"> */}
                <td>
                  <NavLink
                    to={`/songs/${playlist?.Songs[3]?.id}`}
                    id="playlist-flex"
                  >
                    <img
                      src={playlist?.Songs[3]?.previewImage}
                      alt="Song Preview"
                      className="playlist-song-img"
                    />
                  </NavLink>
                </td>
                {/* <td>
                  <NavLink
                    to={`/songs/${playlist?.Songs[0]?.id}`}
                    id="playlist-flex"
                  >
                    <p id="play-name">1</p>
                  </NavLink>
                </td> */}
                <td>
                  <NavLink
                    to={`/songs/${playlist?.Songs[3]?.id}`}
                    id="playlist-flex"
                  >
                    <p id="play-name">
                      {playlist?.Songs[3]?.description} -{" "}
                      {playlist?.Songs[3]?.title}
                    </p>
                  </NavLink>
                </td>
                {/* </div> */}
              </tr>
              <tr className="playlist-row">
                {/* <div id="playlist-flex"> */}
                <td>
                  <NavLink
                    to={`/songs/${playlist?.Songs[4]?.id}`}
                    id="playlist-flex"
                  >
                    <img
                      src={playlist?.Songs[4]?.previewImage}
                      alt="Song Preview"
                      className="playlist-song-img"
                    />
                  </NavLink>
                </td>
                {/* <td>
                  <NavLink
                    to={`/songs/${playlist?.Songs[0]?.id}`}
                    id="playlist-flex"
                  >
                    <p id="play-name">1</p>
                  </NavLink>
                </td> */}
                <td>
                  <NavLink
                    to={`/songs/${playlist?.Songs[4]?.id}`}
                    id="playlist-flex"
                  >
                    <p id="play-name">
                      {playlist?.Songs[4]?.description} -{" "}
                      {playlist?.Songs[4]?.title}
                    </p>
                  </NavLink>
                </td>
                {/* </div> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
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
