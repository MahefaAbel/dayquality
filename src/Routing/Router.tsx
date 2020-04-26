import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from '../App'
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