import React from 'react';
import PeopleCard from "./PeopleCard";
import uuid from "react-uuid";

let People = (props) => {
    return (
        props.people.map((onePerson, key) => <PeopleCard people={onePerson} key={uuid()} />)
    )
}

export default People;