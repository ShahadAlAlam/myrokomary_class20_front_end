import { useParams } from "react-router-dom";
import { apiPathDeleteBooksById, apiPathGetBookById } from "./api/BooksApiService";
import { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";

function BooksComponent(){
    
  const params = useParams();
  const [id,setId] = useState(params.id);

  const [title,setTitle] = useState("");
  const [author,setAuthor] = useState("");
  const [publisher,setPublisher] = useState("");
  const [edition,setEdition] = useState("");
  const [numberOfPages,setNumberOfPages] = useState(0);
  const [country,setCountry] = useState("");
  const [language,setLanguage] = useState("");



  useEffect(
    ()=>{
        console.log(`id called useEffect ${id}`)
        getBooksById(id)
    } ,[id]
  )
  function getBooksById(id){
    apiPathGetBookById(id)
    .then((response)=>setBooksResponse(response))
    .catch((error)=>setErrorResponse(error));
  }  
    

  function setBooksResponse(response){
    // console.log(response)
    // console.log("successfull");
    console.log(response.data);
    setId(response.data.id);
    setTitle(response.data.title);
    setAuthor(response.data.author);
    setPublisher(response.data.publisher);
    setEdition(response.data.edition);
    setNumberOfPages(response.data.numberOfPages);
    setCountry(response.data.country);
    setLanguage(response.data.language);
  }

  function setErrorResponse(error){
    console.log(error);
    // setBooks([]);
    // return;
  }

  function onSubmit(value){
    console.log(value)

  }
    return (
        <div className="container">
            <h1>Enter Book Details</h1>
            <div>
                <Formik initialValues={{id,title,author,publisher,edition,numberOfPages,country,language}}
                    enableReinitialize ={true} 
                    onSubmit={onSubmit}
                    >
                    {
                        (props)=>(
                        <Form>
                            <fieldset className="form-group">
                                <label>id</label>
                                <Field type="number" className="display-control" name="id"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Title</label>
                                <Field type="text" className="form-control" name="title"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Auther</label>
                                <Field type="text" className="form-control" name="auther"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Publisher</label>
                                <Field type="text" className="form-control" name="publisher"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Edition</label>
                                <Field type="text" className="form-control" name="edition"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Number of Pages</label>
                                <Field type="number" className="form-control" name="numberOfPages"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Country</label>
                                <Field type="text" className="form-control" name="country"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Language</label>
                                <Field type="text" className="form-control" name="language"></Field>
                            </fieldset>
                            <div><button className="btn btn-success m-5" type="submit">Save</button></div>
                        </Form>
                        )
                    }
                </Formik>    
            </div>
        </div>
    );
}

export default BooksComponent;