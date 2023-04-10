import React from 'react';
import { Route, Switch } from 'react-router';

import Demo from '../pages/Demo';

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Demo} />
    </Switch>
  );
};

export default AppRoutes;
