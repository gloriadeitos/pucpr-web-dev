import React, { Component } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import FormHome from '../components/FormHome'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = { nome: '', sobrenome: '', dataNascimento: '', carregando: true, logado: false, mensagem: '' }
  }

  componentDidMount(){
    this.unsubscribe = onAuthStateChanged(auth, async (user) => {
      try{
        if(user){
          const uid = user.uid
          const snap = await getDoc(doc(db, 'users', uid))
          if(snap.exists()){
            const data = snap.data()
            this.setState({ nome: data.nome || '', sobrenome: data.sobrenome || '', dataNascimento: data.dataNascimento || '', carregando: false, logado: true, mensagem: '' })
          } else {
            this.setState({ nome: '', sobrenome: '', dataNascimento: '', carregando: false, logado: true, mensagem: '' })
          }
        } else {
          this.setState({ nome: '', sobrenome: '', dataNascimento: '', carregando: false, logado: false, mensagem: '' })
        }
      } catch (error) {
        this.setState({
          nome: '',
          sobrenome: '',
          dataNascimento: '',
          carregando: false,
          logado: !!user,
          mensagem: 'Não foi possível carregar os dados do usuário'
        })
      }
    })
  }

  componentWillUnmount(){
    if(this.unsubscribe) this.unsubscribe()
  }

  render(){
    if(this.state.carregando){
      return <div className="p-8 text-center text-gray-200">Carregando...</div>
    }
    return (
      <FormHome nome={this.state.nome} sobrenome={this.state.sobrenome} dataNascimento={this.state.dataNascimento} logado={this.state.logado} mensagem={this.state.mensagem} />
    )
  }
}

export default Home