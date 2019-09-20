import React, {PureComponent} from 'react';
import GanttChart from './components/GanttChart/GanttChart';
import './App.scss';

import Header from './components/Header/Header';

export default class App extends PureComponent {
  state = {
    data: [],
  };

  handleSubmit = event => {
    event.preventDefault ();

    console.log (JSON.stringify (this.state));
  };

  async componentDidMount () {
    const response = await fetch (`./data.json`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const json = await response.json ();
    this.setState ({
      data: json,
    });
  }

  render () {
    return (
      <div>
        <Header handleSubmit={this.handleSubmit} />
        <GanttChart data={this.state.data} />
      </div>
    );
  }
}
