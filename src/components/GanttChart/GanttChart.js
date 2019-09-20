import React from 'react';
import './GanttChart.scss';
import {drawGanttChart} from './drawGanttChart';

export default class GanttChart extends React.Component {
  componentDidUpdate () {
    drawGanttChart (this.props.data);
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
