const container =  document.getElementById('container')


let input = React.createElement('input', {type : "text", className : "form-control col-5"})
let button = React.createElement('button',{type : "submit", className : "btn btn-primary col-5  "}, "Click Me")
let mainDiv = React.createElement("div", null , input, button)

ReactDOM.render(
    mainDiv,
    container
)
// ReactDOM.render(
//     React.createElement('h1', null, 'hello world'),
//     document.getElementById('container')
//   );

// ReactDOM.render(
//         React.createElement('h1', {title: 'hello world'}, 'Hello World'),
//         document.getElementById('container')
//     );

// class CustomeLink extends React.Component {
//     render() {
//         return React.createElement('a', { href: this.props.link }, this.props.linkText);
//     }
// }

// var google = React.createElement(CustomeLink, { link: 'https://www.google.com', linkText: 'google' });
// var facebook = React.createElement(CustomeLink, { link: 'https://www.facebook.com', linkText: 'facebook' });
// var br = React.createElement('br');
// ReactDOM.render(
//     React.createElement('div', null, google, br, facebook),
//     document.getElementById('container')
// );