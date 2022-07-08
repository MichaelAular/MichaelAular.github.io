import "./miniModalButton.scss";

const MiniModalButton = ({ size }) => {
    return(
    <button className="miniModal_button font_marker"
    style={{
        width: size.itemWidth * 0.5 +"vw",
        height: size.itemWidth * .1 +"vw"
    }}
    >LEARN MORE</button>)
}

export default MiniModalButton;