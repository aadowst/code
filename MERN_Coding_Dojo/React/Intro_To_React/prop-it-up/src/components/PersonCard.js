import React, { Component} from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        const {age} = this.props
        this.state = {
            age: age
        };
    }
    
    birthday = () =>{
        this.setState({age: this.state.age +1,
        });
    };

    render() {
        const {birthday} = this;
        const { firstName, lastName, hairColor } = this.props;
        const {age} = this.state;
        return (
            <div>
                <h2>{lastName}, {firstName}</h2>
                <h5>Age:  {age}</h5>
                <h5>Hair Color:  {hairColor}</h5>
                <button onClick={ birthday }>Birthday Button</button>
            </div>
        );
    }


}

export default PersonCard;