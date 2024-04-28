import {useNavigate, useParams} from "react-router-dom";
import {apiPathAddBooks, apiPathGetBookById, apiPathUpdateBooks} from "./api/BooksApiService";
import {useEffect, useState} from "react";
import {Formik, Field, Form, ErrorMessage} from "formik";

function BooksComponent() {

    const params = useParams();

    const [id, setId] = useState((params.id != -1 ? params.id : null));

    const [showId, setShowId] = useState((params.id == -1 ? false : true));

    const [messagedata, setMessageData] = useState();

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publisher, setPublisher] = useState("");
    const [edition, setEdition] = useState("");
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [country, setCountry] = useState("");
    const [language, setLanguage] = useState("");


    useEffect(
        () => {
            // console.log(`id called useEffect ${id}`)
            if (params.id != -1) {
                getBooksById(id);
            }
        }, [id]
    )

    function getBooksById(id) {
        apiPathGetBookById(id)
            .then((response) => setBooksResponse(response))
            .catch((error) => setErrorResponse(error));
    }


    function setBooksResponse(response) {
        console.log(response)
        // console.log("successfull");
        console.log("setBooksResponse", response.data);
        setId(!response.data.id ? response.data.id : (params.id != -1 ? params.id : null));
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublisher(response.data.publisher);
        setEdition(response.data.edition);
        setNumberOfPages(response.data.numberOfPages);
        setCountry(response.data.country);
        setLanguage(response.data.language);
    }

    function setErrorResponse(error) {
        console.log(error);
        // setBooks([]);
        // return;
    }

    function onSubmit(value) {
        if (params.id == -1) {
            apiPathAddBooks(value)
                .then((response) => onSubmitNavigate(response))
                .catch((error) => console.log(error))
        } else {
            apiPathUpdateBooks(value)
                .then((response) => onSubmitNavigate(response))
                .catch((error) => console.log(error))
        }
    }

    function onSubmitNavigate(response) {
        console.log(response.data.details)
        setMessageData(response.data.details);
        navigate(`/listbooks/${response.data.details}`)
    }

    function validate(value) {
        let error = {}
        if (!value.title || value.title.length <= 0) {
            error.title = "Title can not be empty";
        }
        console.log("validate", value)
        return error;
    }

    return (
        <div className='body'>
            <div className="container">
                <h1>Enter Book Details</h1>
                <div className="form text-start">
                    <Formik initialValues={{id, title, author, publisher, edition, numberOfPages, country, language}}
                            enableReinitialize={true}
                            onSubmit={onSubmit}
                            validate={validate}
                        // validateOnBlur={false} //only validate of felid change
                        // validateOnChange={false} // only validate when submit
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage
                                        name="title"
                                        component="div"
                                        className="alert alert-warning"
                                    />
                                    {showId && <fieldset className="form-group" disabled='true'>
                                        <div className="row">
                                            <div className="col-md-2  fw-bold">
                                                <label>id</label>
                                            </div>
                                            <div className="col-md-10">
                                                <Field type="number" className="form-control" name="id"
                                                       value={id} readonly></Field>
                                            </div>
                                        </div>
                                    </fieldset>}
                                    <fieldset className="form-group">
                                        <div className="row">
                                            <div className="col-md-2 fw-bold">
                                                <label>Title</label>
                                            </div>
                                            <div className="col-md-10">
                                                <Field type="text" className="form-control" name="title"></Field>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <div className="row">
                                            <div className="col-md-2 fw-bold ">
                                                <label>Auther</label>
                                            </div>
                                            <div className="col-md-10">
                                                <Field type="text" className="form-control" name="author"></Field>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <div className="row">
                                            <div className="col-md-2 fw-bold ">
                                                <label>Publisher</label>
                                            </div>
                                            <div className="col-md-10">
                                                <Field type="text" className="form-control" name="publisher"></Field>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <div className="row">
                                            <div className="col-md-2 fw-bold ">
                                                <label>Edition</label>
                                            </div>
                                            <div className="col-md-10">
                                                <Field type="text" className="form-control" name="edition"></Field>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <div className="row">
                                            <div className="col-md-2 fw-bold ">
                                                <label>Number of Pages</label>
                                            </div>
                                            <div className="col-md-10">
                                                <Field type="number" className="form-control"
                                                       name="numberOfPages"></Field>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <div className="row">
                                            <div className="col-md-2 fw-bold ">
                                                <label>Country</label>
                                            </div>
                                            <div className="col-md-10">
                                                <Field type="text" className="form-control" name="country"></Field>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <div className="row">
                                            <div className="col-md-2 fw-bold ">
                                                <label>Language</label>
                                            </div>
                                            <div className="col-md-10">
                                                <Field type="text" className="form-control" name="language"></Field>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div className='row'>
                                        <div className='col-md-2'></div>
                                        <div className="col-md-10">
                                            <button className="btn btn-success col-md-12" type="submit">Save</button>
                                        </div>
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default BooksComponent;