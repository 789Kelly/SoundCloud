import { useDispatch, useSelector } from "react-redux";
import AlbumItem from "../AlbumItem";
import { fetchAlbums } from "../../store/albums";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AlbumsPage = () => {
  const dispatch = useDispatch();
  const albums = Object.values(useSelector((state) => state.albums));

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

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
};

export default AlbumsPage;
