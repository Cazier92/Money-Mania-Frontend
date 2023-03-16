import './Settings.css'
import { Link } from "react-router-dom";
const Settings = ({handleLogout}) => {


  return (
  <div className="settingsContainer">
    <div className="settingsTitle">
    <h3 className="settingsTextTitle" >Settings</h3>
    </div>
  <div className="flexSettings">
    <h3 className="settingsText">Sound</h3>
    <div class="switch-toggle">
      <div class="button-check" id="button-check">
        <input type="checkbox" class="checkbox"></input>
        <span class="switch-btn"></span>
        <span class="layer"></span>
      </div>
    </div>
  </div>
  <div className="flexSettings">
    <h3 className="settingsText">Music</h3>
    <div class="switch-toggle">
      <div class="button-check" id="button-check1">
        <input type="checkbox" class="checkbox"></input>
        <span class="switch-btn"></span>
        <span class="layer"></span>
      </div>
    </div>
  </div>
  <div className="flexSettings"> 
    <h3 className="settingsText">Vibrations</h3>
    <div class="switch-toggle">
      <div class="button-check" id="button-check2">
        <input type="checkbox" class="checkbox"></input>
        <span class="switch-btn"></span>
        <span class="layer"></span>
      </div>
    </div>
  </div>
  <div className="flexSettings">
    <h3 className="settingsText" >Notifications</h3>
    <div class="switch-toggle">
      <div class="button-check" id="button-check3">
        <input type="checkbox" class="checkbox"></input>
        <span class="switch-btn"></span>
        <span class="layer"></span>
      </div>
    </div>
  </div>

  <div className="signOutContainer">
    <Link to={'/'}>
    <button className="signOut" onClick={handleLogout}> Sign Out </button>
    </Link>
  </div>

  </div> );
}

export default Settings;