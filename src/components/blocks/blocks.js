import useWindowSize from "../../hooks/windowsize";
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
  setModalProject,
  carouselUp
  }) => {

  const currentproject = projects[displayedProject];
  const size=useWindowSize()

  return (
    <div className="blockContainer"
    style={{
      height: `calc(98vh - ${size.itemHeight}vw - 95px - 2vw)`,
    }}>
      <div className="blockLeft">
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
          carouselUp={carouselUp}
        />
      </div>

      <div className="blockRight" >
        <BlockRight
        project={currentproject}
        carouselUp={carouselUp}
        />
      </div>
    </div>
  );
};

export default Blocks;
