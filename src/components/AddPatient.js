import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function AddPatient() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState(new Date());
    const [patients, setPatients] = useState([]);
    const [events, setEvents] = useState([]);

    const handleAddPatient = () => {
        if (name && phone && date) {
            const newPatient = { name, phone, date: date.toDateString() };
            setPatients([...patients, newPatient]);
            setEvents([...events, { start: new Date(date), end: new Date(date), title: `${name} - ${phone}` }]);
            setName("");
            setPhone("");
            setDate(new Date());
        } else {
            alert("Будь ласка, заповніть всі поля!");
        }
    };

    const handleDeletePatient = (index) => {
        const updatedPatients = patients.filter((_, idx) => idx !== index);
        setPatients(updatedPatients);
        setEvents(updatedPatients.map(patient => ({
            start: new Date(patient.date),
            end: new Date(patient.date),
            title: `${patient.name} - ${patient.phone}`
        })));
    };

    const handleEditPatient = (index) => {
        if (name && phone && date) {
            const updatedPatients = patients.map((patient, idx) =>
                idx === index ? { name, phone, date: date.toDateString() } : patient
            );
            setPatients(updatedPatients);
            setEvents(updatedPatients.map(patient => ({
                start: new Date(patient.date),
                end: new Date(patient.date),
                title: `${patient.name} - ${patient.phone}`
            })));
            setName("");
            setPhone("");
            setDate(new Date());
        } else {
            alert("Будь ласка, заповніть всі поля!");
        }
    };

    return (
        <div>
            <h2 className="title-text">Запис на прийом</h2>
            <div className="div-content">
                <table className="table-title">
                    <thead>
                        <tr>
                            <th>Ім'я</th>
                            <th>Телефон</th>
                            <th>Дата</th>
                            <th>Дії</th>
                            <th>Дії</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient, index) => (
                            <tr key={index} className="table-title">
                                <td>{patient.name}</td>
                                <td>{patient.phone}</td>
                                <td>{patient.date}</td>
                                <td>
                                    <button
                                        onClick={() => handleDeletePatient(index)}
                                        className="btn"
                                    >
                                        Видалити
                                    </button>
                                    </td>
                                <td>
                                    <button
                                        onClick={() => handleEditPatient(index)}
                                        className="btn"
                                    >
                                        Редагувати
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="div-content">
                <input
                    type="text"
                    placeholder="Ім'я та прізвище пацієнта"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Телефон пацієнта"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <button onClick={handleAddPatient} className="btn">
                    Додати пацієнта
                </button>
                <div className="calendar-container">
                    <Calendar
                        localizer={localizer}
                        events={events}
                        selectable
                        onSelectSlot={({ start, end }) => setDate(start)}
                        startAccessor="start"
                        endAccessor="end"
                        className='calendar'
                        style={{ height: 500, margin: '50px' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddPatient;