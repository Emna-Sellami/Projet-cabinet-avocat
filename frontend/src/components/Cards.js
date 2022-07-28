import React, { Component } from "react";
import Card from "./Card";
import img1 from "../images/ordre.jpg"
import img2 from "../images/actualite.jpg"
import img3 from "../images/magazine.jpg"

class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} ahref={'https://avocat.org.tn/fr/'} titre={'Ordre Des Avocats'}/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} ahref={'http://mhbm-avocat.com/news/'} titre={'Actualités Juridiques'}/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} ahref={'http://www.infosjuridiques.com.tn/presentation.php'} titre={'Magazine Infos Juridiques'}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards