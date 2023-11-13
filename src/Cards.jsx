import React from "react"
import './App.css'

export default function Cards(props){
    console.log(props);
    let badgeText;
    if(props.openSpots === 0){
      badgeText = "SOLD OUT";
    } else if(props.location === 'ONLINE'){
      badgeText = "ONLINE";
    }

    return(
        <div className='card'>
          <div className="card-badge">{badgeText}</div>
          <img src={props.img} alt="firstImage" />
          <div className="card-under">
            <img src={props.star} alt="starIcon" />
            <span>{props.rating}</span>
            <span className="gray">{props.gray}</span>
          </div>
          <p className="title">{props.title}</p>
          <p><span className="dark-text">{props.rate}</span> / person</p>
        </div>
    )
}