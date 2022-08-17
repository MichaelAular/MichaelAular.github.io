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
      <div className="navItemContainer">
      <div
        className="navItemblock navitemleft"
        style={{ left: `calc(${size.itemWidth} * .5vw)`}}
        >
        <ColorSelector colorSet={colorSet} setColorSet={setColorSet} />
        <div className="naw font_pressStart"
        onClick={() => window.location = 'mailto:yourmail@gmail.com'}>

          michael.aular<br/>@yacht.nl<br/>
        </div>
      </div>

      <div
        className="navItemblock navitemright" 
        style={{ left:  window.innerWidth<800 && `calc(${size.itemWidth} * .5vw)`,
                  right: window.innerWidth>800 && `calc(${size.itemWidth} * .5vw)`
              }}
         >
        <DoodleSwitch doodle={doodle} setDoodle={setDoodle} />
        <AboutMe />
        </div>
      </div>

    </div>
  );
};

export default NavBar;
