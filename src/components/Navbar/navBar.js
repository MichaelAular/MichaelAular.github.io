
import "./navBar.scss";
import ColorSelector from "./colorSelector";
import AboutMe from "./aboutme";
import DoodleSwitch from "./doodleSwittch";

const NavBar = ({
  colorSet,
  setColorSet,
  doodle,
  setDoodle,
  startup,
  setStartup
 }) => {

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const startupRun = async ()=> {
    await sleep(5000)
    setStartup(false)
    document.documentElement.style.setProperty('--alpha', 0)
    setDoodle(false)
  }

  if (startup === true) startupRun(); 

  return (
    <div className="navBar">
      <div className="ColorSelector">
        <ColorSelector colorSet={colorSet} setColorSet={setColorSet} />
      </div>
      <div className="doodleSwitch">
        <DoodleSwitch
        doodle={doodle}
        setDoodle={setDoodle}
        />
      </div>
      <div className="naw font_pressStart">
        michael@aular.nl<br/>
        michael.aular@yacht.nl<br/>
        06-14368872<br/>
      </div>
      <div className="aboutMe"> <AboutMe /> </div>
    </div>
  );
};

export default NavBar;
