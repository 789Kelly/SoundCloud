import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchEditAlbum } from "../../store/albums";
import { useHistory } from "react-router-dom";

const EditAlbumForm = () => {
  const { albumId } = useParams();
  let album = useSelector((state) => state.albums[albumId]);

  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState(album.title);
  const [description, setDescription] = useState(album.description);
  const [previewImage, setPreviewImage] = useState(album.previewImage);

  const handleSubmit = async (e) => {
    e.preventDefault();
    album = { ...album, title, description, previewImage };

    const result = await dispatch(fetchEditAlbum(album));

    history.push(`/albums/${result.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Description
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Image URL
        <input
          type="text"
          value={previewImage}
          onChange={(e) => setPreviewImage(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditAlbumForm;
