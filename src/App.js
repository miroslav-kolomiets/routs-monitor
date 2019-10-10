import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import GanttChart from './components/GanttChart/GanttChart';
import './App.scss';

import Header from './components/Header/Header';

function App () {
  const content = useSelector (state => state);
  const dispatch = useDispatch ();

  function getData () {
    return dispatch => {
      fetch (`./data.json`).then (res => res.json ()).then (data => {
        dispatch ({
          type: 'FETCH_DATA',
          data: data,
        });
        console.log ('data:', data);
      });
    };
  }

  function onFetchdata () {
    dispatch (getData ());
  }

  function handleSubmit (event) {
    event.preventDefault ();

    onFetchdata ();
  }

  useEffect (() => {
    dispatch (getData ());
  }, []);

  return (
    <div>
      <Header handleSubmit={handleSubmit} />
      <GanttChart data={content.data} />
    </div>
  );
}

export default App;
