import { useState } from "react";

const Event = () => {
    const [user, setUser] = useState({ hobbies: [] });

    function getInput(e) {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setUser((prevUser) => {
                if (checked) {
                    return { ...prevUser, hobbies: [...prevUser.hobbies, value] };
                } else {
                    return { ...prevUser, hobbies: prevUser.hobbies.filter((hobby) => hobby !== value) };
                }
            });
        } else {
            setUser((prevUser) => ({ ...prevUser, [name]: value }));
        }
    }

    function regist(e) {
        e.preventDefault();
        alert("Thank You");
        console.log(user);
        
    }

    return (
        <>
      
            <div className="gar col-lg-6 mx-auto my-5 p-5 shadow">
                <form action="" method="post" onSubmit={(e) => regist(e)}>
                    <h1 className="text-center text-warning">Comment & Review</h1>
                    <div className="mt-4">
                        <input type="text" name="username" onChange={(e) => getInput(e)} className="form-control" placeholder="Enter Username" />
                    </div>
                    <div className="mt-4">
                        <input type="text" name="email" onChange={(e) => getInput(e)} className="form-control" placeholder="Enter Email" />
                    </div>
                    <div className="mt-4">
                        <input type="number" name="mobile" onChange={(e) => getInput(e)} className="form-control" placeholder="Enter user mobile" />
                    </div>
                    <div className="mt-4">
                        <select className="form-control" name="city" onChange={(e) => getInput(e)}>
                            <option value="">Select Course</option>
                            <option value="Web Development">Web Development</option>
                            <option value="App Development">App Development</option>
                            <option value="Data Analysis">Data Analysis</option>
                            <option value="Python">Python</option>
                        </select>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="">Gender</label><br />
                        <input type="radio" value="Male" name="gender" onChange={(e) => getInput(e)} />Male
                        <input type="radio" value="Female" name="gender" onChange={(e) => getInput(e)} />Female
                        <input type="radio" value="Other" name="gender" onChange={(e) => getInput(e)} />Other
                    </div>
                    <div className="mt-4">
                        <label htmlFor="">Hobbies</label><br />
                        <input type="checkbox" value="Cricket" name="hobbies" onChange={(e) => getInput(e)} />Cricket
                        <input type="checkbox" value="Football" name="hobbies" onChange={(e) => getInput(e)} />Football
                        <input type="checkbox" value="Gym" name="hobbies" onChange={(e) => getInput(e)} />Swimming
                    </div>
                    <div className="mt-4">
                        <textarea placeholder="Enter Address" name="address" onChange={(e) => getInput(e)} className="form-control"></textarea>
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-outline-success">Submit</button>
                    </div>
                </form>
            </div>
           
        </>
    );
};

export default Event;