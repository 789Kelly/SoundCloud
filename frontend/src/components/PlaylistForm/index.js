import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPlaylist } from "../../store/playlists";
import { useHistory } from "react-router-dom";
import "./PlaylistForm.css";

const PlaylistForm = ({ playlist }) => {
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
    <div id="center-form">
      <span id="hd-btn">HD</span>
      <p id="basic-orange">Basic info</p>
      <hr id="discover-hrs2" />
      <hr className="retrys" />
      <form onSubmit={handleSubmit}>
        <div id="create-play-flex">
          <div id="back-gradient"></div>
          <div>
            <p className="playlist-text">Name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="emails"
            />
            <p className="playlist-texts">Image URL Address</p>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="emails"
            />
            <ul className="create-play-errors">
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="retry" />
        <div id="bottom-playlist">
          <p id="asterisk-means">Required fields</p>
          <button type="submit" id="play-form-btn">
            Save changes
          </button>
        </div>
        <hr className="retry" />
      </form>
      <p id="important-p">
        <b>Important:</b> By sharing, you confirm that your playlist complies
        with our Terms of use and doesn't infringe anyone else's rights. If in
        doubt, refer to the Copyright information pages and FAQs before
        uploading.
      </p>
    </div>
  );
};

export default PlaylistForm;
