import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './app.scss';
import About from '../components/About';
const Child =props=>{
	return (
			<div>
				<p>React ES6!!!{props.name}</p>
			</div>
		);
};
export default class App extends React.Component{
	render(){
		return (
			<div>
				<h1 style={styles.h1}>i am gwendolyn</h1>
				<Child name="hi hi" />	
			</div>
			);
	}
}
ReactDOM.render(<App/>,document.getElementById('app'));



