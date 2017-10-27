
// ReactDOM.render(
//     React.createElement('h1', null , 'Hello babar'),
//     document.getElementById('container')
// )
ReactDOM.render(
    React.createElement('h1', null, 'hello world'),
    document.getElementById('container')
  );

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