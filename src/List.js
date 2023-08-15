import {Component} from "react";

let x = 10
class List extends Component{
    constructor() {
        super();
        this.state = {
            x: 0,
            y:0,
            rs:0,
        }
    }
    render() {
        return(
            <>
                <input type="text" onChange={(event) => {
                    this.setState({x: event.target.value})
                }}/>
                <input type="text" onChange={(event) => {
                    this.setState({y: event.target.value})
                }}/>
                <button onClick={() => {
                    this.setState({rs: +this.state.x + +this.state.y})
                }}>
                    +
                </button>
                <button onClick={() => {
                    this.setState({rs: +this.state.x - +this.state.y})
                }}>
                    -
                </button>
                <button onClick={() => {
                    this.setState({rs: +this.state.x * +this.state.y})
                }}>
                    X
                </button>
                <button onClick={() => {
                    this.setState({rs: +this.state.x / +this.state.y})
                }}>
                    /
                </button>
                <button onClick={() => {
                    this.setState({rs: +this.state.x % +this.state.y})
                }}>
                    %
                </button>
                <h1>{this.state.rs}</h1>
            </>
        )
    }
}
export default List