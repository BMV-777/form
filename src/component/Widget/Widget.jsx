import { Component } from 'react';
import './Widget.modul.css';
import WidgetButton from './WidgetButton';

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
    total: 0,
    showBox: false,
  };

  dermi = () => {
    this.setState({ showBox: !this.state.showBox });
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
        <WidgetButton
          onIncrement={this.handlerGood}
          onDecrement={this.handlerNeutral}
          onInserter={this.handlerBad}
          // onMouseOver={this.dermi}
          // className={`container${this.state.showBox ? ' show' : ''}`}
        />

        <br />
        {this.state.visible ? (
          ''
        ) : (
          <span className="text_list">{this.state.initialText}</span>
        )}

        {this.state.visible && (
          <div className="Statistic">
            <p className="Statistic_grub">
              <b>Statistics</b>
            </p>
            <span className="Statistic_list">Good: {this.state.good}</span>
            <br />
            <span className="Statistic_list">
              Neutral: {this.state.neutral}
            </span>
            <br />
            <span className="Statistic_list">Bad: {this.state.bad}</span>
          </div>
        )}
      </div>
    );
  }
}
