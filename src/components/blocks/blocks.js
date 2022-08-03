
import BlockLeft from "./blockLeft/blockLeft";
import BlockRight from "./blockRight/blockRight";
import useWindowSize from "../../hooks/windowsize";
import "./blocks.scss";

const Blocks = ({ projects, setShader, shader,displayedProject }) => {
  const size = useWindowSize();

  const currentproject = projects[displayedProject]

  return (
    <div className="blockContainer">

      <div className="blockLeft">
        <BlockLeft
      project={currentproject}
      shader={shader}
      setShader={setShader}
      />
      </div>

      <div className="blockRight" style={{ top: "10vh", left: `calc((${size.itemWidth}vw * 4) - 2.4vw)`,}} >
        <BlockRight
        project={currentproject}/>
      </div>

      </div>
  );
};

export default Blocks;
