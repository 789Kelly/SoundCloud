import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAlbum } from "../../store/albums";
import { useHistory } from "react-router-dom";
import "./AlbumForm.css";

const AlbumForm = ({ album, form }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState(album.title);
  const [description, setDescription] = useState(album.description);
  const [imageUrl, setImageUrl] = useState(album.imageUrl);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    album = { ...album, title, description, imageUrl };
    setErrors([]);

    const response = await dispatch(fetchAlbum(album)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });

    if (response) history.push("/albums");
    // if (response) return <Redirect to="/albums" />;
  };

  return (
    <div id="center-forms">
      <span id="hd-btns">HD</span>
      <p id="basic-oranges">{form}</p>
      <hr id="discover-hrs22" />
      <hr className="retrysss" />
      <form onSubmit={handleSubmit}>
        <div id="create-play-flexs">
          <div id="back-gradients"></div>
          <div>
            <p className="playlist-textss">Name</p>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="emailss"
            />
            <p className="playlist-textss">Description</p>
            <input
              className="emailss"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <p className="playlist-textsss">Image URL Address</p>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="emailss"
            />
            <ul className="create-play-errorss">
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="retryss" />
        <div id="bottom-playlists">
          <p id="asterisk-meanss">Required fields</p>
          <button type="submit" id="play-form-btns">
            Save changes
          </button>
        </div>
        <hr className="retryss" />
      </form>
      <p id="important-ps">
        <b>Important:</b> By sharing, you confirm that your playlist complies
        with our Terms of use and doesn't infringe anyone else's rights. If in
        doubt, refer to the Copyright information pages and FAQs before
        uploading.
      </p>
    </div>
  );
};

export default AlbumForm;
