// import React, {useState} from 'react';
//
// const AddForm = ({addUser}) => {
//     const [user, setUser] = useState({name: "", phone: ""})
//     const [nameError, setNameError] = useState("")
//     const [phoneError, setPhoneError] = useState("")
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (user.name.length < 5) {
//             setNameError("Имя должно быть не менее 5 символов")
//         } else {
//             setNameError("")
//         }
//         if (user.phone.length === 0) {
//             setNameError("Введите номер телефона")
//         } else {
//             setPhoneError("")
//         }
//         if (user.name.length >= 5 && user.phone.length !== 0) {
//             addUser(user)
//             setUser({name: "", phone: ""})
//
//         }
//     }
//     const handleChange = (e) => {
//         setUser({...user, [e.target.name]: e.target.value})
//     }
//
//     return (
//         <form className="p-4">
//             <input type="text"
//                    className="border-2 w-full mb-3 px-2"
//                    placeholder="Enter your name"
//                    name="name"
//                    onChange={handleChange}
//                    value={user.name}
//             />
//             {nameError && <span>{nameError}</span>}
//             <input type="text"
//                    className="border-2 w-full mb-3 px-2"
//                    placeholder="Enter your phone"
//                    name="phone"
//                    onChange={handleChange}
//                    value={user.phone}
//             />
//             {phoneError && <span>{phoneError}</span>}
//             <div className="text-right">
//                 <button className="bg-red-100 px-4 py-2 text-xs font-semibold tracking-wider text-red-600 rounded mr-4">
//                     Cancel
//
//                 </button>
//                 <button
//                     className="bg-blue-100 px-4 py-2 text-xs font-semibold tracking-wider text-blue-600 rounded mr-4"
//                     onClick={handleSubmit}>
//                     Add
//                 </button>
//
//             </div>
//         </form>
//     );
// };
//
// export default AddForm;