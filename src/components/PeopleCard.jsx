import React from 'react';

let PeopleCard = (props) => {
    return (
        <React.Fragment>
            <div className="">
                <div className="peoplecard-body">
                    <h5 className="peoplecard-title">{props.people.name}</h5>
                    <p className="peoplecard-description">{props.people.age}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PeopleCard;