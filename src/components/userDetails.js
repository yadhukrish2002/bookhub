import React, { useState,useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios"; 
import { useNavigate ,useParams} from "react-router-dom";



function UserDetails(){
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
    return(
        <div>
            <center>
                <div className="card w-50 p-5 m-4" >
                    <div class="card-body">
                        <table>
                            <tbody>

                                <tr>
                                    <td>
                                        <h5 class="card-title">Full name  </h5>
                                    </td>
                                    <td>
                                    <h5 class="card-title">: {Data.first_name} {Data.last_name} </h5>
                                    </td>

                                </tr>

                                <tr>
                                    <td>
                                        <p class="card-text">Username  </p>
                                    </td>
                                    <td>
                                        <p class="card-text">: {Data.username} </p>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <p class="card-text">Email  </p>
                                    </td>
                                    <td>
                                        <p class="card-text">: {Data.email} </p>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <p class="card-text">Contact Number  </p>
                                    </td>
                                    <td>
                                        <p class="card-text">: {Data.contact_number} </p>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <p class="card-text">Role  </p>
                                    </td>
                                    <td>
                                        <p class="card-text">: {Data.role} </p>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <p class="card-text">Address  </p>
                                    </td>
                                    <td>
                                        <p class="card-text">: {Data.address} </p>
                                    </td>

                                </tr>
                                

                            </tbody>
                        </table>
                        
                   
                    </div>
                </div>
            </center>
            
        </div>
    )


}
export default UserDetails;