import React , {useState} from 'react'

function Form() {
    const [email , setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [country, setcountry] = useState('India')
    const [accepted, setaccepted] = useState()
    return (
        <div>
        <h1>hi</h1>

        <lable>
            Email:
            <input type="text" value={email} name="email" onChange={e => setEmail(e.target.value)}/>
        </lable><br/>

        <lable>
            Email:
            <input type="text" value={password} name="password" onChange={e => setpassword(e.target.value)}/>
        </lable><br/>

        <lable>
            Country:
            <select  value={country} onChange={e => setcountry(e.target.value)}>
            <option key="india">India</option>
            <option key="US">America</option>
            </select>
        </lable><br/>

        <lable>
            <input value={accepted} type="checkbox" onChange={e => setaccepted(e.target.value)}/>
            I accept your terms and conditions
        </lable><br/>


        <button>Submit</button>


            
        </div>
    )
}

export default Form
