import { useDispatch } from "react-redux";
import { fetchEditPlaylist } from "../../store/playlists";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const EditPlaylistForm = () => {
  const { playlistId } = useParams();
  let playlist = useSelector((state) => state.playlists[playlistId]);

  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState(playlist.name);
  const [previewImage, setPreviewImage] = useState(playlist.previewImage);

  const handleSubmit = async (e) => {
    e.preventDefault();
    playlist = { ...playlist, name, previewImage };

    const result = await dispatch(fetchEditPlaylist(playlist));

    history.push(`/playlists/${result.id}`);
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
          value={previewImage}
          onChange={(e) => setPreviewImage(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditPlaylistForm;
