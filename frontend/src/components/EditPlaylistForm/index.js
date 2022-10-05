import { useDispatch } from "react-redux";
import { fetchEditPlaylist } from "../../store/playlists";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const EditPlaylistForm = () => {
  const { playlistId } = useParams();
  let playlist = useSelector((state) => state.playlists[playlistId]);
  const user = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState(playlist?.name);
  const [previewImage, setPreviewImage] = useState(playlist?.previewImage);
  const [errors, setErrors] = useState([]);

  if (!user?.id) return <Redirect to="/" />;
  if (playlist?.userId !== user?.id) return <Redirect to="/playlists" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    playlist = { ...playlist, name, previewImage };
    setErrors([]);

    const response = await dispatch(fetchEditPlaylist(playlist)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );

    if (response) history.push("/playlists");
  };

  return (
    <div id="center-forms">
      <span id="hd-btns">HD</span>
      <p id="basic-oranges">Basic info</p>
      <hr id="discover-hrs22" />
      <hr className="retrysss" />
      <form onSubmit={handleSubmit}>
        <div id="create-play-flexs">
          <div id="back-gradients"></div>
          <div>
            <p className="playlist-textss">Name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="emailss"
            />
            <p className="playlist-textsss">Image URL Address</p>
            <input
              type="text"
              value={previewImage}
              onChange={(e) => setPreviewImage(e.target.value)}
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

export default EditPlaylistForm;
