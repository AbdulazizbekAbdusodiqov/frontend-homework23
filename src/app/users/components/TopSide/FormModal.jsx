import React from 'react'
import { ageOptions } from '.'
import { useDispatch } from 'react-redux';
import { addUser } from '../../../../redux/reducers/userReducer';

function FormModal(props) {
    const { isOpen = false, setIsOpen } = props;

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const {name, age, email} = e.target
         
        dispatch(addUser({
            id:Date.now(),
            name:name.value,
            age: age.value,
            email:email.value
        }))
        setIsOpen(false)
    }

    return isOpen ? (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-[#2e2d2d90] flex justify-center items-center'>
            <div className='bg-[#2e2d2d] min-w-[400px] p-8 border rounded border-gray-500'>

                <h2 className='text-xl font-bold text-center mb-3'>New User</h2>
                <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                    <input className='h-[30px] border-white border rounded px-1' type="text" name='name' placeholder='Full Name' />
                    <select className='h-[30px] border-white border rounded px-1' name="age">
                        <option key={0} style={{ backgroundColor: "black" }} value="0">-</option>
                        {ageOptions}
                    </select>
                    <input className='h-[30px] border-white border rounded px-1' type="email" name='email' placeholder='Email' />
                    <button className='h-[30px] border-white border rounded px-1'>Save</button>
                </form>
            </div>

        </div>
    ) : null
}

export default FormModal