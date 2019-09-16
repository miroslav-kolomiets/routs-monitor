import React, {PureComponent} from 'react';
import GanttChart from './components/GanttChart/GanttChart';
import './App.scss';

import Header from './components/Header/Header';

export default class App extends PureComponent {
  render () {
    return (
      <div>
        <Header />
        <GanttChart />
      </div>
    );
  }
}
