import React from "react";
import FilmsToCardInfo from "./FilmsToCardInfo.jsx";
import Header from "./Header";
import People from "./People"
import "isomorphic-fetch";
import "es6-promises";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filmsArr: [],
            peopleArr: [],
            didLoad: false,
            didPeopleLoad: false
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films/")
            .then(res => res.json())
            .then(films => this.setState({ filmsArr: films }))
            .catch(err => console.log(err));

        fetch("https://ghibliapi.herokuapp.com/people/")
            .then(res => res.json())
            .then(people => this.setState({ peopleArr: people }))
            .catch(err => console.log(err));
    }

    handleClickFilm() {
        this.setState({
            didLoad: true,
            didPeopleLoad: false
        })
    }

    handleClickPeople() {
        this.setState({ didPeopleLoad: true,
        didLoad:false })
    }

    render() {
        if (this.state.didLoad === true) {
            return (
                <React.Fragment>
                    <Header />
                    <form>
                        <div>
                            <button id="loadFilmsBtn"
                                onClick={event => {
                                    event.preventDefault();
                                    this.handleClickFilm();
                                }}>Load Films</button>
                        </div>
                        <div>
                            <button id="loadPeopleBtn"
                                onClick={event => {
                                    event.preventDefault();
                                    this.handleClickPeople();
                                }}>Load People</button>
                        </div>
                    </form>
                    <FilmsToCardInfo films={this.state.filmsArr} />
                </React.Fragment>
            );
        } else if (this.state.didPeopleLoad === true) {
            return (
                <React.Fragment>
                    <Header />
                    <form>
                        <div>
                            <button id="loadFilmsBtn"
                                onClick={event => {
                                    event.preventDefault();
                                    this.handleClickFilm();
                                }}>Load Films</button>
                        </div>
                        <div>
                            <button id="loadPeopleBtn"
                                onClick={event => {
                                    event.preventDefault();
                                    this.handleClickPeople();
                                }}>Load People</button>
                        </div>
                    </form>
                    <People people={this.state.peopleArr} />
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Header />
                    <form>
                        <div>
                            <button id="loadFilmsBtn"
                                onClick={event => {
                                    event.preventDefault();
                                    this.handleClickFilm();
                                }}>Load Films</button>
                        </div>
                        <div>
                            <button id="loadPeopleBtn"
                                onClick={event => {
                                    event.preventDefault();
                                    this.handleClickPeople();
                                }}>Load People</button>
                        </div>
                    </form>
                </React.Fragment>
            )
        }
    }
}




export default App;