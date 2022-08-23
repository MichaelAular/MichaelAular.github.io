import "./hideshow.scss";
import ArrowLeft from "../../../assets/icons/arrowLeft";
import useWindowSize from "../../../hooks/windowsize";

const HideShowButton = ({ carouselUp, setCarouselUp }) => {
  const size = useWindowSize();

  return (
    <div className="HideShowContainer">
      <div
        className="showAndHideButton"
        style={{
          bottom: `${`calc(${size.itemHeight}vw + 33px)` }`
        }}
        onClick={() => {
          setCarouselUp(!carouselUp);
        }}
      >
        <div
          className="showhideArrow"
          style={{
            rotate: `${carouselUp ? "-90deg" : "90deg"}`,
            transitionDuration: ".5s",
          }}
        >
          <ArrowLeft />
        </div>
      </div>
      <div
        className="smallBlock"
        style={{
          bottom: `${`calc(${size.itemHeight}vw + 32px)` }`,
        }}
      />
    </div>
  );
};

export default HideShowButton;
