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
    await sleep(3000)
    setStartup(false)
    document.documentElement.style.setProperty('--alpha', 0)
    setDoodle(false)
  }

  startup && startupRun();

  return (
    <div className="navBar">
      <div
        className="navItemblock navitemleft"
        style={{ left: 
          (window.innerWidth < 400)
          ? ``
          : (window.innerWidth < 450)
          ? `0vw`
          : (window.innerWidth < 601)
          ? `2vw`
          : (window.innerWidth < 800)
          ? `calc(${size.itemWidth * .38}vw)`
          : `calc(${size.itemWidth * .5}vw)`,}}
        >
        <ColorSelector
        colorSet={colorSet}
        setColorSet={setColorSet}
        className="colorSelector"
        />
        <div className="naw font_pressStart"
        onClick={() => window.location = 'mailto:yourmail@gmail.com'}>

          michael.aular<br/>@yacht.nl<br/>
        </div>
      </div>

      <div
        className="navItemblock navitemright"
        style={{right:
          (window.innerWidth < 400)
          ? ``
          : (window.innerWidth < 450)
          ? `-7vw`
          : (window.innerWidth < 601)
          ? `-1.2vw`
          : (window.innerWidth < 800)
          ? `calc(${size.itemWidth * .3}vw)`
          : `calc(${size.itemWidth * .5}vw)`,}}
         >
        <DoodleSwitch
        doodle={doodle}
        setDoodle={setDoodle}
        />
        <AboutMe
        className="aboutMe"
        />

      </div>
    </div>
  );
};

export default NavBar;
