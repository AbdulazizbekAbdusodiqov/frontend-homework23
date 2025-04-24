import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '../../../../assets/DeleteIcon'
import EditIcon from '../../../../assets/EditIcon'
import { removeUser } from '../../../../redux/reducers/userReducer'

function Main({ setSelectedUser }) {
    const dispatch = useDispatch()
    const usersList = useSelector(state => state.users)
    
    const handleEditClick = (user) => {
        setSelectedUser(user);
    }

    return (
        <div className='mt-2.5'>
            {usersList.map(user => (
                <div key={user.id} className='flex justify-between border rounded'>
                    <div className='p-3'>
                        <p>{user.name} | <i>{user.age}</i></p>
                        <p>{user.email}</p>
                    </div>
                    <div className='border-l flex flex-col'>
                        <div onClick={() => dispatch(removeUser(user.id))} className='h-full flex items-center justify-center p-1 border-b'>
                            <DeleteIcon color="white"/>
                        </div>
                        <div onClick={() => handleEditClick(user)} className='h-full flex items-center justify-center p-1'>
                            <EditIcon color="white"/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Main