import React, { Component } from 'react';


const Plan = (image) => {

    return (


        <div className="flatViews__left">
            <img className="project-img" src={image.image} alt="project" />
        </div>

    )
}

export default Plan;