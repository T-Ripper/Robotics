import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import Scroll from "./Scroll";

import SearchBox from "./SearchBox";

// const App = () => {
//   const [robot, setRobots] = useState(robots);
//   const [searchfield, setSearchfield] = useState("");

//   const onSearchChange = (e) => {
//     setSearchfield({ searchfield: e.target.value });
//   };

//   const filteredRobots = robot.filter((robo) => {
//     console.log(robo);
//     return robo.name
//      .toLowerCase()
//     .includes(searchfield.toLowerCase());
//   });

//   return (
//     <div className="tc">
//       <h1>Robotics Friends</h1>
//       <SearchBox earchChange={onSearchChange} />
//       <CardList robots={filteredRobots} />
//     </div>
//   );
// };

class App extends React.Component {
  state = {
    robots: [],
    searchfield: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboticsFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
