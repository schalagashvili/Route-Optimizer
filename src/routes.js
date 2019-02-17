import React, { Fragment } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { TripPlanner, ProfileSettings, Home, IconsPreview, Contact } from './pages'
import DashboardRouteContainer from './styles'
import Sidebar from './components/Sidebar'
import DragDrop from './components/dnd'
import { GoogleMaps } from './components'
import { PlanningProvider } from './context/plan'

const Routes = () => (
  <PlanningProvider>
    <BrowserRouter>
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/plan" component={TripPlanner} />
        <Route path="/icons" component={IconsPreview} />
        <Route path="/contact" component={Contact} />
        <Route path="/map" component={GoogleMaps} />
        {/* <Route path="/dragdrop" component={DragDrop} /> */}
        <DashboardRouteContainer>
          <Route
            path="/dashboard"
            render={({ match }) =>
              match.isExact ? <Redirect to="/dashboard/settings" /> : <Sidebar />
            }
          />
          <Route exact path="/dashboard/settings" component={ProfileSettings} />
        </DashboardRouteContainer>
      </Fragment>
    </BrowserRouter>
  </PlanningProvider>
)
export default Routes
