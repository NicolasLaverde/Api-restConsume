import React, {Component} from 'react';
import AdminApi from './../services/AdminApi';

export default class Person extends Component{
	constructor(){
		super();
		this.state={};
	}
	componentDidMount(){
		this._adminApi.consumirApi('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(data => console.log(data));
	}
	render(){

		return(
			<div>
				<AdminApi ref={(adminApi) => {this._adminApi = adminApi}}/>
			</div>
			)
	}
}