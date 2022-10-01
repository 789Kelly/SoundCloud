import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import SongItem from "../SongItem";
import { fetchLoadAlbum } from "../../store/albums";
import { useEffect } from "react";

const AlbumShow = ({ isLoaded }) => {
  const dispatch = useDispatch();

  const { albumId } = useParams();
  const songs = useSelector((state) => state.albums.Songs);
  const user = useSelector((state) => state.session.user);
  // let songLinks;

  // if (user?.id && songs?.length) {
  //   songLinks = (
  //     <>
  //       <Link to={`/albums/${albumId}/songs/new`}>Add New Song</Link>
  //       <ul>
  //         {songs?.map((song) => (
  //           <SongItem key={song?.id} song={song} />
  //         ))}
  //       </ul>
  //       <Link to={`/albums/${albumId}/songs/new`}>Add New Song</Link>
  //     </>
  //   );
  // } else if (!user?.id && songs?.length) {
  //   songLinks = (
  //     <>
  //       <ul>
  //         {songs?.map((song) => (
  //           <SongItem key={song?.id} song={song} />
  //         ))}
  //       </ul>
  //     </>
  //   );
  // }
  // } else if (user?.id && !songs?.length) {
  //   songLinks = (
  //     <>
  //       <h2>You haven't added any songs yet!</h2>
  //       <Link to={`/albums/${albumId}/songs/new`}>Add New Song</Link>
  //     </>
  //   );
  // }
  // } else if (!user?.id && !songs?.length) {
  //   songLinks = (
  //     <>
  //       <p>No one has added any songs yet!</p>
  //     </>
  //   );
  // }

  useEffect(() => {
    dispatch(fetchLoadAlbum(albumId));
  }, [dispatch, albumId]);

  return (
    <>
      <Link to="/discover">Back to Albums</Link>
      {user?.id && (
        <Link to={`/albums/${albumId}/songs/new`}>Add New Song</Link>
      )}
      <ul>
        {songs?.map((song) => (
          <SongItem key={song?.id} song={song} />
        ))}
      </ul>
      {user?.id && (
        <Link to={`/albums/${albumId}/songs/new`}>Add New Song</Link>
      )}
      <Link to="/discover">Back to Albums</Link>
    </>
  );
};

export default AlbumShow;
