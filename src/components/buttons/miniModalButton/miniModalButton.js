import "./miniModalButton.scss";

const clickEvent =()=> {console.log("hello world")}

const MiniModalButton = ({ size, setDisplayedProject }) => {
    return(
    <button className="miniModal_button font_marker"
    style={{
        width: size.itemWidth * 0.5 +"vw",
        height: size.itemWidth * .1 +"vw"
    }}
    onClick={clickEvent}
    >LEARN MORE</button>)
}

export default MiniModalButton;