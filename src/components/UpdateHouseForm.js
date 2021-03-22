import React from 'react';

export default class UpdateHouseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: props._id,
            name: props.name,
            location: props.location,
            room: props.room,
            area: props.area,
            backyard: props.backyard,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(e) {
        this.props.updateHouse(this.state);
        e.preventDefault();
    }

    render() {
        return (
            <div className='update-house-form'>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='nameInput'>Name:</label>
                        <input
                          className='form-control'
                          type='text'
                          name='name'
                          value={this.state.name}
                          onChange={this.handleChange}
                        />  
                    </div>
                    <div className='form-group'>
                    <label htmlFor='locationInput'>Location:</label>
                        <input
                          className='form-control'
                          type='text'
                          name='location'
                          value={this.state.location}
                          onChange={this.handleChange}
                        /> 
                    </div>
                    <div className='form-group'>
                    <label htmlFor='roomInput'>Room:</label>
                        <input
                          className='form-control'
                          type='text'
                          name='room'
                          value={this.state.room}
                          onChange={this.handleChange}
                        /> 
                    </div>
                    <div className='form-group'>
                    <label htmlFor='areaInput'>Area:</label>
                        <input
                          className='form-control'
                          type='text'
                          name='area'
                          value={this.state.area}
                          onChange={this.handleChange}
                        /> 
                    </div>
                    <div className='form-group'>
                    <label htmlFor='backyardInput'>Backyard:</label>
                        <input
                          className='form-control'
                          type='text'
                          name='backyard'
                          value={this.state.backyard}
                          onChange={this.handleChange}
                        /> 
                    </div>
                    <button type='submit' className='btn btn-primary'>Update</button>
                </form>
            </div>
        );
    }
}