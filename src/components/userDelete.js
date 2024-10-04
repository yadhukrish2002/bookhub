import React, { useState,useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios"; 
import { useNavigate ,useParams} from "react-router-dom";



function UserDelete(){
    const {id} = useParams()
    const navigate=useNavigate()
    const [Data,setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://yadhukrishnak2002.pythonanywhere.com/userDetails/${id}/`);
            setData(response.data);
          } catch (error) {
            console.error('Error fetching user data:', error);
            // Optionally handle errors by displaying a message or redirecting
          }
        };
    
        fetchData();
      
    }, [id]);
    const handleDelete=()=>{
      fetch(`https://yadhukrishnak2002.pythonanywhere.com/userDelete/${id}/`,
        {
          method:'DELETE'
        }
      )
      .then(()=>{
        console.log('deleted')
        navigate('/userListView')
      })
    }  


    return(
        <div>
          <center>
          <div className="card w-50 p-5 m-4" >
            <h1>CONFIRM DELETE</h1>
            <div class="card-body">
              <h5 class="card-title">Username : {Data.username}</h5>    
              <p class="card-text"> Are you sure , Do you want to delete the User Called :'' {Data.first_name} {Data.last_name}"</p>
            </div>
            <hr></hr>
            <button className="btn btn-outline-danger m-1" onClick={handleDelete}>Confirm delete</button>
          </div>    
          </center>                           
        </div>
    )


}
export default UserDelete;