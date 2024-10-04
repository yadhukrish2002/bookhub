import React, { useState,useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios"; 
import { useNavigate ,useParams} from "react-router-dom";



function BookDelete(){
    const {id} = useParams()
    const navigate=useNavigate()
    const [Data,setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://yadhukrishnak2002.pythonanywhere.com/book/bookDetails/${id}/`);
            setData(response.data);
          } catch (error) {
            console.error('Error fetching user data:', error);
            // Optionally handle errors by displaying a message or redirecting
          }
        };
    
        fetchData();
      
    }, [id]);
    const handleDelete=()=>{
      fetch(`https://yadhukrishnak2002.pythonanywhere.com/book/bookDelete/${id}/`,
        {
          method:'DELETE'
        }
      )
      .then(()=>{
        console.log('deleted')
        navigate('/bookListView')
      })
    }  


    return(
        <div>
          <center>
          <div className="card w-50 p-5 m-4" >
            <h1>CONFIRM DELETE</h1>
            <div class="card-body">
              <h5 class="card-title">Book Name : {Data.title}</h5>    
              <p class="card-text"> Are you sure , Do you want to delete the Book Called :" {Data.title}"</p>
            </div>
            <hr></hr>
            <button className="btn btn-outline-danger m-1" onClick={handleDelete}>Confirm delete</button>
          </div>    
          </center>                           
        </div>
    )


}
export default BookDelete;