import "./navBar.scss";

const DoodleSwitch = ({ doodle, setDoodle }) => {

    const switchDoodle = () => {
    setDoodle(!doodle);
    if (doodle === false) {
      document.documentElement.style.setProperty(
        "--doodle",
        "var(--transparent)"
      );
      document.documentElement.style.setProperty(
        "--doodleNegative",
        "var(--maincolor)"
      );
      document.documentElement.style.setProperty(
        "--doodlePositive",
        "var(--blackish)"
      );
    }

    if (doodle === true) {
      document.documentElement.style.setProperty(
        "--doodle",
        "var(--maincolor)"
      );
      document.documentElement.style.setProperty(
        "--doodleNegative",
        "var(--blackish)"
      );
      document.documentElement.style.setProperty(
        "--doodlePositive",
        "var(--maincolor)"
      );
    }
  };

  return (
    <button
      className="doodleSwitch_Container font_bangers"
      onClick={switchDoodle}>
        <div className="doodleswitch_top">doodle</div>
        <div className="doodleswitch_bottom">
            <span style={{ color: "var(--doodleNegative)" }}> off</span>/
            <span style={{ color: "var(--doodlePositive)" }}>on</span>
        </div>
    </button>
  );
};

export default DoodleSwitch;
