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

    return (
        <div>
            <h1>Visitor Management</h1>

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
    );
}

export default Visitors