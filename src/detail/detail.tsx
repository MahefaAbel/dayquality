import React, { Component } from 'react';
import './style.css';
import Engine from '../Engine/Engine';

export default class DetailView extends Component<Props, State> {
  state = {
  }
 
  public render() {
    const year = this.props.match.params.year;
    const mounth = this.props.match.params.mounth;
    const day = this.props.match.params.day;

    const malagasyName = Engine.convertToMalagasyName(year, mounth, day);

    return (
      <div id="container">
        <div>
          <h2>{`Detail pour ${this.props.match.params.year}-${this.props.match.params.mounth}-${this.props.match.params.day}`}</h2>
          <div>
            <span id="detail-name">{`Anarana : ${malagasyName}`}</span>
          </div>
        </div>
      </div>
    );
  }
}

// const months = {
//   0: 'January',
//   1: 'February',
//   2: 'March',
//   3: 'April',
//   4: 'May',
//   5: 'June',
//   6: 'July',
//   7: 'August',
//   8: 'September',
//   9: 'October',
//   10: 'November',
//   11: 'December'
// }


type State = {

}
type Props = {
  match: any,
}