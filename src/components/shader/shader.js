import "./shader.scss";

const Shader =({ shader })=> {

    return (
        <div className={`shader ${!shader ? "hideshader" : ""}`}  />
    )
}

export default Shader;