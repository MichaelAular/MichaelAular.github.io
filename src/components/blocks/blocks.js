import BlockLeft from "./blockLeft/blockLeft";
import BlockRight from "./blockRight/blockRight";
import "./blocks.scss";

const Blocks = ({
  projects,
  setShader,
  shader,
  displayedProject,
  setPicOpen1,
  setPicOpen2,
  setPicOpen3,
  setTitleOpen1,
  setTitleOpen2,
  setTitleOpen3,
  setModalProject
  }) => {

  const currentproject = projects[displayedProject];

  return (
    <div className="blockContainer">
      <div className="blockLeft col">
        <BlockLeft
          project={currentproject}
          shader={shader}
          setShader={setShader}
          setPicOpen1={setPicOpen1}
          setPicOpen2={setPicOpen2}
          setPicOpen3={setPicOpen3}
          setTitleOpen1={setTitleOpen1}
          setTitleOpen2={setTitleOpen2}
          setTitleOpen3={setTitleOpen3}
          setModalProject={setModalProject}
        />
      </div>

      <div className="blockRight col" >
        <BlockRight project={currentproject} />
      </div>
    </div>
  );
};

export default Blocks;
