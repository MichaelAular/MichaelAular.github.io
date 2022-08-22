import "./miniModalButton.scss";



const MiniModalButton = ({
    size,
    setDisplayedProject,
    setShader,
    index,
    setHovered
}) => {
    const clickEvent =()=> {
        setDisplayedProject(index)
        setShader(false)
        setHovered(false)
    }

    return(
    <button className="font_marker miniModal_button"
    style={{
        width: "fit-content",
        height: size.itemWidth * .1 +"vw"
    }}
    onClick={clickEvent}>
    <svg viewBox="30 -21 85 25"
      style={{
        width: size.itemWidth * .5 +"vw",
    }}>
     <text
     style={{
        color: "blue"
     }}>
        LEARN MORE
        </text>
    </svg>
    </button>)
}

export default MiniModalButton;