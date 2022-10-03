import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import SongItem from "../SongItem";
import { fetchLoadAlbum } from "../../store/albums";
import { useEffect } from "react";
import "./AlbumShow.css";

const AlbumShow = () => {
  const dispatch = useDispatch();

  const { albumId } = useParams();
  const songs = useSelector((state) => state.albums.Songs);
  const album = useSelector((state) => state.albums[albumId]);
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
  }, []);

  return (
    <>
      <div id="gradient-box">
        <div>
          <div>
            <p id="album-titre">{album.title}</p>
            <p id="album-description"> {album.description} </p>
          </div>
          <span id="circle">TRACKS</span>
        </div>
        <img src={album?.previewImage} alt="Album Preview" id="album-img" />
      </div>
      {user?.id && (
        <NavLink to={`/albums/${albumId}/songs/new`}>
          <button>Add Song</button>
        </NavLink>
      )}
      <ol>
        {songs?.map((song) => (
          <li>
            <SongItem key={song?.id} song={song} />
          </li>
        ))}
      </ol>
    </>
  );
};

export default AlbumShow;
