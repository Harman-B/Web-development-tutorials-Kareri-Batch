import React, {Component} from 'react';
import './App.css';

import Searchbox from './searchBox/searchBox.component'
import CardList from './card-list/card-list.component';
import EventBinding from './exercies/eventBinder.component';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      robots:[],
      searchKeyword: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(body => this.setState({robots: body}))
  }

  getUsers = async () => {
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await usersResponse.json();
    console.log("This format also works", users)

    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(users => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`))
    // .then(res => res.json())
    // .then(posts => console.log(posts));
  }

  handleSearch = (e) => {
    this.setState({searchKeyword: e.target.value})
  }

  render() {
    const {robots, searchKeyword } = this.state;
    const filteredRoobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchKeyword.toLowerCase());
    })
    return (
      <div className="App">
        <header className="App-header">
          <Searchbox placeholder='Search Robots' handleChange={this.handleSearch} />
          <CardList robots= {filteredRoobots} />
          <EventBinding />
        </header>
      </div>
    )

  }
}

export default App;
