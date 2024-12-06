// import React from 'react';
// import { Link } from 'react-router-dom';
// const Contact = ({ doctors, handleDeleteDoctor, handleEditDoctor }) => (
//     <div>
//         <h2 className="title-text">Список лікарів</h2>
//         <table className="table-title">
//             <thead>
//             <tr>
//                 <th>Ім'я</th>
//                 <th>Телефон</th>
//                 <th>Спеціалізація</th>
//                 <th>Дії</th>
//                 <th>Дії</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {doctors.map((doctor, index) => (
//                     <tr key={index}>
//                         <td>{doctor.name}</td>
//                         <td>{doctor.phone}</td>
//                         <td>{doctor.specialization}</td>
//                         <td> <button onClick={() => handleDeleteDoctor(index)} className="btn">Видалити</button>
//                         </td>
//                         <td>
//                             <button onClick={() => handleEditDoctor(index)} className="btn">Редагувати</button>
//                         </td>
//                     </tr>))}
//             </tbody>
//         </table>
//         <Link to="/AddDoctor" className="btn">Додати лікаря</Link>
//     </div>);
// export default Contact;  