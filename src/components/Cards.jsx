import React from "react";
import { Link } from "react-router-dom"

function Cards({id, title, cover}) {
    return (
        <Link className="card" to={`/housing/${id}`}>
            <img className="card_img" src={cover} alt="cover housing"/>
            <h2 className="card_title">{title}</h2>
        </Link>
    )
}

export default Cards
