import { Component } from 'react';
import './App.css';
import { Form } from 'component/Form/Form';
// import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

class App extends Component {
  state = {};

  hasFormSubmitHantler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.hasFormSubmitHantler} />
      </div>
    );
  }
}

export default App;
