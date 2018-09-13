import React, {Component} from 'react';

export default class AdminApi extends Component{

	constructor(){
		super();
	}

	consumirApi(url){
		return fetch(url).then(response => response.json());

	}
	render(){
		return(<div></div>)
	}

}