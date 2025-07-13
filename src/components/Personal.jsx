import '../styles/Personal.css'

export function Personal({data, setData}) {
    const changeField = (field, val) => {
        const updated = {...data.personal, [field]: val}
        setData((prev) => ({...prev, personal: updated}))
    }

    console.log(data.personal)

    return (
        <div className="personal">
            <h2 className='personalHead'>Personal Details</h2>
            <label className='nameLab'>Name:
                <input 
                    type="text" 
                    className="name" 
                    value = {data.personal.name}
                    placeholder='Your name here'
                    required
                    onInput = {(event) => {changeField("name", event.target.value)}}
                />
            </label>
            <label className='phoneLab'>Phone:
                <input 
                    type='tel'
                    className="phone" 
                    pattern='[0-9]{10}'
                    value = {data.personal.phone}
                    placeholder='Phone number of 10 digits'
                    required
                    onInput = {(event) => {changeField("phone", event.target.value)}}
                />
            </label>
            <label className='emailLab'>E-Mail:
                <input 
                    type="email" 
                    className="email" 
                    value = {data.personal.email}
                    placeholder='Example: some@email.com'
                    required
                    onInput = {(event) => {changeField("email", event.target.value)}}
                />
            </label>
        </div>
    )
}