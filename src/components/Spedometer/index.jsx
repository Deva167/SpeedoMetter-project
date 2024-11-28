import { Component } from "react";

import './index.css'


class Spedometer extends Component {
    state = {count: 0 }


    FirstClick = () => {

        const {count} = this.state 

        if (count < 200) {

            this.setState((value) => ({ count: value.count+10 }))

        } 
        else if (count ===200) {
            this.setState((value) => ({ count: value.count+0 }))
        


        }

        


    }
    
    SecondClick = () => {
        const {count} = this.state 

        if (count > 0) {

            this.setState((value) => ({ count: value.count-10 }))

        } 
        else if (count ===0) {
            this.setState((value) => ({ count: value.count+0 }))
        


        }


    }

    render() {
        const {count} = this.state

        return(
           <div className="container">
            <div>
                <h1 className='heading'>Speedomerter</h1>
                <img src='https://assets.ccbp.in/frontend/react-js/speedometer-img.png ' className="image"/>
                <p className='para-speed'>Speed is {count} mph</p>
                <p className="min-para">Min Limited is 0 and Max Limited is 200</p>
                <button className="button-1" onClick={this.FirstClick}>Accelerate</button>
                <button className="button-2" onClick={this.SecondClick}>Apply Break</button>

            </div>

           </div>

        )
    }
}

export default Spedometer