import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import SongItem from "../SongItem";
import { fetchLoadAlbum } from "../../store/albums";
import { useEffect } from "react";

const AlbumShow = () => {
  const dispatch = useDispatch();

  const { albumId } = useParams();
  const songs = useSelector((state) => state.albums.Songs);
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(fetchLoadAlbum(albumId));
  }, [dispatch, albumId]);

  if (!user?.id && !songs?.length) {
    return (
      <>
        <h2>No one has added any songs yet!</h2>
        <Link to="/albums">Back to Albums</Link>
      </>
    );
  } else if (user?.id && !songs?.length) {
    return (
      <>
        <h2>You haven't added any songs yet!</h2>
        <Link to={`/albums/${albumId}/songs/new`}>Add New Song</Link>
        <Link to="/albums">Back to Albums</Link>
      </>
    );
  } else if (!user?.id && songs?.length) {
    return (
      <>
        <Link to="/albums">Back to Albums</Link>
        <ul>
          {songs?.map((song) => (
            <SongItem key={song?.id} song={song} />
          ))}
        </ul>
        <Link to="/albums">Back to Albums</Link>
      </>
    );
  } else {
    return (
      <>
        <Link to={`/albums/${albumId}/songs/new`}>Add New Song</Link>
        <Link to="/albums">Back to Albums</Link>
        <ul>
          {songs?.map((song) => (
            <SongItem key={song?.id} song={song} />
          ))}
        </ul>
        <Link to={`/albums/${albumId}/songs/new`}>Add New Song</Link>
        <Link to="/albums">Back to Albums</Link>
      </>
    );
  }
};

export default AlbumShow;
