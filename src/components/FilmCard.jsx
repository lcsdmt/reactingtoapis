import React from 'react';

let FilmCard = (props) => {
    return (
        <React.Fragment>
            <div className="">
                <div className="filmcard-body">
                    <h5 className="filmcard-title">{props.film.title}</h5>
                    <p className="filmcard-description">{props.film.description}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FilmCard;