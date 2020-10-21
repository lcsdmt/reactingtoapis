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

    handleClick() {
        this.setState({ didLoad: true })
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
                                    this.handleClick();
                                }}>Load Films</button>
                            <button id="loadPeopleBtn"
                                onClick={event => {
                                    event.preventDefault();
                                    this.handleClick();
                                }}>Load People</button>
                        </div>
                    </form>
                    <FilmsToCardInfo films={this.state.filmsArr} />
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
                                    this.handleClick();
                                }}>Load Films</button>
                            <button id="loadFilmsBtn"
                                onClick={event => {
                                    event.preventDefault();
                                    this.handleClick();
                                }}>Load People</button>
                        </div>
                    </form>
                </React.Fragment>
            )
        }
    }

}




export default App;