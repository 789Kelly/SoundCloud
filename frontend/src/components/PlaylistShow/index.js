import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchLoadData } from "../../store/playlists";
import { useEffect } from "react";
import SongItem from "../SongItem";
import PlaylistSongItem from "../PlaylistSongItem";

const PlaylistShow = () => {
  const dispatch = useDispatch();
  const { playlistId } = useParams();

  // const songs = Object.values(useSelector((state) => state.songs));
  const playlist = useSelector((state) => state.playlists[playlistId]);
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(fetchLoadData(playlistId));
    // dispatch(fetchPlaylistSongs(playlistId));
  }, [dispatch, playlistId]);

  return (
    <>
      <div id="gradient-boxs">
        <div id="left-playlist">
          <div>
            <p id="album-titre">{playlist.name}</p>
            <p id="album-descriptions"> {user?.username} </p>
          </div>
          <span id="circles">TRACKS</span>
        </div>
        <img src={playlist?.previewImage} alt="Album Preview" id="album-imgs" />
      </div>
      <div id="for-screens">
        {/* {playlist?.userId === user?.id && (
          <>
            <NavLink to={`/albums/${albumId}/songs/new`}>
              <button className="btn-3s">Add Song</button>
            </NavLink>
            <hr id="discover-hrs" />
          </>
        )} */}
        <ol className="remove-indent">
          {playlist?.Songs?.map((song, index) => (
            <li className="song-row">
              <PlaylistSongItem key={song?.id} song={song} index={index} />
              <hr id="discover-hrss" />
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default PlaylistShow;
