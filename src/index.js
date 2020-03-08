import './style';
import { Component } from 'preact';

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<noscript>JavaScript is disabled.</noscript>
				<p id="problem">
					{
						[
							(<div style="color: red">a</div>),
							(<p style="color: blue">b</p>),
							(<div style="color: green">c</div>)
						]
					}
				</p>
				Spring
				<div>break</div>
				<div>is</div>
				<p>almost</p>
				<div>over</div>
				<p>and</p>
				<div>my</div>
				<div>homework is not done</div>
			</div>
		);
	}
}
