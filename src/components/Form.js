import React, { useState } from 'react'
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

const Form = ({createAppointment}) => {

    // State for Appointments
    const [appointment, setAppointment] = useState({
        // Initial values
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptom: ''
    });

    // State for errors
    const [error, setError] = useState(false);

    // Extract Values with Destructuring
    const { pet, owner, date, time, symptom  } = appointment;

    // Handle form data
    const handleChange = e => {
        setAppointment({
            ...appointment,
            [e.target.name] : e.target.value
        });
    }

    // When user submit the form
    const handleSubmit = e => {
        e.preventDefault();

        // Validate Form
        if(pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptom.trim() === ''){
            setError(true);
            return; // Stop the code execution
        } 

        // Delete prev error
        setError(false);

        // Create Appointment
        createAppointment({...appointment, id: v4()});

        // Reset Form
        setAppointment({
            pet: '',
            owner: '',
            date: '',
            time: '',
            symptom: ''
        });

    }

    return (
        <div className="bg-white shadow rounded px-4 py-4 w-1/2 h-full">
            <h2 className="text-2xl text-center font-bold uppercase">Create Appointment</h2>

            

            <form 
                onSubmit={handleSubmit}
                className="px-6 mt-4"
            >
                {error ? <p className="bg-red-500 px-2 py-3 text-white text-center mb-3">All fields are required</p> : null}
                <div className="mb-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Pet name
                    </label>
                    <input
                        value={pet} 
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        name="pet" 
                        type="text" 
                        placeholder="The pet's name"/>
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Pet owner
                    </label>
                    <input 
                        value={owner}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        name="owner" 
                        type="text" 
                        placeholder="Owner's name"/>
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Appointment date
                    </label>
                    <input 
                        value={date}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        name="date" 
                        type="date" 
                        placeholder="Owner's name"/>
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Appointment time
                    </label>
                    <input 
                        value={time}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        name="time" 
                        type="time" 
                        placeholder="Owner's name"/>
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Symptoms
                    </label>
                    <textarea
                        name="symptom"
                        value={symptom}
                        onChange={handleChange} 
                        rows="5" 
                        placeholder="Pet symptoms"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="transition-all duration-300 ease-out bg-blue-500 hover:bg-blue-600 text-lg text-white font-bold py-3 px-4 rounded w-full mb-2"
                >Add Appointment</button>
            </form>
        </div>
    );
}

// PropTypes
Form.propTypes = {
    createAppointment: PropTypes.func.isRequired
}

export default Form;
