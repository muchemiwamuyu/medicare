import React from 'react'
import { useNavigate } from 'react-router-dom';


// Shared card + input styles
const formCard = "flex flex-col gap-4 p-6 bg-white shadow-lg rounded-xl max-w-md w-full mx-auto border border-gray-200";
const inputStyle = "px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
const selectStyle = `${inputStyle} bg-white`;
const btnPrimary = "bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors";
const btnSecondary = "bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors";
const btnSuccess = "bg-green-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition-colors";


// Steps
export function FormStep1({ next }) {
    return (
        <form onSubmit={(e) => { e.preventDefault(); next(); }} className={formCard}>
            <h2 className="text-2xl font-semibold text-gray-800 text-center">Personal Information</h2>
            <input type="text" placeholder="Full name" required className={inputStyle} />
            <select name="gender" required className={selectStyle}>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <input type="date" required className={inputStyle} />
            <input type="number" placeholder="National ID" required className={inputStyle} />
            <button type="submit" className={btnPrimary}>Next</button>
        </form>
    );
}

export function FormStep2({ next, back }) {
    return (
        <form onSubmit={(e) => { e.preventDefault(); next(); }} className={formCard}>
            <h2 className="text-2xl font-semibold text-gray-800 text-center">Contact Information</h2>
            <input type="email" placeholder="Email address" required className={inputStyle} />
            <input type="number" placeholder="Phone number" required className={inputStyle} />
            <input type="text" placeholder="Enter address" className={inputStyle} />
            <div className="flex gap-2 justify-between">
                <button type="button" onClick={back} className={btnSecondary}>Back</button>
                <button type="submit" className={btnPrimary}>Next</button>
            </div>
        </form>
    );
}

export function FormStep3({ next, back }) {
    return (
        <form onSubmit={(e) => { e.preventDefault(); next(); }} className={formCard}>
            <h2 className="text-2xl font-semibold text-gray-800 text-center">Professional Details</h2>
            <input type="number" placeholder="Employee ID" className={inputStyle} />
            <select name="departments" required className={selectStyle}>
                <option value="">Select department</option>
                <option value="administration">Administration</option>
                <option value="medical">Medical</option>
            </select>
            <select name="jobTitle" required className={selectStyle}>
                <option value="">Select job title</option>
                <option value="chiefAdmin">Chief Administrator</option>
                <option value="itAdmin">IT Admin</option>
            </select>
            <select name="employmentStatus" required className={selectStyle}>
                <option value="">Select employment status</option>
                <option value="partTime">Part time</option>
                <option value="fullTime">Full time</option>
                <option value="contract">Contract</option>
            </select>
            <div className="flex gap-2 justify-between">
                <button type="button" onClick={back} className={btnSecondary}>Back</button>
                <button type="submit" className={btnPrimary}>Next</button>
            </div>
        </form>
    );
}

export function FormStep4({ next, back }) {
    return (
        <form onSubmit={(e) => { e.preventDefault(); next(); }} className={formCard}>
            <h2 className="text-2xl font-semibold text-gray-800 text-center">System Roles & Permissions</h2>
            <select name="systemRole" required className={selectStyle}>
                <option value="">Select system role</option>
                <option value="superAdmin">Super Admin</option>
                <option value="departmentAdmin">Department Admin</option>
            </select>
            <select name="permissionLevel" required className={selectStyle}>
                <option value="">Select permission level</option>
                <option value="high">High Level</option>
                <option value="medium">Medium Level</option>
                <option value="low">Low Level</option>
            </select>
            <div className="flex gap-2 justify-between">
                <button type="button" onClick={back} className={btnSecondary}>Back</button>
                <button type="submit" className={btnPrimary}>Next</button>
            </div>
        </form>
    );
}

export function FormStep5({ back }) {

    const navigate = useNavigate();
    return (
        <form onSubmit={(e) => { e.preventDefault(); navigate('/login'); }} className={formCard}>
            <h2 className="text-2xl font-semibold text-gray-800 text-center">Security Credentials</h2>
            <input type="text" placeholder="Username" required className={inputStyle} />
            <input type="password" placeholder="Password" required className={inputStyle} />
            <div className="flex gap-2 justify-between">
                <button type="button" onClick={back} className={btnSecondary}>Back</button>
                <button type="submit" className={btnSuccess}>Submit</button>
            </div>
        </form>
    );
}

