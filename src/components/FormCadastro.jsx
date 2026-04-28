import React, { Component } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'

class FormCadastro extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      senha: '',
      nome: '',
      sobrenome: '',
      dataNascimento: '',
      mensagem: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.cadastrar = this.cadastrar.bind(this)
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  async cadastrar(){
    const { senha, nome, sobrenome, dataNascimento } = this.state
    const email = this.state.email.trim()
    if(!email){
      this.setState({ mensagem: 'Informe um e-mail válido' })
      return
    }
    if(!senha || senha.length < 6){
      this.setState({ mensagem: 'A senha deve ter pelo menos 6 caracteres' })
      return
    }
    try{
      const userCred = await createUserWithEmailAndPassword(auth, email, senha)
      const uid = userCred.user.uid
      await setDoc(doc(db, 'users', uid), {
        uid,
        email,
        nome,
        sobrenome,
        dataNascimento
      })
      this.setState({ mensagem: 'Usuário cadastrado com sucesso!' })
      sessionStorage.setItem('cadastroSucesso', '1')
      window.location.hash = '#/login'
    } catch(error){
      if(error.code === 'auth/invalid-email'){
        this.setState({ mensagem: 'Erro no cadastro: e-mail inválido' })
        return
      }
      if(error.code === 'auth/weak-password'){
        this.setState({ mensagem: 'Erro no cadastro: a senha deve ter pelo menos 6 caracteres' })
        return
      }
      if(error.code === 'auth/email-already-in-use'){
        this.setState({ mensagem: 'Erro no cadastro: este e-mail já está cadastrado. Faça login.' })
        return
      }
      this.setState({ mensagem: 'Erro no cadastro: ' + error.message })
    }
  }

  render(){
    return (
      <div className="h-full bg-gray-950 flex items-center justify-center">
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg shadow-2xl w-80">
          <h1 className="text-xl font-bold text-center text-gray-100 mb-4">Cadastro</h1>

          <div className="mb-2.5">
            <label className="block text-gray-300 text-sm font-bold mb-2">E-mail</label>
            <input name="email" type="email" value={this.state.email} onChange={this.handleChange}
              className="w-full px-3 py-1.5 border border-gray-700 bg-gray-800 text-gray-100 rounded-md" />
          </div>

          <div className="mb-2.5">
            <label className="block text-gray-300 text-sm font-bold mb-2">Senha</label>
            <input name="senha" type="password" value={this.state.senha} onChange={this.handleChange}
              className="w-full px-3 py-1.5 border border-gray-700 bg-gray-800 text-gray-100 rounded-md" />
          </div>

          <div className="mb-2.5">
            <label className="block text-gray-300 text-sm font-bold mb-2">Nome</label>
            <input name="nome" type="text" value={this.state.nome} onChange={this.handleChange}
              className="w-full px-3 py-1.5 border border-gray-700 bg-gray-800 text-gray-100 rounded-md" />
          </div>

          <div className="mb-2.5">
            <label className="block text-gray-300 text-sm font-bold mb-2">Sobrenome</label>
            <input name="sobrenome" type="text" value={this.state.sobrenome} onChange={this.handleChange}
              className="w-full px-3 py-1.5 border border-gray-700 bg-gray-800 text-gray-100 rounded-md" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Data de Nascimento</label>
            <input name="dataNascimento" type="date" value={this.state.dataNascimento} onChange={this.handleChange}
              className="w-full px-3 py-1.5 border border-gray-700 bg-gray-800 text-gray-100 rounded-md" />
          </div>

          <button onClick={this.cadastrar} className="w-full bg-green-600 text-white py-2 rounded-md">Cadastrar</button>

          {this.state.mensagem && (
            <div className="mt-4 p-3 rounded-md text-center bg-blue-900/40 text-blue-200">{this.state.mensagem}</div>
          )}
        </div>
      </div>
    )
  }
}

export default FormCadastro
