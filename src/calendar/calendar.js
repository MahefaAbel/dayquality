import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.css';
 
export default class CalendarView extends Component {
  
  state = {
    date: new Date(),
  }
 
  onChange = date => {
    this.setState({ date });
    // console.log("onChange", date, date.getFullYear(), date.getMonth(), date.getDate());
    this.props.history.push(`/detail/${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`);
  }
 
  render() {
    return (
      <div id="calendarContainer">
        <div id="calendarWidthContainer">
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
        </div>
      </div>
    );
  }
}