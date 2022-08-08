
import "./navBar.scss";
import ColorSelector from "./colorSelector";
import AboutMe from "./aboutme";
import DoodleSwitch from "./doodleSwittch";
import useWindowSize from "../../hooks/windowsize";

const NavBar = ({
  colorSet,
  setColorSet,
  doodle,
  setDoodle,
  startup,
  setStartup
 }) => {

  const size = useWindowSize();
  const sleep = (milliseconds) => { return new Promise((resolve) => setTimeout(resolve, milliseconds)) };
  const startupRun = async ()=> {
    await sleep(5000)
    setStartup(false)
    document.documentElement.style.setProperty('--alpha', 0)
    setDoodle(false)
  }

  if (startup === true) startupRun();

  return (
    <div className="navBar">
      <div className="navItemContainer">
      <div
        className="navItemblock"
        style={{ left: `calc(${size.itemWidth * 0.5}vw)` }}
        >
        <ColorSelector colorSet={colorSet} setColorSet={setColorSet} />
        <div className="naw font_pressStart">
          michael.aular<br/>@yacht.nl<br/>
        </div>
      </div>

      <div
        className="navItemblock navitemright"
         >
        <DoodleSwitch doodle={doodle} setDoodle={setDoodle} />
        <AboutMe />
        </div>
      </div>

    </div>
  );
};

export default NavBar;
