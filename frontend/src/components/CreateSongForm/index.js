import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadSong } from "../../store/albums";
import { useHistory, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const CreateSongForm = () => {
  const { albumId } = useParams();
  let album = useSelector((state) => state.albums[albumId]);
  const user = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState([]);
  //dispatch in a useeffect if album is empty

  if (!user?.id) return <Redirect to="/albums" />;
  if (album?.userId !== user?.id) return <Redirect to="/albums" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let song = { title, description, url, imageUrl };
    let object = { albumId, nested: { ...song } };
    console.log(object);
    setErrors([]);

    const response = await dispatch(uploadSong(object)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });

    if (response) history.push(`/albums/${albumId}`);
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
        URL
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
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

export default CreateSongForm;
