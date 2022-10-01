import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSongs } from "../../store/songs";

const SongsPage = () => {
  const dispatch = useDispatch();
  const songs = Object.values(useSelector((state) => state.songs));
  // const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  return (
    <>
      <ul>
        {songs.map(
          (song) =>
            // <ASongItem key={song.id} song={song} />
            song.name
        )}
      </ul>
    </>
  );
  // }
};

export default SongsPage;
