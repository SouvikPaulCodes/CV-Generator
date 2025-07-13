import { useState } from 'react'
import delLogo from '../assets/icons8-delete.svg'
import '../styles/Experience.css'

export function Experience({data, setData}) {
    const addExp = () => {
        const newExp = {
            id: crypto.randomUUID(),
            job: "",
            company: "",
            desc: ""
        }

        setData((prev) => ({...prev, experience: [...prev.experience, newExp]}))
    }

    const delExp = (idDel) => {
        const updated = data.experience.filter( exp => exp.id !== idDel)

        setData((prev) => ({...prev, experience: updated}))
    }

    const changeField = (idChange, field, val) => {
        const updated = data.experience.map(exp => exp.id === idChange ? {...exp, [field]: val} : exp)
        setData((prev) => ({...prev, experience: updated}))
    }

    console.log(data.experience)

    return (
        <div className='experience'>
            <h2 className='expHead'>Experience</h2>
            {data.experience.map(exp => {
                return (
                    <div className='exp' key={exp.id}>
                        <div className="expInp">
                            <label className='jobLab'>Job:
                                <input 
                                    type="text" 
                                    className="job" 
                                    value = {exp.job || ""}
                                    required
                                    onChange = {(event) => {changeField(exp.id, "job", event.target.value)}}
                                />
                            </label>
                            <label className='comLab'>Company:
                                <input 
                                    type='text'
                                    className="company" 
                                    value = {exp.company || ""}
                                    required
                                    onChange = {(event) => {changeField(exp.id, "company", event.target.value)}}
                                />
                            </label>
                            <label className='desLab'>Description:
                                <textarea
                                    className="desc" 
                                    value = {exp.desc || ""}
                                    onChange = {(event) => {changeField(exp.id, "desc", event.target.value)}}
                                ></textarea>
                            </label>
                        </div>
                        <button className='expDel' onClick={() => delExp(exp.id)}><img src={delLogo} alt='delete experience' /></button>
                    </div>
                )
            })}
            <button className='expAdd' type='button' onClick={addExp}>Add Experience</button>
        </div>
    )
}