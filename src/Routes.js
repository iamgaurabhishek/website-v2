import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import WithLayout from 'WithLayout';

// Available layouts
import {
  // Main as MainLayout,
  // Fluid as FluidLayout,
  // Fixed as FixedLayout,
  BrickMmo as BrickMmoLayout,
} from './layouts';

// Landing pages
import {
  Home as HomeView,
  Commissions as CommissionsView,
  CommissionsCdmo as CommissionsCdmoView,
  CommissionsHumber as CommissionsHumberView,
  CommissionsBrevisRefero as CommissionsBrevisReferoView,
  Education as EducationView,
  Systems as SystemsView,
  // SystemPanel as SystemPanelView,
  // SystemsColours as SystemsColoursView,
  Research as ResearchView,
  GetStarted as GetStartedView,
  Bio as BioView,
} from './views/pages';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route
        exact
        path="/"
        element={((matchProps) => (
          <WithLayout
            title="index"
            {...matchProps}
            component={HomeView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/bio"
        element={((matchProps) => (
          <WithLayout
            title="Bio 2024"
            {...matchProps}
            component={BioView}
            layout={BrickMmoLayout}
          />
        ))()}
      />

      <Route
        exact
        path="/commissions"
        element={((matchProps) => (
          <WithLayout
            title="commissions"
            {...matchProps}
            component={CommissionsView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/commissions-humber"
        element={((matchProps) => (
          <WithLayout
            title="humber"
            {...matchProps}
            component={CommissionsHumberView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/commissions-cdmo"
        element={((matchProps) => (
          <WithLayout
            title="cdmo"
            {...matchProps}
            component={CommissionsCdmoView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/commissions-brevisrefero"
        element={((matchProps) => (
          <WithLayout
            title="brevisrefero"
            {...matchProps}
            component={CommissionsBrevisReferoView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/education"
        element={((matchProps) => (
          <WithLayout
            title="education"
            {...matchProps}
            component={EducationView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/systems"
        element={((matchProps) => (
          <WithLayout
            title="systems"
            {...matchProps}
            component={SystemsView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/research"
        element={((matchProps) => (
          <WithLayout
            title="research"
            {...matchProps}
            component={ResearchView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/get-started"
        element={((matchProps) => (
          <WithLayout
            title="get started"
            {...matchProps}
            component={GetStartedView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
    </ReactRoutes>
  );
};

export default Routes;
