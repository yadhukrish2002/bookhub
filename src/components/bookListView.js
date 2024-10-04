import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios"; 
import { Link, useNavigate } from "react-router-dom";


function BookListView(){
    const navigate=useNavigate()
    const [data,setData]=useState([])
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
      };
    
    const fetchData = async () => {
        try {
            const response = await axios.get('https://yadhukrishnak2002.pythonanywhere.com/book/bookCreate/');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

    useEffect(() => {
        fetchData();
    console.log(data)
        if (search) { // Only filter if search term is not empty
          const filtered = data.filter((item) => {
            // Implement search logic here (e.g., case-insensitive search)
            const searchTermLower = search.toLowerCase();
            return (
              item.title.toLowerCase().includes(searchTermLower) 
            );
          });
          setFilteredData(filtered);
        } else {
          setFilteredData(data); // Display all data if search is empty
        }
      }, [search, data]);
    
    return(
        <>
        <h1>BOOKS</h1>
        <div className=" align-content-end p-5 ">
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <div className="row inline-block col-3">
                    <Link className="btn btn-outline-danger m-1  col-6" to={`/bookRegistration`}>Add new book</Link>
                    <Link className="btn btn-outline-danger m-1  col-6" to={`/userListView`}>view Users</Link>
                </div>
                <form method="post" className="inline-block wow slideInDown col-md-3">
                    <p>
                        <input
                        type="text"
                        id="search"
                        name="search"
                        onChange={handleSearchChange}
                        className="form-control"
                        maxLength="100"
                        data-has-listeners="true"
                        placeholder="Search by book title" // Optional placeholder
                        />
                    </p>
                </form>
            </div>
        </nav>
        <div className="col-6 float-end container-fluid" >
        
        
        </div>
        
        </div>
        
        <center>
        {
                    filteredData.map((item)=>(
                        <div class="card mb-3 w-50">
                            <div class="row g-0">
                                <div class="col-md-4">
                                <img src={item.cover_image} class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div class="col-md-8 ">
                                <div class="card-body p-5">
                                    <h5 class="card-title">{item.title}</h5>
                                    <p class="card-text">Author : {item.author}</p>
                                    <p class="card-text">ISBN : {item.isbn}</p>
                                    
                                    <Link className="btn btn-outline-info m-1" to={`/bookDetails/${item.id}`}>Details</Link>
                                    
                                </div>
                                </div>
                            </div>
                            </div>

                        
                    ))
                }
        </center>
                
        
        
        </>
    )


}


export default BookListView;