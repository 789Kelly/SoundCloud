import PlaylistForm from "../PlaylistForm";

const CreatePlaylistForm = () => {
  const playlist = {
    name: "",
    imageUrl: "",
  };

  return <PlaylistForm playlist={playlist} formType="Add Playlist" />;
};

export default CreatePlaylistForm;
