// your Bomb code here!
import React, {Component} from 'react'
export default class Bomb extends Component{
    constructor(props){
        super(props)
        this.state = {
            secondsLeft: props.initialCount 
        }
    } 
    tick(a) {
        return a--
    }
    decrement = () => {
        let val = this.props.initialCount
        
        this.setState ({
            secondsLeft: val
        }) 
    }

    render() {
        return (
                // {this.decrement()}
                <h1> {this.state.secondsLeft} seconds left before I go boom!</h1>
            
        )
    } 

}