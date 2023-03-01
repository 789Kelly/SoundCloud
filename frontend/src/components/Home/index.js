import { NavLink } from "react-router-dom";
import "./Home.css";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.session.user);

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
        {/* <div className="centered-3">
          <NavLink to="signup">
            <button className="btn">Start uploading today</button>
          </NavLink>
        </div> */}
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
      {!user?.id && (
        <div className="centered-6">
          <NavLink to="/albums">
            <button className="btn">Explore trending albums</button>
          </NavLink>
        </div>
      )}
      {user?.id && (
        <div className="two-buttons">
          <NavLink to="/albums">
            <button className="btn-272">Explore trending albums</button>
          </NavLink>
          <div>or</div>
          <NavLink to="/playlists">
            <button className="btn-272">View your playlists</button>
          </NavLink>
        </div>
      )}
      <div className="container-4">
        <img
          src="/images/devices.png"
          alt="Devices"
          style={{ maxWidth: "50%" }}
        />
        <div className="right-text">
          <div className="right-1">Never stop listening</div>
          <img src="/images/bar.jpeg" alt="Devices" className="right-3" />
          <div className="right-2">
            SoundCloud is available on Web, iOS, Android, Sonos, Chromecast, and
            Xbox One.
          </div>
          <div className="container-42">
            <a
              href="https://apps.apple.com/us/app/soundcloud/id336353151"
              target={"_blank"}
              className="right-12"
              style={{ maxWidth: "45%" }}
            >
              <button className="apple">
                <img
                  src="/images/apple.png"
                  alt="Download on the App Store"
                  height="100%"
                  width="100%"
                />
              </button>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.soundcloud.android&hl=us"
              target={"_blank"}
            >
              <button className="google">
                <img
                  src="/images/android.png"
                  alt="Get it on Google Play"
                  height="100%"
                  width="100%"
                />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="container-5">
        <div className="left-text">
          <div className="left-1">Calling all creators</div>
          <div className="left-2">
            Get on Soundcloud to connect with fans, share your sounds, and grow
            your audience. What are you waiting for?
          </div>
          <div className="left-3">
            <NavLink to="/albums">
              <button className="btn-4">Find out more</button>
            </NavLink>
          </div>
        </div>
        <img
          src="/images/Charmaine.jpeg"
          alt="Charmaine"
          style={{ maxWidth: "66%" }}
          className="image-1"
        />
      </div>
      <div className="container-6">
        <div className="centered-4">Thanks for listening. Now join in.</div>
        <div className="centered-5">
          Save tracks, follow artists and build playlists. All for free.
        </div>
        <div id="footer">
          <a
            href="https://github.com/KellyAnneSantos/LoudCloud"
            target={"_blank"}
          >
            <img
              src="/images/githublogo.png"
              alt="Link to Github"
              id="git-hub"
            />
          </a>
          <a
            href="https://github.com/KellyAnneSantos/LoudCloud"
            target={"_blank"}
            id="Kelly-Anne-Santos"
          >
            <p>KellyAnneSantos</p>
          </a>
        </div>
        {/* <div className="centered-6">
              <NavLink to="/signup">
                <button className="btn">Create account</button>
              </NavLink>
            </div> */}
      </div>

      {/* <div className="container-7">
            <p className="fine-print">Already have an account?</p>
            <div>
              <NavLink to="/login">
                <button className="btn-3">Sign in</button>
              </NavLink>
            </div>
          </div> */}
    </>
  );
}

export default Home;
