import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const AlbumShow = () => {
  const { albumId } = useParams();
  const album = useSelector((state) => state.albums[albumId]);

  return (
    <>
      ID: {album?.id}
      <br />
      Title: {album?.title}
      <br />
      Description: {album?.description}
      <br />
      Created At: {album?.createdAt}
      <br />
      Updated At: {album?.updatedAt}
      <br />
      Preview Image: {album?.previewImage}
      <br />
      <Link to="/albums">Back to Albums List</Link>
    </>
  );
};

export default AlbumShow;
