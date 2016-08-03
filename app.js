// let element = React.createElement('h1', null, 'Hello World')
// let container = document.getElementById('hello')
// ReactDOM.render(element, container)

// ReactDOM.render(
//   React.createElement('h1', null, 'Hello World'),
//   document.getElementById('hello')
// )

let Hello = React.createClass({
	getInitialState: function() {
		return {
			content: 'Laney',
		}
	},
	handler: function(event) {
		let nextState = {
			content: event.target.value
		}
		this.setState(nextState)
	},
	render: function() {
		let message;
		if (this.state.content.trim() === '') {
			message = 'Hello??'
		} else if (this.state.content === 'pasta') {
			message = 'I LOVE PASTA!'
		} else if (this.state.content === 'Will') {
			message = 'Wake up!'
		} else {
			message = 'Hello ' + this.state.content
		}
		return React.createElement('div', null,
			React.createElement('h1', null, message),
			React.createElement('span', null,
				React.createElement('input', {
					onChange: this.handler,
					type: 'text',
					value: this.state.content
				})
			)
		)
	}
})

ReactDOM.render(
	React.createElement(Hello),
	document.getElementById('hello')
)
