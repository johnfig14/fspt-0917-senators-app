import React, { Component } from 'react';
import SenatorsData from './data/senators.json'

class Senators extends Component {
    render() {
        return (
            <div>{SenatorsData.map((senator) => {
                    return senator.person.name;
                }).filter((senator) => {
                    return senator.party === 'Democrat';
                })}</div>
        )
    }
}  

export default Senators;