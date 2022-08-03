import "./colorSelector.scss";
import HandDrawnOutlineRight from "../../assets/icons/handDrawnOutLineRight";

const ColorSelector = ({colorSet, setColorSet}) => {


  return (
    <div className="colorSelector">
      <button
        className={`colorSet1 colorButton ${
        colorSet === 1 ? "grayscaleOff" : "" }`}
        onClick={() => {setColorSet(1)
            document.documentElement.style.setProperty('--accentcolor', 'var(--accentcolor1)')
            document.documentElement.style.setProperty('--maincolor', 'var(--maincolor1)')
            document.documentElement.style.setProperty('--tonecolor', 'var(--tonecolor1)')
            document.documentElement.style.setProperty('--tonecolorTransp', 'var(--tonecolor1_Transp)')
            document.documentElement.style.setProperty('--darkcolor', 'var(--darkcolor1)')
        }}
      />
      <button
        className={`colorSet2 colorButton ${
        colorSet === 2 ? "grayscaleOff" : "" }`}
        onClick={() => {setColorSet(2)
            document.documentElement.style.setProperty('--accentcolor', 'var(--accentcolor2)')
            document.documentElement.style.setProperty('--maincolor', 'var(--maincolor2)')
            document.documentElement.style.setProperty('--tonecolor', 'var(--tonecolor2)')
            document.documentElement.style.setProperty('--tonecolorTransp', 'var(--tonecolor2_Transp)')
            document.documentElement.style.setProperty('--darkcolor', 'var(--darkcolor2)')
         }}
      />
      <button
        className={`colorSet3 colorButton ${
        colorSet === 3 ? "grayscaleOff" : "" }`}
        onClick={() => {setColorSet(3)
            document.documentElement.style.setProperty('--accentcolor', 'var(--accentcolor3)')
            document.documentElement.style.setProperty('--maincolor', 'var(--maincolor3)')
            document.documentElement.style.setProperty('--tonecolor', 'var(--tonecolor3)')
            document.documentElement.style.setProperty('--tonecolorTransp', 'var(--tonecolor3_Transp)')
            document.documentElement.style.setProperty('--darkcolor', 'var(--darkcolor3)')
         }}
      />

      <div className="colorselector_subTextContainer">
        <div className="subtext_arrow">
        <HandDrawnOutlineRight/>
        </div>
        <div className="subtext_text font_marker">
        #COLORS
        </div>
      </div>
    </div>
  );
};

export default ColorSelector;
