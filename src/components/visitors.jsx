import React, { useState, useEffect } from 'react';
import supabase from '../data/supabase';

function Visitors() {
    const [name, setName] = useState('');
    const [contact, setContact] = useState(1234567890);

    async function addTemple(name, contact) {
        const { data, error } = await supabase
            .from('visitors')
            .insert([{ Name: name, Contact: contact }])

        if (error) {
            console.error('Error adding temple:', error.message);
        } else {
            console.log('Temple added:', data);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTemple(name, contact);
        setName('');
        setContact('');
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
            <h1>Visitor Management</h1>

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

                    <label htmlFor="contact">Contact:</label>
                    <input
                        type="number"
                        id="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required
                    />
                    <br />

                    <button type="submit">Add Visitor</button>
                </form>
            </div>
        </div>
    );
}

export default Visitors