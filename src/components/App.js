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
	handlerClick= e =>{
			console.log(this);
		}
/*

一般情况下用上面的，如果是es5的话要构造器
	constructor(props){
		super(props);
		this.handlerClick=this.handlerClick.bind(this);
	}
	handlerClick(e){
		console.log(this);		
	}

*/
	


	render(){
		
		return (
			<div>
				<h1 style={styles.h1}>i am gwendolyn</h1>
				<Child name="hi hi" />
				<button onClick={this.handlerClick}>Click</button>
				<About/>
			</div>
			);
	}
}
ReactDOM.render(<App/>,document.getElementById('app'));



