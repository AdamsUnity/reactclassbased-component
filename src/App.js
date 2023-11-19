import React, { Component } from "react";
import "./App.css";
// a class based componet
class App extends Component {
  constructor(props) {
    super(props);
    // a state inside of the  the class component

    this.state = {
      person: {
        fullName: "Adams Unity",
        bio: "Unity Hials from Edo state Benin City and was boren in 1988 he attended his primary and secondary education in Benin and studied electrical electronics engineering. He is currently working and serving his country in the Nigerian Airforce. He his happily married and blessed with a baby girl. his hobbles are singing and coding",
        imgSrc: "me.jpg",
      },
      shows: true,
      timeInterval: 0,
    };
  }
  // time interval methods
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000); // Update every second
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  // toggle button function
  handleToggle = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, timeInterval } = this.state;
    return (
      <div>
        <h1>{person.fullName}</h1>
        <p>{person.bio}</p>
        <img src={`/images/${person.imgSrc}`} alt="unic" />
        <p className="sub--herder">Profession: {person.profession}</p>
        {shows && (
          <p>
            Software Developer <br></br>full stack in a bit <br></br>Electrical
            Engineer <br></br>Chevening Scholar & Natonanal Builder
          </p>
        )}
        <p>Time Interval: {timeInterval} seconds since mount</p>
        <button onClick={this.handleToggle}>
          {shows ? "Hidden Profile" : "Show Profile"}
        </button>
      </div>
    );
  }
}

export default App;
