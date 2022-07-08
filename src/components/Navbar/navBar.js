
import "./navBar.scss";
import ColorSelector from "./colorSelector";
import AboutMe from "./aboutme";
import DoodleSwitch from "./doodleSwittch";

const NavBar = ({ colorSet, setColorSet, doodle, setDoodle }) => {

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
      <div className="aboutMe"> <AboutMe /> </div>
    </div>
  );
};

export default NavBar;
