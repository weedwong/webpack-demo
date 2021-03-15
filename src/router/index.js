import React from 'react';
import { Router, Route } from 'dva/router';

import Home from '../pages/home/index';

const router = ({ history }) => {
  return (
    <Router history={history}>
      <Route path="/home" component={Home} />
    </Router>
  );
}

export default router;