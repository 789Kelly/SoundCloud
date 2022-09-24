import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAlbum } from "../../store/albums";
import { useHistory } from "react-router-dom";

const AlbumForm = ({ album, formType }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState(album.title);
  const [description, setDescription] = useState(album.description);
  const [imageUrl, setImageUrl] = useState(album.imageUrl);

  const handleSubmit = async (e) => {
    e.preventDefault();
    album = { ...album, title, description, imageUrl };

    const result = await dispatch(fetchAlbum(album));

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
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AlbumForm;
