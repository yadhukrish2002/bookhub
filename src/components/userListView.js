import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios"; 
import { Link, useNavigate } from "react-router-dom";


function UserListView(){
    const navigate=useNavigate()
    const [data,setData]=useState([])
    const [filteredData, setFilteredData] = useState([]); 
    const [search, setSearch] = useState('');

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
      };
   

    
    const fetchData = async () => {
        try {
            const response = await axios.get('https://yadhukrishnak2002.pythonanywhere.com/userCreate/');
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
              item.username.toLowerCase().includes(searchTermLower) ||
              item.first_name.toLowerCase().includes(searchTermLower) ||
              item.email.toLowerCase().includes(searchTermLower) ||
              item.contact_number.includes(searchTermLower) || // Include contact number
              item.role.toLowerCase().includes(searchTermLower)
            );
          });
          setFilteredData(filtered);
        } else {
          setFilteredData(data); // Display all data if search is empty
        }
      }, [search, data]); // Re-filter whenever search or data changes
    
    
    return(
        <>
        <h1>USERLISTVIEW</h1>
        <div className="align-content-end p-5">
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
              placeholder="Search by username" 
            />
          </p>
        </form>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">USERNAME</th>
                    <th scope="col">FIRST NAME</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">PHONE NO</th>
                    <th scope="col">ROLE</th>
                
                    <th scope="col">ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    filteredData.map((item)=>(
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.username}</td>
                            <td>{item.first_name}</td>
                            <td>{item.email}</td>
                            <td>{item.contact_number}</td>
                            <td>{item.role}</td>
                            <td>
                                <Link className="btn btn-outline-primary m-1" to={`/userUpdate/${item.id}`}>Update</Link>
                                <Link className="btn btn-outline-info m-1" to={`/userDetails/${item.id}`}>Details</Link>
                                <Link className="btn btn-outline-danger m-1" to={`/userDelete/${item.id}`}>Delete</Link>
                            </td> 
                        </tr>

                        
                    ))
                }
                
            </tbody>
        </table>
        
        
        </>
    )


}


export default UserListView;