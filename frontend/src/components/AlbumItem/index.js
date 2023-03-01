import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchDeleteAlbum } from "../../store/albums";
import "./AlbumItem.css";

const AlbumItem = ({ album }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const removeAlbum = async (e) => {
    e.preventDefault();

    await dispatch(fetchDeleteAlbum(album.id));
  };

  // if (user?.id && album?.userId === user?.id) {
  //   return (
  //     <>
  //       <Link to={`/albums/${album.id}`}>{album.title}</Link>
  //       <Link to={`/albums/${album.id}/edit`}>Edit</Link>
  //       <button onClick={removeAlbum}>Delete Album</button>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <Link to={`/albums/${album.id}`}>{album.title}</Link>
  //     </>
  //   );
  // }

  return (
    <div className="horizontal-ele">
      <NavLink to={`/albums/${album.id}`}>
        <img
          src={album?.previewImage}
          alt="Album Preview"
          // style={{ width: "100%" }}
          className="nav-link"
        />
      </NavLink>
      <div>
        {/* <NavLink to={`/albums/${album?.id}`} id="album-title"> */}
        <p id="album-title">{album?.title}</p>
        {/* </NavLink> */}
        <p id="album-descr">{album?.description}</p>
      </div>
      <div className="remove-margin">
        {album?.userId === user?.id && (
          <>
            <NavLink to={`/albums/${album.id}/edit`}>
              <button className="discover-btn">Edit</button>
            </NavLink>
            <button onClick={removeAlbum} className="discover-btn">
              Delete Album
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AlbumItem;
