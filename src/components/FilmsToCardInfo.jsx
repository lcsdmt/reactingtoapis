import React from 'react';
import FilmCard from "./FilmCard"
import uuid from "react-uuid";

let FilmsToCardInfo = (props) => {
    return (
        props.films.map((oneFilm, key) => <FilmCard film={oneFilm} key={uuid()} />)
    )
}

export default FilmsToCardInfo;