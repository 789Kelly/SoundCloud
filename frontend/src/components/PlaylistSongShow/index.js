import { useParams } from "react-router-dom";
import { fetchSong } from "../../store/songs";
import "./SongShow.css";
import ReactHowler from "react-howler";

const PlaylistSongShow = () => {
  const dispatch = useDispatch();

  const { songId } = useParams();

  const [playing, setPlaying] = useState(false);

  const play = () => {
    setPlaying(!playing);
  };

  const song = useSelector((state) => state.songs[songId]);

  useEffect(() => {
    dispatch(fetchSong(songId));
  }, []);

  return (
    <div id="gradient-boxs">
      <div id="left-playlist">
        <div id="song-top-flex">
          <ReactHowler playing={playing} src={song.url} />
          <img
            src="/images/play-pause.png"
            alt="Play Button"
            id="play-btn"
            onClick={play}
          />
          <div>
            <p id="album-titre">{song.title}</p>
            <p id="album-descriptions"> {song.description} </p>
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
  );
};

export default PlaylistSongShow;
