import { Component } from 'react';
import './App.css';
import { Widget } from 'component/Widget/Widget';
// import Statistics from 'component/Statistics/Satisrics';
// import FeedbackOptions from 'component/Fedbeck/Fedback';
// import { LoginForm } from './component/LoginForm/LoginForm.jsx';
// import { Form } from 'component/Form/Form';
// import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

class App extends Component {
  render() {
    // const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <Widget />

        {/* <span className="">{this.good}</span> */}
        {/* <br /> */}
        {/* <span className="">ugyyg</span>
        <br />
        <span className="">ugyyg</span> */}
        {/* <LoginForm /> */}
        {/* <Form onSubmit={this.hasFormSubmitHantler} /> */}
      </div>
    );
  }
}

export default App;

// options={['good', 'neutral', 'bad']} onLeaveFeedback
