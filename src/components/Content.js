import React from "react";

const Content = (props) => {


    return (
        <div className="content-section">
            <div className="title">
                <h2>{props.title}</h2>
            </div>
            <div className="content">
                <p>{props.explanation}</p>
                <img src={props.image} alt="Nasa's daily thing"></img>
            </div>
        </div>
    )
}

export default Content