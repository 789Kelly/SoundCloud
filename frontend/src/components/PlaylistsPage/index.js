import { useSelector } from "react-redux";
import PlaylistItem from "../PlaylistItem";

const PlaylistsPage = () => {
  const playlists = useSelector((state) => state.playlists.entries);

  return (
    <>
      <ul>
        {playlists.map((playlist) => (
          <PlaylistItem key={playlist.id} playlist={playlist} />
        ))}
      </ul>
    </>
  );
};

export default PlaylistsPage;
