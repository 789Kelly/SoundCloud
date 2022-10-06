import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import AlbumForm from "../AlbumForm";

const CreateAlbumForm = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const album = {
    title: "",
    description: "",
    imageUrl: "",
  };

  if (!sessionUser?.id) return <Redirect to="/albums" />;
  return <AlbumForm album={album} form="Add new album" />;
};

export default CreateAlbumForm;
