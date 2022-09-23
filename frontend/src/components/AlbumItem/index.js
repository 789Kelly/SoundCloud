import { useDispatch } from "react-redux";
import { fetchDeleteAlbum } from "../../store/albums";
import { Link } from "react-router-dom";

const AlbumItem = ({ album }) => {
  const dispatch = useDispatch();

  const removeAlbum = async (e) => {
    e.preventDefault();

    await dispatch(fetchDeleteAlbum(album.id));
  };

  return (
    <>
      <Link to={`/albums/${album.id}`}>{album.title}</Link>
      <Link to={`/albums/${album.id}/edit`}>Edit</Link>
      <button onClick={removeAlbum}>Delete Album</button>
    </>
  );
};

export default AlbumItem;
