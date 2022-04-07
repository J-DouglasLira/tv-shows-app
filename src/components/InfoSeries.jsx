import React, { useState, useEffect } from 'react';
import {
    Form
} from "reactstrap";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const InfoSerie = () => {
    const [name, setName] = useState("");
    const [success, setSuccess] = useState(false);
    const [data, setData] = useState({});

    const params = useParams();
    useEffect(() => {
        axios
            .get('/api/series/' + params.id)
            .then(res => { setData(res.data) })
    }, [params.id]);



    const navigation = useNavigate();
    const onChange = (e) => {
        setName(e.target.value);
    }

    const save = () => {
        axios.post('/api/series', {
            name
        }).then(res => {
            setSuccess(true);
        })
    }

    if (success) {
        return navigation('/series');
    }

    return (
        <div className="container">
            <h1>New TV-Show</h1>
            <pre>{JSON.stringify(data)}</pre>
            <Form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={name} onChange={onChange} className="form-control" id="name" placeholder="Series Name" />
                </div>
                <button type="button" onClick={save} className="btn btn-primary">Save</button>
            </Form>
        </div>
    )
}

export default InfoSerie;