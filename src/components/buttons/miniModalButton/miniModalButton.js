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
    <button className="font_bangers miniModal_button"
    style={{
        width: "fit-content",
        height: size.itemWidth * .11 +"vw",
        paddingLeft: "1vw",
        paddingRight: "1vw"
    }}
    onClick={clickEvent}>
     LEARN MORE
    </button>)
}

export default MiniModalButton;