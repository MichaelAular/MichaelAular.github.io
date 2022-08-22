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
        height: size.itemWidth * .11 +"vw"
    }}
    onClick={clickEvent}>
     LEARN MORE
    </button>)
}

export default MiniModalButton;