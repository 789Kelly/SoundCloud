import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchLoadData } from "../../store/playlists";
import { useEffect } from "react";

const PlaylistShow = () => {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const playlist = useSelector((state) => state.playlists[playlistId]);

  useEffect(() => {
    dispatch(fetchLoadData(playlistId));
  }, [dispatch, playlistId]);

  return (
    <>
      ID: {playlist?.id}
      <br />
      User Id: {playlist?.userId}
      <br />
      Name: {playlist?.name}
      <br />
      Created At: {playlist?.createdAt}
      <br />
      Updated At: {playlist?.updatedAt}
      <br />
      Preview Image: {playlist?.previewImage}
    </>
  );
};

export default PlaylistShow;
