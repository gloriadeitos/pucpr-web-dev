import React, { Component } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = { email: '', senha: '', mensagem: '', mensagemTipo: 'erro' }
    this.handleChange = this.handleChange.bind(this)
    this.acessar = this.acessar.bind(this)
  }

  componentDidMount(){
    const cadastroSucesso = sessionStorage.getItem('cadastroSucesso')
    if(cadastroSucesso === '1'){
      this.setState({ mensagem: 'Cadastro realizado com sucesso. Faça login.', mensagemTipo: 'sucesso' })
      sessionStorage.removeItem('cadastroSucesso')
    }
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  async acessar(){
    try{
      const email = this.state.email.trim()
      if(!email){
        this.setState({ mensagem: 'Informe um e-mail válido', mensagemTipo: 'erro' })
        return
      }
      await signInWithEmailAndPassword(auth, email, this.state.senha)
      window.location.hash = '#/home'
    } catch(error){
      if(error.code === 'auth/invalid-email'){
        this.setState({ mensagem: 'E-mail inválido', mensagemTipo: 'erro' })
        return
      }
      this.setState({ mensagem: 'Usuário não cadastrado ou senha inválida', mensagemTipo: 'erro' })
    }
  }

  render(){
    return (
      <div className="h-full bg-gray-950 flex items-center justify-center">
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg shadow-2xl w-80">
          <h1 className="text-xl font-bold text-center text-gray-100 mb-4">Login</h1>

          <div className="mb-3">
            <label className="block text-gray-300 text-sm font-bold mb-2">E-mail</label>
            <input name="email" type="email" value={this.state.email} onChange={this.handleChange}
              className="w-full px-3 py-1.5 border border-gray-700 bg-gray-800 text-gray-100 rounded-md" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Senha</label>
            <input name="senha" type="password" value={this.state.senha} onChange={this.handleChange}
              className="w-full px-3 py-1.5 border border-gray-700 bg-gray-800 text-gray-100 rounded-md" />
          </div>

          <button onClick={this.acessar} className="w-full bg-blue-500 text-white py-2 rounded-md">Acessar</button>

          {this.state.mensagem && (
            <div className={`mt-4 p-3 rounded-md text-center ${
              this.state.mensagemTipo === 'sucesso'
                ? 'bg-green-900/40 text-green-300'
                : 'bg-red-900/40 text-red-300'
            }`}>
              {this.state.mensagem}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Login
