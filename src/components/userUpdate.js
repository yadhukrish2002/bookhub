import React, { useState,useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios"; 
import { useNavigate ,useParams} from "react-router-dom";



function UserUpdate(){
    const {id} = useParams()
    const [updateData,setUpdateData] = useState({})
    const navigate=useNavigate()

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://yadhukrishnak2002.pythonanywhere.com/userDetails/${id}/`);
            setUpdateData(response.data);
          } catch (error) {
            console.error('Error fetching user data:', error);
            // Optionally handle errors by displaying a message or redirecting
          }
        };
    
        fetchData();
      }, [id]);

    const handleInput=(ev,fieldName)=>{
        const value=ev.target.value;
        setUpdateData((prevUpdate)=>({
            ...prevUpdate,
            [fieldName]:value,
        }))
    }
    const handleSubmit=async(e,id)=>{
        e.preventDefault()
        const requestData={
            id:updateData.id,
            username:updateData.username,
            first_name:updateData.first_name,
            last_name:updateData.last_name,
            role:updateData.role,
            email:updateData.email,
            contact_number:updateData.contact_number,
            address:updateData.address,
            password:updateData.password,
        };
        try{
            const response= await axios.put(
                `https://yadhukrishnak2002.pythonanywhere.com/userUpdate/${id}/`,requestData,{
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
        toast.success('user edit successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        navigate('/userListView')
        
        
    }
    return(
        <div>
            <section className="section section-sm bg-default">
                <div className="container">
                    <h3 className="oh-desktop"><span className="d-inline-block wow slideInDown">EDIT USER </span></h3>
                    <center>
                        <form method='post' onSubmit={(e)=>handleSubmit(e,updateData.id)} className= 'inline-block wow slideInDown col-md-6' >
                            <p>
                                <label>username:</label>
                                <input type='text' id="username" name="username" onChange={(ev)=>handleInput(ev,'username')} value={updateData.username} className='form-control' maxlength="100"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>first_name:</label>
                                <input type='text' id="first_name" name="first_name" onChange={(ev)=>handleInput(ev,'first_name')} value={updateData.first_name} className='form-control' maxlength="100"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>last_name:</label>
                                <input type='text' id="last_name" name="last_name" onChange={(ev)=>handleInput(ev,'last_name')} value={updateData.last_name} className='form-control' maxlength="100"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>email:</label>
                                <input type='email' id="email" name="email" onChange={(ev)=>handleInput(ev,'email')} value={updateData.email} className='form-control' maxlength="100"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>contact_number:</label>
                                <input type='tel' id="contact_number" name="contact_number" onChange={(ev)=>handleInput(ev,'contact_number')} value={updateData.contact_number} className='form-control' maxlength="100"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>address:</label>
                                <textarea name='address' id="address"  onChange={(ev)=>handleInput(ev,'address')} value={updateData.address} className='form-control'  data-has-listeners="true" ></textarea>
                            </p>
                            <p>
                                <label>role:</label>
                                <select  className='form-control' id="role" name="role" onChange={(ev)=>handleInput(ev,'role')} value={updateData.role} maxlength="100"  data-has-listeners="true">
                                    <option value='librarian'>librarian</option>
                                    <option value='patron'>patron</option>
                                </select>
                            </p>
                            <p>
                                <label>password:</label>
                                <input type='password' id="password" name="password" onChange={(ev)=>handleInput(ev,'password')} value={updateData.password}  className='form-control' maxlength="100"  data-has-listeners="true"/>
                            </p>

                            <input type="submit" className="button button-black-outline button-ujarak" value="save"/>
                        </form>
                    </center>
                </div>
            </section>

        </div>
    )


}
export default UserUpdate;