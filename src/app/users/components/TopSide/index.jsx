import React, { useEffect, useState } from 'react'
import { agesOpt } from "./data"
import FormModal from './FormModal'

export const ageOptions = agesOpt.map(age => (
  <option style={{ backgroundColor: "black" }} key={age.label} value={age.value}>{age.label}</option>
))

function TopSide(props) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {selectedUser, setSelectedUser}=props
  useEffect(()=>{
    if(!isModalOpen)setSelectedUser(null)
  },[isModalOpen])

  return (
    <div>
      <FormModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
      <h1 className='text-3xl font-bold text-center mb-10'>Users</h1>
      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <input className='h-[30px] border-white border rounded px-1' type="text" placeholder="Search" name="search" />
          <select className='h-[30px] border-white border rounded px-1' name="age">
            <option key={0} style={{ backgroundColor: "black" }} value="0">-</option>
            {ageOptions}
          </select>
          <select className='h-[30px] border-white border rounded px-1' name="sort" id="">
            <option value="all">all</option>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select>
        </div>
        <div>
          <button onClick={()=>setIsModalOpen(true)} className='px-1 h-[30px] border-white rounded border'>Add</button>
        </div>
      </div>
    </div>
  )
}

export default TopSide