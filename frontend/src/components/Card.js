import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './card-style.css'
const Card = props=>{
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt='image1' className="card-img-top" style={{height:'190px'}}/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.titre}</h4>
                <p className="card-text text-secondary">
                    jhvgkzdvjgnlegjerjgda dzjvfbzejfz fezgeg egerg ege geg eehrthrt eerge
                </p>
                <a href={props.ahref} className="btn btn-outline-success">Voir</a>
            </div>
        </div>

    )
}

export default Card