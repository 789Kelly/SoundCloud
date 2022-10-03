function SongItem({ song }) {
  return (
    <>
      {/* ID: {song.id}
      <br />
      User ID: {song.userId}
      <br />
      Album ID: {song.albumId}
      <br /> */}
      Song: {song.title}
      <br />
      Description: {song.description}
      <br />
      {/* URL: {song.url} */}
      {/* <br /> */}
      {/* Created At: {song.createdAt}
      <br />
      Updated At: {song.updatedAt}
      <br /> */}
      Preview Image: {song.previewImage}
      <br />
    </>
  );
}

export default SongItem;
