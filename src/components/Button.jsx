import { Component } from "react";
class Bottone extends Component {
    render(){
        return <button onClick={() => {alert(`Hai schiacciato il ${this.props.name}`)}}>{this.props.name}</button>
    }
}

export default Bottone;