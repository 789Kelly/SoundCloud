import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import SongItem from "../SongItem";
import { fetchSongs } from "../../store/playlists";
import { useEffect } from "react";

const PlaylistShow = () => {
  const dispatch = useDispatch();

  const { playlistId } = useParams();
  const songs = useSelector((state) => state.playlists.Songs);

  useEffect(() => {
    dispatch(fetchSongs(playlistId));
  }, [dispatch]);

  return (
    <>
      <ul>
        {songs?.map((song) => (
          <SongItem key={song?.id} song={song} />
        ))}
      </ul>
      <Link to="/playlists">Back to Playlists</Link>
    </>
  );
};

export default PlaylistShow;
