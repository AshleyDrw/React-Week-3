import React, { useState } from 'react';

export const NewHouseForm = (props) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [room, setRoom] = useState('');
    const [area, setArea] = useState('');
    const [backyard, setBackyard] = useState('');

    const handleSubmit = (e) => {
        props.createHouse({name, location, room, area, backyard});
        e.preventDefault();
        setName('');
        setLocation('');
        setRoom('');
        setArea('');
        setBackyard('');
    };

    return (
        <div className='new-house-form'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='text'
                    name='name'
                    value={name}
                    id='nameInput'
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)}  
                 />
               </div> 
                <div className='form-group'>
                  <div className='form-group'>
                      <input
                        className='form-control'
                        type='text'
                        name='location'
                        value={location}
                        id='locationInput'
                        placeholder='Location'
                        onChange={(e) => setLocation(e.target.value)}
                      />
                   </div>
               </div> 
               <div className='form-group'>
                <input
                  className='form-control'
                  type='text'
                  name='room'
                  value={room}
                  id='roomInput'
                  placeholder='Room'
                  onChange={(e) => setRoom(e.target.value)}
                />
               </div> 
               <div className='form-group'>
                <input 
                  className='form-control'
                  type='text'
                  name='area'
                  value={area}
                  id='areaInput'
                  placeholder='Area'
                  onChange={(e) => setArea(e.target.value)}
                /> 
                </div>
                <div className='form-group'>
                <input
                  className='form-control'
                  type='text'
                  name='backyard'
                  value={backyard}
                  id='backyardInput'
                  placeholder='Backyard'
                  onChange={(e) => setBackyard(e.target.value)}
                />
               </div> 
                <button type='submit' className='btn btn-primary'>Submit House</button> 
            </form>
        </div>
    );
};