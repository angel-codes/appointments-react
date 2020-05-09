import React, { useState, useEffect } from 'react';

//* Components
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

    // Appoinments in LocalStorage
    let initAppoinments = JSON.parse(localStorage.getItem('appointments'));
    if(!initAppoinments){
        initAppoinments = [];
    }

    // State for All Appoinments
    const [appointments, setAppointment] = useState(initAppoinments);

    // save all appointments in the localStorage
    useEffect(() => {
        // Get Appoinments
        let initAppoinments = JSON.parse(localStorage.getItem('appointments'));
        if(initAppoinments){
            // Update localStorage
            localStorage.setItem('appointments', JSON.stringify(appointments))
        } else {
            localStorage.setItem('appointments', JSON.stringify([]));
        }
    }, [appointments])

    // Add new Appoinments
    const createAppointment = appointment => {
        setAppointment([
            ...appointments,
            appointment
        ]);
    };

    // Delete an Appointment
    const deleteAppointment = id => {
        const newAppoinments = appointments.filter(appointment => appointment.id !== id);
        setAppointment(newAppoinments);
    }

    // Title of Appointment List
    const title = appointments.length === 0 ? 'No appointments' : 'Manage your appointments';

    return (
        <div className="min-h-screen bg-blue-500 py-8">
            <h1 className="text-3xl text-white text-center font-bold uppercase">Pet Appointment Manager</h1>
            <div className="container mx-auto mt-10">
                <div className="flex flex-row flex-grow justify-between">
                    <Form 
                        createAppointment={createAppointment}
                    />
                    <div className="bg-white shadow rounded px-8 py-4 h-full w-1/2 ml-10"> 
                        <h2 className="text-2xl text-center font-bold uppercase">{title}</h2>
                        { appointments.map(appointment => (
                            <Appointment
                                key={appointment.id}
                                appointment={appointment}
                                deleteAppointment={deleteAppointment}
                            />
                        )) }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;