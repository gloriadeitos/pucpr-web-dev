import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

class FormLogin extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      senha: '',
      mensagem: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSenhaChange = this.handleSenhaChange.bind(this);
    this.acessar = this.acessar.bind(this);
  }

  handleEmailChange(event){
    this.setState({ email: event.target.value });
  }

  handleSenhaChange(event){
    this.setState({ senha: event.target.value });
  }

  acessar(){
    if(this.state.email === 'eduardo.lino@pucpr.br' && this.state.senha === '123456'){
      this.setState({ mensagem: 'Acessado com sucesso!' });
    } else {
      this.setState({ mensagem: 'Usuário ou senha incorretos!' });
    }
  }

  render(){
    return(
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg shadow-2xl w-80">
          <h1 className="text-xl font-bold text-center text-gray-100 mb-4">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
            Login
          </h1>
          
          <div className="mb-3">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              E-mail
            </label>
            <input 
              type="email" 
              placeholder="Digite seu e-mail"
              className="w-full px-3 py-1.5 border border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              <FontAwesomeIcon icon={faLock} className="mr-2" />
              Senha
            </label>
            <input 
              type="password" 
              placeholder="Digite sua senha"
              className="w-full px-3 py-1.5 border border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={this.state.senha}
              onChange={this.handleSenhaChange}
            />
          </div>
          
          <button 
            onClick={this.acessar}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon={faSignInAlt} />
            Acessar
          </button>
          
          {this.state.mensagem && (
            <div className={`mt-4 p-3 rounded-md text-center ${
              this.state.mensagem === 'Acessado com sucesso!' 
                ? 'bg-green-900/40 text-green-300 border border-green-700' 
                : 'bg-red-900/40 text-red-300 border border-red-700'
            }`}>
              {this.state.mensagem}
            </div>
          )}
        </div>
      </div>
    )
  }

}

export default FormLogin;