import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlaylist } from "../../store/playlists";
import { useHistory } from "react-router-dom";

const PlaylistForm = ({ playlist, formType }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState(playlist.title);
  const [imageUrl, setImageUrl] = useState(playlist.imageUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    playlist = { ...playlist, name, imageUrl };

    dispatch(addPlaylist(playlist));
    history.push(`/playlists/${playlist.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
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
