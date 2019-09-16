import React from 'react';
import './GanttChart.scss';
import {drawGanttChart} from './drawGanttChart';

import * as eventsList from './data';

export default class GanttChart extends React.Component {
  state = {
    data: eventsList,
  };

  componentDidMount () {
    drawGanttChart (this.state);
  }

  render () {
    return (
      <div id="container">
        <div id="chart" />
        <div id="tag" className="tag" />
      </div>
    );
  }
}
