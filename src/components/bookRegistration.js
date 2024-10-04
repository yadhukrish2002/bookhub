import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";



function BookRegistration(){
    const [formData,setFormData] = useState({})
    const navigate=useNavigate()
    
    const handleInput=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }
    const handleInputImage=(e)=>{
        const file= e.target.files[0]
        if (!file) return;
        const formDataImage = new FormData();
        formDataImage.append("cover_image", file);
        formDataImage.append("title", formData.title); // Ensure title is included
        formDataImage.append("author", formData.author);
        formDataImage.append("isbn", formData.isbn);
        formDataImage.append("publisher", formData.publisher);
        formDataImage.append("publication_year", formData.publication_year);
        formDataImage.append("genre", formData.genre);
        formDataImage.append("description", formData.description);
        console.log(formDataImage)
        setFormData(formDataImage); 
        
        console.log(formData)
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
       
            try{
                const response= await axios.post(
                    `https://yadhukrishnak2002.pythonanywhere.com/book/bookCreate/`,formData,{
                        method:'POST',
                        header:{
                            'content-type':'multipart/form-data',
                        }
                    }
                )
                if(response.status===201){
                }
            }
            catch(error){
                console.log('error occured',{error})
            }
            toast.success('book registeration successfull', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            console.log(formData)
            navigate('/bookListView')
            
           
        
    }
    return(
        <div>
            <section className="section section-sm bg-default">
                <div className="container">
                    <h3 className="oh-desktop"><span className="d-inline-block wow slideInDown">Add new Book</span></h3>
                    <center>
                        <form method='post' onSubmit={handleSubmit} className= 'inline-block wow slideInDown col-md-6' >
                            <p>
                                <label>Title:</label>
                                <input type='text' id="title" name="title" onChange={handleInput} className='form-control' maxLength="100"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>Author:</label>
                                <input type='text' id="author" name="author" onChange={handleInput} className='form-control' maxLength="100"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>ISBN:</label>
                                <input type='number' id="isbn" name="isbn" onChange={handleInput} className='form-control' maxLength="13"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>Publisher:</label>
                                <input type='text' id="publisher" name="publisher" onChange={handleInput} className='form-control' maxLength="100"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>Publication Year:</label>
                                <input type='number' id="publication_year" name="publication_year" onChange={handleInput} className='form-control' maxLength="100"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>Description:</label>
                                <textarea name='description' id="description"  onChange={handleInput} className='form-control'  data-has-listeners="true" ></textarea>
                            </p>
                            <p>
                                <label>Genre:</label>
                                <input type='text' id="genre" name="genre" onChange={handleInput} className='form-control' maxLength="100"  data-has-listeners="true"/>
                            </p>
                            <p>
                                <label>Cover Image:</label>
                                <input type='file' id="cover_image" name="cover_image" accept="image/*" onChange={handleInputImage}  className='form-control' maxLength="100"  data-has-listeners="true"/>
                            </p>

                            <input type="submit" className="button button-black-outline button-ujarak" value="Save new book"/>
                        </form>
                    </center>
                </div>
            </section>

        </div>
    )


}
export default BookRegistration;