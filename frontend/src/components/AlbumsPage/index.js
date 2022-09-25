import { useDispatch, useSelector } from "react-redux";
import AlbumItem from "../AlbumItem";
import { fetchAlbums } from "../../store/albums";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AlbumsPage = () => {
  const dispatch = useDispatch();
  const albums = Object.values(useSelector((state) => state.albums));
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  if (!user?.id && !albums.length) {
    return (
      <>
        <h2>No one has added any albums yet!</h2>
      </>
    );
  } else if (user?.id && !albums.length) {
    return (
      <>
        <h2>No one has added any albums yet!</h2>
        <Link to="/albums/new">Add New Album</Link>
      </>
    );
  } else if (!user?.id && albums.length) {
    return (
      <>
        <ul>
          {albums.map((album) => (
            <AlbumItem key={album.id} album={album} />
          ))}
        </ul>
      </>
    );
  } else {
    return (
      <>
        <ul>
          {albums.map((album) => (
            <AlbumItem key={album.id} album={album} />
          ))}
        </ul>
        <Link to="/albums/new">Add New Album</Link>
      </>
    );
  }
};

export default AlbumsPage;
