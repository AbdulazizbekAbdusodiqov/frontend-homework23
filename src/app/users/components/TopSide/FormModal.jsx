import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser, editUser } from '../../../../redux/reducers/userReducer'
import { ageOptions } from '.'

function FormModal({ isOpen, setIsOpen, selectedUser }) {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: ''
    })

    // When selectedUser changes or modal opens, update the form
    useEffect(() => {
        if (selectedUser) {
            setFormData({
                id: selectedUser.id,
                name: selectedUser.name,
                email: selectedUser.email,
                age: selectedUser.age
            })
        } else {
            // Reset form when adding a new user
            setFormData({
                name: '',
                email: '',
                age: ''
            })
        }
    }, [selectedUser, isOpen])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (selectedUser) {
            // If we have a selectedUser, we're editing
            dispatch(editUser({ ...formData, id: selectedUser.id }))
        } else {
            // Otherwise, we're adding a new user
            dispatch(addUser({ ...formData, id: Date.now() }))
        }
        
        // Close modal after submission
        setIsOpen(false)
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">
                    {selectedUser ? 'Edit User' : 'Add New User'}
                </h2>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-700 rounded"
                            required
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label className="block mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-700 rounded"
                            required
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label className="block mb-1">Age</label>
                        <select
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-700 rounded"
                            required
                        >
                            <option value="">Select Age</option>
                            {ageOptions}
                        </select>
                    </div>
                    
                    <div className="flex justify-end gap-2">
                        <button 
                            type="button" 
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-2 bg-gray-600 rounded"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            className="px-4 py-2 bg-blue-600 rounded"
                        >
                            {selectedUser ? 'Update' : 'Add'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormModal