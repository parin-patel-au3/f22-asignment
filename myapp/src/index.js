import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    render(){
    return <button className={"btn" + this.props.class}>{this.props.name}</button>
        }
}
class Input extends React.Component{
    render(){
    return<input type="text" placeholder={this.props.placeholder}/>
    }
}
class Label extends React.Component{
    render(){
    return <lable className="text">{this.props.name}</lable>
    }
}
class Heading extends React.Component{
    render(){
        return <h2>Login</h2>
    }
}
class Login extends React.Component {
    render() {
    return (
        <div class="container col-md-2">
            <Heading/>
            <hr/>
            <Label name="UserName"/><br/>
            <Input placeholder="Enter username"/><br/>
            <Label name="Password"/><br/>
            <Input placeholder="Enter password"/><br/><br/>
            <Button name="Login" class ="btn btn-primary"/>
        </div>
        );
    }
}

ReactDOM.render(<Login/>, document.getElementById('root')); 