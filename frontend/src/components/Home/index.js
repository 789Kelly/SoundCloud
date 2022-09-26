import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="container-1">
        <img
          src="/images/ManSinging.jpeg"
          alt="Man Singing"
          style={{ width: "100%" }}
        />
        <div className="centered-1">
          What's next in music is first on SoundCloud
        </div>
        <div className="centered-2">
          Upload your first track and begin your journey. SoundCloud gives you
          space to create, find your fans, and connect with other artists.
        </div>
        <div className="centered-3">
          <NavLink to="signup">
            <button className="btn">Start uploading today</button>
          </NavLink>
        </div>
      </div>
      {/* <div className="container-2">
        <input placeholder="Search for artists" />
        <div>or</div>
        <div>
          <NavLink to="/signup">
            <button className="btn">Upload your own</button>
          </NavLink>
        </div>
      </div> */}
      <div className="container-5">
        <div className="left-text">
          <div className="left-1">Calling all creators</div>
          <div className="left-2">
            Get on Soundcloud to connect with fans, share your sounds, and grow
            your audience. What are you waiting for?
          </div>
        </div>
        <img
          src="/images/CharmaineH.jpeg"
          alt="Charmaine"
          style={{ maxWidth: "50%" }}
        />
      </div>
      <div className="container-6">
        <div className="centered-4">Thanks for listening. Now join in.</div>
        <div className="centered-5">
          Save tracks, follow artists and build playlists. All for free.
        </div>
        <div className="centered-6">
          <NavLink to="/signup">
            <button className="btn">Create account</button>
          </NavLink>
        </div>
      </div>
      <div className="container-7">
        <p className="fine-print">Already have an account?</p>
        <div>
          <NavLink to="/login">
            <button className="btn-3">Sign in</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Home;
