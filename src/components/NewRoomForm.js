import React, { useState } from 'react';

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [room, setRoom] = useState('');
    const [area, setArea] = useState(undefined);
    const [backyard, setBackyard] = useState('');

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >=0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && location && room && area && backyard) {
            props.addNewRoom({name, location, room, area, backyard});
            setName('');
            setLocation('');
            setRoom('');
            setArea('');
            setBackyard('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div className='new-house-form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                 />
               </div> 
                <div className='form-group'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Location'
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                />
               </div> 
               <div className='form-group'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Room'
                  onChange={(e) => setRoom(e.target.value)}
                  value={room}
                />
               </div> 
               <div className='form-group'>
                <input 
                  className='form-control'
                  type='text'
                  placeholder='Area'
                  onChange={handleAreaInput}
                  value={area}
                /> 
                </div>
                <div className='form-group'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Backyard'
                  onChange={(e) => setBackyard(e.target.value)}
                  value={backyard}
                />
               </div> 
                <button type='submit' className='btn btn-primary'>Add</button> 
            </form>
        </div>
    );
};