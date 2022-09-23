import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PlaylistForm from "../PlaylistForm";

const EditPlaylistForm = () => {
  const { playlistId } = useParams();
  const playlist = useSelector((state) => state.playlists[playlistId]);

  return <PlaylistForm playlist={playlist} formType="Edit Playlist" />;
};

export default EditPlaylistForm;
