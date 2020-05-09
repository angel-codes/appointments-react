import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({appointment, deleteAppointment}) => {

    // Extract values of appointment
    const { id, pet, owner, date, time, symptom } = appointment;

    // Remove an Appoinment
    const removeAppointment = () => {
        // Send ID to parent component
        deleteAppointment(id);
    }

    return (
        <div className="border-b-2 border-blue-300 px-2 py-4">
            <p className="font-bold">Pet: <span className="font-normal">{pet}</span></p>
            <p className="font-bold">Owner: <span className="font-normal">{owner}</span></p>
            <p className="font-bold">Date: <span className="font-normal">{date}</span></p>
            <p className="font-bold">Time: <span className="font-normal">{time}</span></p>
            <p className="font-bold">Symptoms: <span className="font-normal">{symptom}</span></p>
            <button
                onClick={removeAppointment}
                className="transition-all duration-300 ease-out bg-red-500 hover:bg-red-600 text-lg text-white font-bold py-2 rounded w-full mt-4"
            >Delete</button>
        </div>
    );
}

// PropTypes
Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteAppointment : PropTypes.func.isRequired
}

export default Appointment;