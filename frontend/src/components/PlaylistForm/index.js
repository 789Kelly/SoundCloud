import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPlaylist } from "../../store/playlists";
import { useHistory } from "react-router-dom";

const PlaylistForm = ({ playlist, formType }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState(playlist.name);
  const [imageUrl, setImageUrl] = useState(playlist.imageUrl);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    playlist = { ...playlist, name, imageUrl };
    setErrors([]);

    const response = await dispatch(fetchPlaylist(playlist)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );

    if (response) history.push("/playlists");
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

export default PlaylistForm;
