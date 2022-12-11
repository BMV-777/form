import { Component } from 'react';
import styles from './App.css';
import FeedbackOptions from 'component/Fedbeck/Fedback';
import Statistics from 'component/Statistics/Satisrics';
import Title from 'component/Title/Title';
import Notification from 'component/Notification/Notification';
// import { Widget } from 'component/Widget/Widget';
// import Statistics from 'component/Statistics/Satisrics';
// import FeedbackOptions from 'component/Fedbeck/Fedback';
// import { LoginForm } from './component/LoginForm/LoginForm.jsx';
// import { Form } from 'component/Form/Form';
// import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHendleIncrement = options => {
    this.setState(prevState => {
      return { [options]: prevState[options] + 1 };
    });
  };

  onTotalCount = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    if (this.onTotalCount() === 0) {
      return 0;
    }
    return Math.round(100 / (this.onTotalCount() / this.state.good));
  };

  render() {
    const state = Object.keys(this.state);
    // console.log(state);
    const { good, neutral, bad } = this.state;
    return (
      <div className={styles.box}>
        <Title title={'Please leave feedback'} />
        <FeedbackOptions onHandle={this.onHendleIncrement} listState={state} />
        <Title title={'Statistics'} />
        {this.onTotalCount() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.onTotalCount}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
//        <div>
//          <h1>Please leave feedback</h1>
//          <Widget />

//         /* <span className="">{this.good}</span>
//         /* <br />
//         /* <span className="">ugyyg</span>
//         <br />
//         <span className="">ugyyg</span>
//          <LoginForm /> */}
//          <Form onSubmit={this.hasFormSubmitHantler} />
//        </div>
//     );
//   }
// }

export default App;

// options={['good', 'neutral', 'bad']} onLeaveFeedback
