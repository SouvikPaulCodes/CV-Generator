import { useState } from 'react'
import delLogo from '../assets/icons8-delete.svg'
import '../styles/Projects.css'

export function Projects({data, setData}) {
    const addPro = () => {
        const newPro = {
            id: crypto.randomUUID(),
            projName: "",
            stack: "",
            det: ""
        }

        setData((prev) => ({...prev, projects: [...prev.projects, newPro]}))
    }

    const delPro = (idDel) => {
        const updated = data.projects.filter( pro => pro.id !== idDel)

        setData((prev) => ({...prev, projects: updated}))
    }

    const changeField = (idChange, field, val) => {
        const updated = data.projects.map(pro => pro.id === idChange ? {...pro, [field]: val} : pro)
        setData((prev) => ({...prev, projects: updated}))
    }

    console.log(data.projects)

    return (
        <div className='projects'>
            <h2 className='proHead'>Projects</h2>
            {data.projects.map(pro => {
                return (
                    <div className='pro' key={pro.id}>
                        <div className="proInp">
                            <label className='projLab'>Project:
                                <input 
                                    type="text" 
                                    className="projName" 
                                    value = {pro.projName || ""}
                                    required
                                    onChange = {(event) => {changeField(pro.id, "projName", event.target.value)}}
                                />
                            </label>
                            <label className='stackLab'>Tech Stack:
                                <input 
                                    type='text'
                                    className="stack" 
                                    value = {pro.stack || ""}
                                    required
                                    onChange = {(event) => {changeField(pro.id, "stack", event.target.value)}}
                                />
                            </label>
                            <label className='detLab'>Details:
                                <textarea
                                    className="det" 
                                    value = {pro.det || ""}
                                    onChange = {(event) => {changeField(pro.id, "det", event.target.value)}}
                                ></textarea>
                            </label>
                        </div>
                        <button className='proDel' onClick={() => delPro(pro.id)}><img src={delLogo} alt='delete project' /></button>
                    </div>
                )
            })}
            <button className='proAdd' type='button' onClick={addPro}>Add Projects</button>
        </div>
    )
}