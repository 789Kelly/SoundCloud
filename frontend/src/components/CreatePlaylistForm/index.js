import PlaylistForm from "../PlaylistForm";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const CreatePlaylistForm = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const playlist = {
    name: "",
    imageUrl: "",
  };

  if (!sessionUser?.id) return <Redirect to="/" />;
  return <PlaylistForm playlist={playlist} form="Add new playlist" />;
};

export default CreatePlaylistForm;
