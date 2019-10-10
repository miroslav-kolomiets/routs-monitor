import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import GanttChart from './components/GanttChart/GanttChart';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
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
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/main">
          <div>
            <Header handleSubmit={handleSubmit} />
            <GanttChart data={content.data} />
          </div>
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
