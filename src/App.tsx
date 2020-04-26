import React from 'react';
import './App.css';
import CalendarView from './calendar/calendar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CalendarView />
      </div>
    );
  }
}

export default App;
