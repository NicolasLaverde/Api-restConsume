import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AdminApi from './services/AdminApi';
import Person from './components/Person';

class App extends Component {

  constructor(){
    super();
    this.state={
       usuarios : []
    };
  }
  componentDidMount(){
    console.log(this._adminApi);
    this._adminApi.consumirApi('https://randomuser.me/api/?results=5').then(users =>
      users.results.forEach( user => {
        
        let dataInfo = {
          name: user.name.first,
          email: user.email,
          gender: user.gender,
          phone: user.phone
        }
        console.log(dataInfo);
        this.setState({
          usuarios : [...this.state.usuarios,dataInfo]
        })
      }));
  }
  render() {
    let usuariosMostrar = this.state.usuarios.map((us,i) =>{
        return (
          <div className="col-sm-4 mt-5">
            <div className="card">
                <div className= "card-header">
                   Nombre: {us.name}   
                </div>
                <div className="card-body">
                  email: {us.email},
                  gender: {us.gender},
                  phone: {us.phone}
                </div>
            </div>
          </div>
        )
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AdminApi ref={(adminApi) => { this._adminApi = adminApi; }}/>
        <Person/>
        <div className="row">
            {usuariosMostrar}
        </div>
      </div>
    );
  }
}

export default App;
