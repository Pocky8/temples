import React, { useState, useEffect } from 'react';
import supabase from '../data/supabase';

function Temples() {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    async function addTemple(name, location) {
        const { data, error } = await supabase
            .from('temples')
            .insert([{ Name: name, Location: location }])

        if (error) {
            console.error('Error adding temple:', error.message);
        } else {
            console.log('Temple added:', data);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTemple(name, location);
        setName('');
        setLocation('');
    }

    const centerContainer = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const cardStyle = {
        padding: '20px',
        border: '1px solid #eee',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '300px',
        backgroundColor: "#000000",
        color: 'white',
    }

    return (
        <div style={centerContainer}>
            <h1>Temple Management</h1>

            <div style={cardStyle}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        
                    />
                    <br />

                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                    <br />

                    <button type="submit">Add Temple</button>
                </form>
            </div>
        </div>
    );
}

export default Temples;
