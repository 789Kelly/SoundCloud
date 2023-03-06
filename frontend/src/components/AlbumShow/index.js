import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import SongItem from "../SongItem";
import { fetchLoadAlbum } from "../../store/albums";
import { useEffect } from "react";
import "./AlbumShow.css";
import { fetchAlbumSongs, fetchSongs } from "../../store/songs";

const AlbumShow = () => {
  const dispatch = useDispatch();

  const { albumId } = useParams();
  const songs = Object.values(useSelector((state) => state.songs));
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
    dispatch(fetchAlbumSongs(albumId));
  }, []);

  return (
    <>
      <div id="gradient-boxs">
        <div id="left-playlist">
          <div>
            <p id="album-titre">{album.title}</p>
            <p id="album-descriptions"> {album.description} </p>
          </div>
          <span id="circles">TRACKS</span>
        </div>
        <img src={album?.previewImage} alt="Album Preview" id="album-imgs" />
      </div>
      <div id="for-screens">
        {album?.userId === user?.id && (
          <>
            <NavLink to={`/albums/${albumId}/songs/new`}>
              <button className="btn-3s">Add Song</button>
            </NavLink>
            <hr id="discover-hrs" />
          </>
        )}
        <ol className="remove-indent">
          {songs?.map((song, index) => (
            <li className="song-row">
              <SongItem key={song?.id} song={song} index={index} />
              <hr id="discover-hrss" />
            </li>
          ))}
        </ol>
      </div>
      {/* <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;{ ADD YOUR PARAMETERS HERE }"
      ></iframe> */}
    </>
  );
};

export default AlbumShow;
