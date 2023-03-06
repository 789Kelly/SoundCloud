import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchDeleteSong } from "../../store/songs";

function SongItem({ song, index }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const removeSong = async (e) => {
    e.preventDefault();

    await dispatch(fetchDeleteSong(song.id));
  };

  return (
    <div id="playlist-item">
      <NavLink to={`/songs/${song.id}`} id="playlist-flex">
        <div id="playlist-flex">
          <img src={song.imageUrl} alt="Song Preview" id="playlist-card" />
          <p id="play-name">{index + 1}</p>
          <p id="play-name">{song.title}</p>
        </div>
      </NavLink>
      {song?.userId === user?.id && (
        <div id="right-align-play">
          <NavLink to={`/songs/${song.id}/edit`}>
            <button className="btn-3ss">Edit</button>
          </NavLink>
          <button onClick={removeSong} className="btn-3ss">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default SongItem;
