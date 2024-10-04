import React, { useState,useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios"; 
import { useNavigate ,useParams ,Link} from "react-router-dom";



function BookDetails(){
    const {id} = useParams()
    const navigate=useNavigate()
    const [Data,setData] = useState({})

    
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
      
    return(
        <div>
            <h1 className="m-5">BOOK DETAILS</h1>
            <center>
                
                <div class="card mb-3 w-75 m-5 rounded-4 justify-content-center">
                    <div class="row g-0">
                        <div class="col-md-4 ">
                            <img src={Data.cover_image} class="img-fluid rounded-4" alt="..."/>
                        </div>
                        <div class="col-md-8 ">
                            <div class="card-body p-3">
                                <h5 class="card-title">{Data.title}</h5>
                                <table>
                            <tbody>

                                

                                <tr>
                                    <td>
                                        <p class="card-text">Author </p>
                                    </td>
                                    <td>
                                        <p class="card-text">: {Data.author} </p>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <p class="card-text">ISBN  </p>
                                    </td>
                                    <td>
                                        <p class="card-text">: {Data.isbn} </p>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <p class="card-text">Publisher </p>
                                    </td>
                                    <td>
                                        <p class="card-text">: {Data.publisher} </p>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <p class="card-text">Publication Year </p>
                                    </td>
                                    <td>
                                        <p class="card-text">: {Data.publication_year} </p>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <p class="card-text">Genre </p>
                                    </td>
                                    <td>
                                        <p class="card-text">: {Data.genre} </p>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <p class="card-text">Description </p>
                                    </td>
                                    <td>
                                        <p class="card-text">: {Data.description} </p>
                                    </td>

                                </tr>
                                
                                

                            </tbody>
                        </table>  
                        
                                    <Link className="btn btn-outline-primary m-1" to={`/bookUpdate/${Data.id}`}>Edit book</Link>
                                    <Link className="btn btn-outline-danger m-1" to={`/bookDelete/${Data.id}`}>Delete book</Link>
                                    
                            </div>
                        </div>
                    </div>
                </div>
                        
                
            </center>
            
        </div>
    )


}
export default BookDetails;