import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const PlaylistShow = () => {
  const { playlistId } = useParams();
  const playlist = useSelector((state) => state.playlists[playlistId]);

  return (
    <>
      ID: {playlist.id}
      <br />
      Title: {playlist.title}
      <br />
      Description: {playlist.description}
      <br />
      Created At: {playlist.createdAt}
      <br />
      Updated At: {playlist.updatedAt}
      <br />
      Preview Image: {playlist.previewImage}
      <br />
      <Link to="/playlists">Back to Playlists</Link>
    </>
  );
};

export default PlaylistShow;
