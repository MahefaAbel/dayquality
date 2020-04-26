import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import DetailView from '../detail/detail'
import CalendarView from '../calendar/calendar'

const routing = (
  <React.StrictMode>
    <Router>
      <div>
        <Route path="/" component={CalendarView} />
        <Route path="/detail/:year/:mounth/:day" component={DetailView} />
      </div>
    </Router>
  </React.StrictMode>
)

export default routing;