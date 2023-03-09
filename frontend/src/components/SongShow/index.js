import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSong } from "../../store/songs";
import "./SongShow.css";
import ReactHowler from "react-howler";
import { fetchAddComment, fetchComments } from "../../store/comments";

const SongShow = () => {
  const dispatch = useDispatch();

  const { songId } = useParams();

  const user = useSelector((state) => state.session.user);

  const [isLoaded, setIsLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([]);

  const play = () => {
    setPlaying(!playing);
  };

  const song = useSelector((state) => state?.songs[songId]);
  const comments = Object.values(
    useSelector((state) => state.comments)
  ).reverse();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let comment = { body };
    setErrors([]);

    const response = await dispatch(fetchAddComment(comment, songId)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    setBody("");
  };

  useEffect(() => {
    dispatch(fetchComments(songId));
    dispatch(fetchSong(songId)).then(() => setIsLoaded(true));
  }, []);

  return (
    <>
      {isLoaded && (
        <>
          <div id="gradient-boxs">
            <div id="left-playlist">
              <div id="song-top-flex">
                <ReactHowler playing={playing} src={song?.url} />
                <img
                  src="/images/play-pause.png"
                  alt="Play Button"
                  id="play-btn"
                  onClick={play}
                />
                <div>
                  <p id="album-titre">{song?.title}</p>
                  <p id="album-descriptions"> {song?.description} </p>
                </div>
              </div>
              <img
                src="/images/PngItem_1197423.png"
                alt="Sound Wave"
                id="soundwave"
              />
            </div>
            <img src={song?.previewImage} alt="Album Preview" id="album-imgs" />
          </div>
          <div id="for-screens">
            <div id="input-container">
              <img src={user?.previewImage} alt="User" id="user-img" />
              <form onSubmit={handleSubmit}>
                <input
                  id="comment-input"
                  // type="text"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  required
                />
                <button type="submit" style={{ display: "none" }}></button>
              </form>
            </div>
            <hr id="discover-hrs" />
            <div id="song-comment-container">
              <div>
                <img
                  src={song?.Artist?.previewImage}
                  alt="Artist"
                  id="artist-img"
                />
                <p>{song?.Artist?.username}</p>
              </div>
              <div>
                <p id="comment-count">{comments?.length} comment(s)</p>
                <hr id="discover-hrs" />
                {comments?.map((comment) => (
                  <>
                    <div className="comment-top">
                      <img
                        src={comment?.User?.previewImage}
                        alt="Artist"
                        className="user-comment-img"
                      />
                      <span>{comment?.User?.username}</span>
                    </div>
                    <p>{comment?.body}</p>
                  </>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SongShow;
