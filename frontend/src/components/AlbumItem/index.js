import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteAlbum } from "../../store/albums";
import { Link } from "react-router-dom";

const AlbumItem = ({ album }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const removeAlbum = async (e) => {
    e.preventDefault();

    await dispatch(fetchDeleteAlbum(album.id));
  };

  // if (user?.id && album?.userId === user?.id) {
  //   return (
  //     <>
  //       <Link to={`/albums/${album.id}`}>{album.title}</Link>
  //       <Link to={`/albums/${album.id}/edit`}>Edit</Link>
  //       <button onClick={removeAlbum}>Delete Album</button>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <Link to={`/albums/${album.id}`}>{album.title}</Link>
  //     </>
  //   );
  // }

  return (
    <>
      ID: {album.id}
      <br />
      User ID: {album.userId}
      <br />
      Title: {album.title}
      <br />
      Description: {album.description}
      <br />
      Created At: {album.createdAt}
      <br />
      Updated At: {album.updatedAt}
      <br />
      <img
        src={album.previewImage}
        alt="Album PreviewImage"
        // style={{ width: "100%" }}
      />
      {console.log(album.previewImage)}
    </>
  );
};

export default AlbumItem;
