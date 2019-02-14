import React from 'react';
import PropTypes from 'prop-types';
import axios from "axios"

class Sources extends React.Component {
    constructor(props) {
        super(props);
        this.state = {listOfSources: ['hello','bye'], sourceId: '',titles: []};
        this.getsources();
        this.changestate();
    }
    getsources() {
        
        console.log(this.state.listOfSources)
    }
    changestate(){
        this.setState({listOfSources: 'hello'})
        console.log(this.state.listOfSources)
    }

    render() {
        return (
            <div></div>
        );
    }
}


Sources.propTypes = {
    
};

export default Sources
///