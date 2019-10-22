import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import GanttChart from '../ui/GanttChart/GanttChart';
import NoMatchWithRouter from '../ui/NoMatch/NoMatch';
import Loader from '../ui/Loader/Loader';
import Header from '../ui/Header/Header';
import Login from '../ui/Login/Login';

function Router () {
  const state = useSelector (state => state);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/main">
          <Fragment>
            <Header />
            {state.fetchData.data
              ? <GanttChart data={state.fetchData.data} />
              : <Loader />}
          </Fragment>
        </Route>
        <Route path="*">
          <NoMatchWithRouter />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
