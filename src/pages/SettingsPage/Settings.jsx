import './Settings.css'
const Settings = () => {



  return (
  <>
  <h3>Sound</h3>
  <div class="switch-toggle">
    <div class="button-check" id="button-check">
      <input type="checkbox" class="checkbox"></input>
      <span class="switch-btn"></span>
      <span class="layer"></span>
    </div>
  </div>
  <h3>Music</h3>
  <div class="switch-toggle">
    <div class="button-check" id="button-check1">
      <input type="checkbox" class="checkbox"></input>
      <span class="switch-btn"></span>
      <span class="layer"></span>
    </div>
  </div>
  <h3>Vibrations</h3>
  <div class="switch-toggle">
    <div class="button-check" id="button-check2">
      <input type="checkbox" class="checkbox"></input>
      <span class="switch-btn"></span>
      <span class="layer"></span>
    </div>
  </div>
  <h3>Notifications</h3>
  <div class="switch-toggle">
    <div class="button-check" id="button-check3">
      <input type="checkbox" class="checkbox"></input>
      <span class="switch-btn"></span>
      <span class="layer"></span>
    </div>
  </div>
  <div>
    <button className="signOut"> Sign Out </button> 
  </div>

  </> );
}

export default Settings;