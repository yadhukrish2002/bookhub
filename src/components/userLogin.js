import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";



function UserLogin(){
    const [formData,setFormData] = useState({})
    const navigate=useNavigate()
    const [logedUser,setlogedUser]=useState(null)

    const handleInput=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const response = await axios.get('https://yadhukrishnak2002.pythonanywhere.com/userCreate/');
            const users=response.data;
            // Find matching user based on username and password
            const matchingUser = users.find(
                (user) => user.username === formData.username && user.password === formData.password
            );
            if (matchingUser) {
                setlogedUser(matchingUser);
                toast.success('user Loged successfull', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                navigate('/bookListView')
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
       
        console.log(formData)
        
    }
    return(
        <div>
            <section className="section section-sm bg-default">
                <div className="container">
                    <h3 className="oh-desktop"><span className="d-inline-block wow slideInDown">USER LOGIN</span></h3>
                    <center>
                        <form method='post' onSubmit={handleSubmit} className= 'inline-block wow slideInDown col-md-6' >
                            <p>
                                <label>username:</label>
                                <input type='text' id="username" name="username" onChange={handleInput} className='form-control' maxlength="100"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>password:</label>
                                <input type='password' id="password" name="password" onChange={handleInput}  className='form-control' maxlength="100"  data-has-listeners="true"/>
                            </p>

                            <input type="submit" className="button button-black-outline button-ujarak" value="Login"/>
                        </form>
                    </center>
                </div>
            </section>

        </div>
    )


}


export default UserLogin;