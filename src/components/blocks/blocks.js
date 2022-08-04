import BlockLeft from "./blockLeft/blockLeft";
import BlockRight from "./blockRight/blockRight";
import "./blocks.scss";

const Blocks = ({ projects, setShader, shader, displayedProject }) => {

  const currentproject = projects[displayedProject];

  return (
    <div className="blockContainer">
      <div className="blockLeft">
        <BlockLeft
          project={currentproject}
          shader={shader}
          setShader={setShader}
        />
      </div>

      <div className="blockRight" >
        <BlockRight project={currentproject} />
      </div>
    </div>
  );
};

export default Blocks;
