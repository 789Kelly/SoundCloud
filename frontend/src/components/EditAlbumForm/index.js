import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AlbumForm from "../AlbumForm";

const EditAlbumForm = () => {
  const { albumId } = useParams();
  const album = useSelector((state) => state.albums[albumId]);

  return <AlbumForm album={album} formType="Edit Album" />;
};

export default EditAlbumForm;
