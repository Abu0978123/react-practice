import React from "react";

function Card2(props)
{
    
return(
    <React.Fragment>
    <div className="col-6">
<div className="card"  id="cardx">
  <img src={props.imgsrc} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">This is a Netflix Series now in Trending.</p>
    <a href={props.link} className="btn btn-primary">Go on site</a>
  </div>
</div>
</div>
    </React.Fragment>

);
};

export  default Card2;