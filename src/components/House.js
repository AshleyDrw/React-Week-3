import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import  UpdateHouseForm from './UpdateHouseForm.js';

export default class House extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.updateHouse = this.updateHouse.bind(this);
    }

    handleDeleteClick() {
        this.props.deleteHouse(this.props._id);
    }

    updateHouse(house) {
        this.props.update(house);
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                <button
                      className="btn btn-danger"
                      onClick={this.handleDeleteClick}
                    >
                    Delete
                    </button>
                    <h2 className="card-title">
                        {this.props.name}
                    </h2> 
                    <div>
                        <h5 className="card-text">{this.props.location}</h5>
                        <h5 className="card-text">{this.props.room}</h5>
                        <h5 className="card-text">{this.props.area}</h5>
                        <h5 className="card-text">{this.props.backyard}</h5>
                    </div> 
                    <UpdateHouseForm {...this.props} updateHouse={this.props.updateHouse} />
                </div>
            </div>
        );
    }
    

};