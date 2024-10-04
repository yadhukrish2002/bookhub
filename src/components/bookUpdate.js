import React, { useState,useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios"; 
import { useNavigate ,useParams} from "react-router-dom";



function BookUpdate(){
    const {id} = useParams()
    const [updateData, setUpdateData] = useState({
        title: "",
        author: "",
        isbn: "",
        publisher: "",
        publication_year: "",
        genre: "",
        description: "",
        cover_image:""
      });
    const navigate=useNavigate()

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://yadhukrishnak2002.pythonanywhere.com/book/bookDetails/${id}/`);
            setUpdateData(response.data);
          } catch (error) {
            console.error('Error fetching user data:', error);
            // Optionally handle errors by displaying a message or redirecting
          }
        };
    
        fetchData();
      }, [id]);


      const handleInput = (event) => {
        const { name, value } = event.target;
        setUpdateData((prevUpdate) => ({
          ...prevUpdate,
          [name]: value,
        }));
      };

      const handleInputImage = (event) => {
        console.log(updateData)
        const file = event.target.files[0];
        console.log(file)
        console.log(file[0])
        if (!file) return;
        setUpdateData((prevUpdate) => ({
            ...prevUpdate,
            cover_image: file, // Update only the cover_image field
          }));
        console.log(updateData)
      };
    

    const handleSubmit=async(event)=>{
        console.log(updateData)
        event.preventDefault()
        const requestData={
            id:updateData.id,
            title:updateData.title,
            author:updateData.author,
            isbn:updateData.isbn,
            publisher:updateData.publisher,
            publication_year:updateData.publication_year,
            genre:updateData.genre,
            description:updateData.description,
            cover_image:updateData.cover_image,
        };
        console.log(requestData)
        try{
            const response= await axios.put(`https://yadhukrishnak2002.pythonanywhere.com/book/bookUpdate/${id}/`,requestData,{
                method:'PUT',    
                header:{
                    
                        "Content-Type":"multipart/form-data",
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
        navigate('/bookListView')
        
        
    }
    return(
        <div>
            <section className="section section-sm bg-default">
                <div className="container">
                    <h3 className="oh-desktop"><span className="d-inline-block wow slideInDown">EDIT BOOK </span></h3>
                    <center>
                        <form method='post' onSubmit={handleSubmit} className= 'inline-block wow slideInDown col-md-6' >
                        <p>
                                <label>Title:</label>
                                <input type='text' id="title" name="title" onChange={handleInput} value={updateData.title} className='form-control' maxLength="100"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>Author:</label>
                                <input type='text' id="author" name="author" onChange={handleInput} value={updateData.author}  className='form-control' maxLength="100"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>ISBN:</label>
                                <input type='number' id="isbn" name="isbn" onChange={handleInput} value={updateData.isbn}  className='form-control' maxLength="13"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>Publisher:</label>
                                <input type='text' id="publisher" name="publisher" onChange={handleInput} value={updateData.publisher} className='form-control' maxLength="100"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>Publication Year:</label>
                                <input type='number' id="publication_year" name="publication_year" onChange={handleInput} value={updateData.publication_year} className='form-control' maxLength="100"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>Description:</label>
                                <textarea name='description' id="description" onChange={handleInput} value={updateData.description} className='form-control'  data-has-listeners="true" ></textarea>
                            </p>
                            <p>
                                <label>Genre:</label>
                                <input type='text' id="genre" name="genre" onChange={handleInput} value={updateData.genre} className='form-control' maxLength="100"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>Cover Image:</label>
                                <input type='file' id="cover_image" name="cover_image" accept="image/*" onChange={handleInputImage}  className='form-control' maxLength="100"  data-has-listeners="true"/>
                            </p>

                            <input type="submit" className="button button-black-outline button-ujarak" value="save"/>
                        </form>
                    </center>
                </div>
            </section>

        </div>
    )


}
export default BookUpdate;