import React from "react";

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="type" name='city' placeholder="City..."/>
                <input type="type" name='country' placeholder="Country..."/>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;