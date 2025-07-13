import '../styles/Education.css'

export function Education({data, setData}) {
    const changeField = (field, val) => {
        const updated = {...data.education, [field]: val}
        setData((prev) => ({...prev, education: updated}))
    }

    console.log(data.education)

    return (
        <div className="education">
            <h2 className='eduHead'>Education</h2>
            <label className='degreeLab'>Degree:
                <input 
                    type="text" 
                    className="degree" 
                    value = {data.education.degree}
                    required
                    onInput = {(event) => {changeField("degree", event.target.value)}}
                />
            </label>
            <label className='collegeLab'>College:
                <input 
                    type='text'
                    className="college" 
                    value = {data.education.college}
                    required
                    onInput = {(event) => {changeField("college", event.target.value)}}
                />
            </label>
            <label className='schoolLab'>School:
                <input 
                    type="text" 
                    className="school" 
                    value = {data.education.school}
                    required
                    onInput = {(event) => {changeField("school", event.target.value)}}
                />
            </label>
        </div>
    )
}