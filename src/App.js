import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import axios from './Utility/axios-instance';
import './App.css';

import Filters from './components/Filters/Filter';
import LaunchList from './components/LaunchList/LaunchList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '',
      launching: '',
      landing: '',
      list: null,
      count: 100,
    };
  }

  filterLaunchResult = async (year, launch, land) => {
    let res = await axios(
      `launches?limit=${this.state.count}&launch_success=${launch}&land_success=${land}&launch_year=${year}`
    );
    this.setState({ list: res.data });
  };

  changeLaunchYear = (year) => {
    this.setState({ list: null });
    year = year === this.state.year ? '' : year;
    this.setState({ year });
    this.filterLaunchResult(year, this.state.launching, this.state.landing);
  };

  changeLaunchFilter = (launching) => {
    this.setState({ list: null });
    launching = launching === this.state.launching ? '' : launching;
    this.setState({ launching });
    this.filterLaunchResult(this.state.year, launching, this.state.landing);
  };

  changeLandingFilter = (landing) => {
    this.setState({ list: null });
    landing = landing === this.state.landing ? '' : landing;
    this.setState({ landing });
    this.filterLaunchResult(this.state.year, this.state.launching, landing);
  };

  componentDidMount() {
    axios
      .get(`launches?limit=${this.state.count}`)
      .then(({ data }) => this.setState({ list: data }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <h1 className="title-center">SpaceX Launch Programs</h1>
        <div className="container">
          <Filters
            initialValue={this.state}
            setYear={this.changeLaunchYear}
            setLaunching={this.changeLaunchFilter}
            setLanding={this.changeLandingFilter}
          />
          <LaunchList list={this.state.list} />
        </div>
        <div className="title-center">
          <strong>Developed By: </strong> Aakarshak Sthapak
        </div>
      </div>
    );
  }
}

export default App;
