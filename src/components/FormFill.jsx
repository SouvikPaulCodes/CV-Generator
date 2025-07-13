import {Personal} from './Personal'
import {Education} from './Education'
import {Experience} from './Experience'
import {Projects} from './Projects'
import {Achievements} from './Achievements'
import { useRef } from 'react'
import '../styles/FormFill.css'

export function Form({clBack, change, data, setData}) {
    const FormRef = useRef()

    const submit = (e) => {
        e.preventDefault();
        if(FormRef.current.checkValidity()){
            change(e)
        }
        else {
            FormRef.current.reportValidity()
        }
    }

    return (
        <form className={clBack} ref={FormRef} onSubmit={submit}>
            <Personal data={data} setData={setData} />
            <Education data={data} setData={setData} />
            <Experience data={data} setData={setData} />
            <Projects data={data} setData={setData} />
            <Achievements data={data} setData={setData} />
            <button className="submit" type="submit">Submit Resume</button>
        </form>           
    )
}