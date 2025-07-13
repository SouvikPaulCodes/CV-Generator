import { useState } from 'react'
import delLogo from '../assets/icons8-delete.svg'
import '../styles/Achievements.css'

export function Achievements({data, setData}) {
    const addAch = () => {
        const newAch = {
            id: crypto.randomUUID(),
            ab: ""
        }

        setData((prev) => ({...prev, achievements: [...prev.achievements, newAch]}))
    }

    const delAch = (idDel) => {
        const updated = data.achievements.filter( ach => ach.id !== idDel)

        setData((prev) => ({...prev, achievements: updated}))
    }

    const changeField = (idChange, field, val) => {
        const updated = data.achievements.map(ach => ach.id === idChange ? {...ach, [field]: val} : ach)
        setData((prev) => ({...prev, achievements: updated}))
    }

    console.log(data.achievements)

    return (
        <div className='achievements'>
            <h2 className='achHead'>Achievements</h2>
            {data.achievements.map(ach => {
                return (
                    <div className='ach' key={ach.id}>
                        <textarea
                            className="achDes" 
                            value = {ach.ab || ""}
                            required
                            onChange = {(event) => {changeField(ach.id, "ab", event.target.value)}}
                        ></textarea>
                        <button className='achDel' onClick={() => delAch(ach.id)}><img src={delLogo} alt='delete project' /></button>
                    </div>
                )
            })}
            <button className='achAdd' type='button' onClick={addAch}>Add Achievements</button>
        </div>
    )
}