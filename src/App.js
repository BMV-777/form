import { Component } from 'react';
import './App.css';
import { LoginForm } from './component/LoginForm/LoginForm.jsx';
// import { Form } from 'component/Form/Form';
// import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

class App extends Component {
  // state = {};

  // hasFormSubmitHantler = data => {
  //   console.log(data);
  // };

  render() {
    return (
      <div>
        <LoginForm />
        {/* <Form onSubmit={this.hasFormSubmitHantler} /> */}
      </div>
    );
  }
}

export default App;
