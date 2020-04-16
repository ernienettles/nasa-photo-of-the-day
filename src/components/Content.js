import React from "react";

const Content = (props) => {


    return (
        <div className="content-section">
            <div className="content">
                <h2>{props.title}</h2>
                <p>{props.explanation}</p>
            </div>
            <div className="image-container">
            <img src={props.image} alt="Nasa's daily thing"></img>
            </div>
        </div>
    )
}

export default Content