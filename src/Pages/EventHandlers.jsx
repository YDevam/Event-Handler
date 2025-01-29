import React, { useState } from 'react'

const Event = () => {
    const [option, setOption] = useState({});
    const [check, setCheck] = useState([]);
    const [check2, setCheck2] = useState({ check });
    const [radio, setRadio] = useState({});
    const Input = (event) => {
        const { name, value } = event.target;
        const newUser = {
            [name]: value
        }
        setOption({ ...option, ...newUser });
        setCheck(prevState =>
            prevState.includes(value)
                ? prevState.filter(item => item !== value)
                : [...prevState, value]
        );
        setRadio({ ...radio, ...newUser });
        setCheck2({ ...check2, ...newUser })

    }
    const Result = { ...option, ...check2, ...radio }

    const submitUser = (e) => {
        e.preventDefault();
        console.log(Result);


    }
    return (
        <>
            <form method="post" action="" onSubmit={submitUser} className="gar col-lg-6 mx-auto my-5 p-5 shadow">
                <h1 className='text-center text-warning'>Event Handler</h1>

                <div className="mt-4">
                    <select onChange={Input} className='form-select' name='Select'>
                        <option value="">Select...</option>
                        <option value="Web Development">Web Development</option>
                        <option value="App Development">App Development</option>
                        <option value="Data Analysis">Data Analysis</option>
                    </select>
                </div>

                <div className="mt-4">
                    <label>Cricket</label>
                    <input type="checkbox" value="Cricket" name='CheckBox' checked={check.includes('Cricket')} onChange={Input} />
                    <label>Football</label>
                    <input type="checkbox" value="Football" name='CheckBox' checked={check.includes('Football')} onChange={Input} />
                    <label>Basketball</label>
                    <input type="checkbox" value="Basketball" name='CheckBox' checked={check.includes('Basketball')} onChange={Input} />
                </div>

                <div className="mt-4">
                    <label>Male</label>
                    <input type="radio" value="Male" name='Gender' onChange={Input} />

                    <label>Female</label>
                    <input type="radio" value="Female" name='Gender' onChange={Input} />

                    <label>Other</label>
                    <input type="radio" value="Other" name='Gender' onChange={Input} />
                </div>

                <div className="mt-4">
                    <button className="btn btn-outline-success">Submit</button>
                </div>

            </form>


        </>
    )
}

export default Event;



