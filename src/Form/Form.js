import React, { Component } from "react";

class Form extends Component {
  construtor(props) {
    //super(props);
    this.state = {
      name: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this)

  }

  handleSubmit = (e) => {
    e.preventDefault()

    let { name } = this.state

    name = name
  }

  handleInputChange(e) {
    this.setState({
      nome: e.target.value,
    });
  }

  render() {

    return (

      <section>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nome:
            <input
              onChange={this.handleInputChange}
              type="text"
              placeholder="Nome"
            />
            <hr />
          </label>
          <label>Email:
            <input type="email" placeholder="E-mail" />
          </label>
          <hr />
          <label>Observações:
            <textarea placeholder="Digite sua mensagem"></textarea>
          </label>
          <hr />
          <button type="submit">Enviar</button>
        </form>
      </section>
    );
  }
}

export default Form;
