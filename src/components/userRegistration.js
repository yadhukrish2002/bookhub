import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";



function UserRegistration(){
    const [formData,setFormData] = useState({})
    const navigate=useNavigate()
    const handleInput=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const response= await axios.post(
                `https://yadhukrishnak2002.pythonanywhere.com/userCreate/`,formData,{
                    method:'POST',
                    header:{
                        'content-type':'application/json',
                    }
                }
            )
            if(response.status===201){
            }
        }
        catch(error){
            console.log('error occured',{error})
        }
        toast.success('user registeration successfull', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        navigate('/userLogin')
        console.log(formData)
        
    }
    return(
        <div>
            <section className="section section-sm bg-default">
                <div className="container">
                    <h3 className="oh-desktop"><span className="d-inline-block wow slideInDown">USER REGISTRATION</span></h3>
                    <center>
                        <form method='post' onSubmit={handleSubmit} className= 'inline-block wow slideInDown col-md-6' >
                            <p>
                                <label>username:</label>
                                <input type='text' id="username" name="username" onChange={handleInput} className='form-control' maxlength="100"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>first_name:</label>
                                <input type='text' id="first_name" name="first_name" onChange={handleInput} className='form-control' maxlength="100"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>last_name:</label>
                                <input type='text' id="last_name" name="last_name" onChange={handleInput} className='form-control' maxlength="100"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>email:</label>
                                <input type='email' id="email" name="email" onChange={handleInput} className='form-control' maxlength="100"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>contact_number:</label>
                                <input type='tel' id="contact_number" name="contact_number" onChange={handleInput} className='form-control' maxlength="100"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>address:</label>
                                <textarea name='address' id="address"  onChange={handleInput} className='form-control'  data-has-listeners="true" ></textarea>
                            </p>
                            <p>
                                <label>role:</label>
                                <select  className='form-control' id="role" name="role" onChange={handleInput} maxlength="100"  data-has-listeners="true">
                                    <option value='librarian'>librarian</option>
                                    <option value='patron'>patron</option>
                                </select>
                            </p>
                            <p>
                                <label>password:</label>
                                <input type='password' id="password" name="password" onChange={handleInput}  className='form-control' maxlength="100"  data-has-listeners="true"/>
                            </p>

                            <input type="submit" className="button button-black-outline button-ujarak" value="Register"/>
                        </form>
                    </center>
                </div>
            </section>

        </div>
    )


}
export default UserRegistration;