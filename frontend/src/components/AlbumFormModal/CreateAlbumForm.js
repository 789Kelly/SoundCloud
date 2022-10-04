// import { useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
import AlbumForm from "./AlbumForm";

const CreateAlbumForm = () => {
  // const sessionUser = useSelector((state) => state.session.user);
  const album = {
    title: "",
    description: "",
    imageUrl: "",
  };

  // if (!sessionUser?.id) return <Redirect to="/discover" />;
  return <AlbumForm album={album} formType="Add Album" />;
};

export default CreateAlbumForm;
