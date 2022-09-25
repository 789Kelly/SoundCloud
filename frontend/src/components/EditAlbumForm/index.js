import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchEditAlbum } from "../../store/albums";
import { useHistory, Redirect } from "react-router-dom";

const EditAlbumForm = () => {
  const { albumId } = useParams();
  let album = useSelector((state) => state.albums[albumId]);
  const user = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState(album?.title);
  const [description, setDescription] = useState(album?.description);
  const [previewImage, setPreviewImage] = useState(album?.previewImage);
  const [errors, setErrors] = useState([]);
  //dispatch in a useeffect if album is empty

  if (!user?.id) return <Redirect to="/albums" />;
  if (album?.userId !== user?.id) return <Redirect to="/albums" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    album = { ...album, title, description, previewImage };
    setErrors([]);

    const response = await dispatch(fetchEditAlbum(album)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );

    if (response) history.push("/albums");
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
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
