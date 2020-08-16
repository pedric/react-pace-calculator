/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AppHeader from 'components/Header/index';
import TotalTimePage from 'containers/TotalTimePage/Loadable';
import AveragePacePage from 'containers/AveragePacePage/Loadable';
import ImageGeneratorPage from 'containers/ImageGeneratorPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={TotalTimePage} />
        <Route exact path="/average-pace" component={AveragePacePage} />
        <Route exact path="/image-generator" component={ImageGeneratorPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      {/* <AppHeader /> */}
    </div>
  );
}
