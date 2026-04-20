import React, { Component } from 'react';
import FormLogin from '../components/FormLogin';

class Home extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <FormLogin />
      </div>
    )
  }

}

export default Home;