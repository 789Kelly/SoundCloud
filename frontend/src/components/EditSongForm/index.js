import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { fetchEditSong } from "../../store/songs";

const EditSongForm = () => {
  const { songId } = useParams();
  let song = useSelector((state) => state.songs[songId]);
  const user = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState(song?.title);
  const [description, setDescription] = useState(song.description);
  const [url, setUrl] = useState(song.url);
  const [imageUrl, setImageUrl] = useState(song.imageUrl);
  const [errors, setErrors] = useState([]);

  if (!user?.id) return <Redirect to="/albums" />;
  if (song?.userId !== user?.id) return <Redirect to="/albums" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    song = { ...song, title, description, url, imageUrl };
    setErrors([]);

    const response = await dispatch(fetchEditSong(song, song.id)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );

    if (response) history.push("/albums");
  };

  return (
    <div id="center-forms">
      <span id="hd-btns">HD</span>
      <p id="basic-oranges">Edit song</p>
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
            <p className="playlist-textss">Artist</p>
            <input
              className="emailss"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <p className="playlist-textss">Song URL Address</p>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="emailss"
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

export default EditSongForm;
