import { useDispatch, useSelector } from "react-redux";
import AlbumItem from "../AlbumItem";
import { fetchAlbums } from "../../store/albums";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
import "./Albums.css";
// import { fetchSongs } from "../../store/songs";
// import SongsPage from "../SongsPage";

const AlbumsPage = () => {
  const dispatch = useDispatch();
  const albums = Object.values(useSelector((state) => state.albums));
  // const songs = Object.values(useSelector((state) => state.songs));
  // const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(fetchAlbums());
    // dispatch(fetchSongs());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchSongs());
  //   // dispatch(fetchSongs());
  // }, [dispatch]);
  // if (!user?.id && !albums.length) {
  //   return (
  //     <>
  //       <h2>No one has added any albums yet!</h2>
  //     </>
  //   );
  // } else if (user?.id && !albums.length) {
  //   return (
  //     <>
  //       <h2>No one has added any albums yet!</h2>
  //       <Link to="/albums/new">Add New Album</Link>
  //     </>
  //   );
  // } else if (!user?.id && albums.length) {
  //   return (
  //     <>
  //       <ul>
  //         {albums.map((album) => (
  //           <AlbumItem key={album.id} album={album} />
  //         ))}
  //       </ul>
  //     </>
  //   );
  // } else {
  return (
    <div id="discover-div">
      <p id="discover-title">Discover Albums</p>
      <hr id="discover-hr" />
      <div id="discover-div-chart">
        <p id="charts-10">Charts: Top 5</p>
        <p id="best-albums">The best albums of all time</p>
        <ul className="horizontal-container">
          {albums?.map((album) => (
            <AlbumItem key={album?.id} album={album} />
          ))}
        </ul>
      </div>
      {/* {user?.id && <Link to="/albums/new">Add New Album</Link>} */}
      {/* <SongsPage /> */}
      {/* <ul>
        {songs.map(
          (song) =>
            // <ASongItem key={song.id} song={song} />
            song.name
        )}
      </ul> */}
    </div>
  );
  // }
};

export default AlbumsPage;
