import { Component } from 'react';
import shortid from 'shortid';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };

  todo = nanoid(4);
  logotex = shortid.generate();
  twoTex = shortid.generate();

  handlerChang = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handlerSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  handleLicenceChange = e => {
    console.log(e.currentTarget.checked);
    this.setState({ licence: e.currentTarget.checked });
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <label htmlFor={this.todo}>
          name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handlerChang}
            id={this.todo}
          ></input>
        </label>
        <label htmlFor={this.twoTex}>
          value
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handlerChang}
            id={this.twoTex}
          ></input>
        </label>

        <p>Ваш уровень разработчика:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handlerChang}
            checked={this.state.experience === 'junior'}
          />
          Junior
        </label>

        <br />
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handlerChang}
            checked={this.state.experience === 'middle'}
          />
          Middle
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handlerChang}
            checked={this.state.experience === 'senior'}
          />
          Senior
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Готов роботать
        </label>

        <button type="submit" disabled={!this.state.licence}>
          Отправить
        </button>
      </form>
    );
  }
}
