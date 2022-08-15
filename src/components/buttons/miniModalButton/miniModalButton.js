import "./miniModalButton.scss";



const MiniModalButton = ({ size, setDisplayedProject, index}) => {
    const clickEvent =()=> {
        setDisplayedProject(index)
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