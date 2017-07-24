import React, {Component} from 'react';

export default class DisplayComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>{this.props.sayWhat}</div>
    );
  }
}
