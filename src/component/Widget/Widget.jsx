import { Component } from 'react';
import './Widget.modul.css';

export class Widget extends Component {
  // static defaultProps = {
  //   initialText: 'No feedback given',
  // };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    initialText: 'No feedback given',
    visible: false,
  };

  // prev = () => {
  //   this.setState(prevState => ({
  //     initialText: !prevState.initialText,
  //   }));
  // };

  show = () => {
    this.setState({ visible: true });
  };

  handlerGood = e => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    console.log(e.currentTarget.name);
  };

  handlerNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handlerBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div onClick={this.show}>
        <button
          type="text"
          name="good"
          className="list"
          onClick={this.handlerGood}
        >
          good
        </button>
        <button
          type="text"
          name="neutral"
          className="list"
          onClick={this.handlerNeutral}
        >
          neutral
        </button>
        <button
          type="text"
          name="bad"
          className="list"
          onClick={this.handlerBad}
        >
          bad
        </button>
        <br />

        <span>{this.state.initialText}</span>

        {this.state.visible && (
          <div>
            <p className="Statistic_grub">Statistics</p>
            <span className="">Good: {this.state.good}</span>
            <br />
            <span className="">Neutral: {this.state.neutral}</span>
            <br />
            <span className="">Bad: {this.state.bad}</span>
          </div>
        )}
      </div>
    );
  }
}
