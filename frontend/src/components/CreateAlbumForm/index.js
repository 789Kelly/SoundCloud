import AlbumForm from "../AlbumForm";

const CreateAlbumForm = () => {
  const album = {
    title: "",
    description: "",
    imageUrl: "",
  };

  return <AlbumForm album={album} formType="Add Album" />;
};

export default CreateAlbumForm;
