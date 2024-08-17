import React, { Component } from 'react';
import API from './services/dateAPI';
import DateButton from './components/DateButton';
import DateDisplay from './components/DateDisplay';

class App extends Component {
  constructor() {
    super();
    this.state= {
      day: null,
      month: null,
      year: null
    };
  }

  handleButtonClick = () => {
    API.getAPIResponse().then((res) => {
      const { day, month, year } = res; // Assuming the response contains these fields
      this.setState({ day, month, year });
    }).catch((error) => {
      console.error('Error fetching date:', error);
    });
  }

  render() {
    const { day, month, year } = this.state;
    return (
      <div>
        <center><h1>Date API</h1></center>
        <center><DateButton onClickButton={this.handleButtonClick}></DateButton></center>
        <DateDisplay day={day} month={month} year={year}></DateDisplay>
      </div>
    );
  }
}

export default App;
