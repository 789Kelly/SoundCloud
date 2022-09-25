import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import SongItem from "../SongItem";
import { fetchLoadAlbum } from "../../store/albums";
import { useEffect } from "react";

const AlbumShow = () => {
  const dispatch = useDispatch();

  const { albumId } = useParams();
  const songs = useSelector((state) => state.albums.Songs);

  useEffect(() => {
    dispatch(fetchLoadAlbum(albumId));
  }, [dispatch, albumId]);

  return (
    <>
      <Link to={`/albums/${albumId}/songs/new`}>Add New Song</Link>
      <ul>
        {songs?.map((song) => (
          <SongItem key={song?.id} song={song} />
        ))}
      </ul>
      <Link to="/albums">Back to Albums</Link>
    </>
  );
};

export default AlbumShow;
