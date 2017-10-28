// const container =  document.getElementById('container')


// let input = React.createElement('input', {type : "text", className : "form-control col-5"})
// let button = React.createElement('button',{type : "submit", className : "btn btn-primary col-5  "}, "Click Me")
// let mainDiv = React.createElement("div", null , input, button)

// ReactDOM.render(
//     mainDiv,
//     container
// )
// ReactDOM.render(
//     React.createElement('h1', null, 'hello world'),
//     document.getElementById('container')
//   );

// ReactDOM.render(
//         React.createElement('h1', {title: 'hello world'}, 'Hello World'),
//         document.getElementById('container')
//     );

/***************    CustomeClass/ CustomeHeadings   *************************/

class babar extends React.Component{
    render(){
        return React.createElement('h1',{style : this.props.style}, this.props.name);
    }
}
class zeshan extends React.Component{
    render(){
        return React.createElement('h2',{style : this.props.style}, this.props.name);
    }
}
class fahad extends React.Component{
    render(){
        return React.createElement('h3',{style : this.props.style}, this.props.name);
    }
}
var myName = React.createElement(babar,{style : {color : "red", border : '2px solid black'}, name : 'babar'})
var myName2 = React.createElement(zeshan,{style : {color : "blue", border : '2px solid orange'}, name : 'Zeshan'})
var myName3 = React.createElement(fahad,{style : {color : "green", border : '2px solid pink'}, name : 'Fahad'})
ReactDOM.render(
    React.createElement('div' , {className : 'container'}, myName, myName2, myName3),
    document.getElementById('container')
)
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