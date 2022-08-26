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
 }) => {

  const size = useWindowSize();

  return (
    <div className="navBar">
      <div
        className="navItemblock navitemleft"
        style={{ left:
           (window.innerWidth < 601)
          ? `0vw`
          : (window.innerWidth < 800)
          ? `calc(${size.itemWidth * .38}vw)`
          : `calc(${(size.itemWidth * .5) + .5}vw)`,}}
        >
        <ColorSelector
        colorSet={colorSet}
        setColorSet={setColorSet}
        className="colorSelector"
        />
        <div className="naw font_bangers"
        onClick={() => window.location = 'mailto:yourmail@gmail.com'}>

          michael.aular<br/>@yacht.nl<br/>
        </div>
      </div>

      <div
        className="navItemblock navitemright"
        style={{right:
         (window.innerWidth < 601)
          ? `0vw`
          : (window.innerWidth < 800)
          ? `12vw`
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
