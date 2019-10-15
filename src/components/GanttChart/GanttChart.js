import React, {useEffect} from 'react';
import './GanttChart.scss';
import {drawGanttChart} from './drawGanttChart';

function GanttChart (props) {
  useEffect (() => {
    document.getElementById ('chart').innerHTML = null;
    drawGanttChart (props.data);
  });

  return (
    <div id="container">
      <div id="chart" />
      <div id="tag" className="tag" />
    </div>
  );
}

export default GanttChart;
