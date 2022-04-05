import React, { useState } from 'react';
import {
    Form
} from "reactstrap";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewGeners = () => {
    const [genresName, setGenresName] = useState("");
    const [success, setSuccess] = useState(false);
    const navigation = useNavigate();
    const onChange = (e) => {
        setGenresName(e.target.value);
    }

    const save = () => {
        axios.post('/api/genres', {
            name: genresName
        }).then(res => {
            setSuccess(true);
        })
    }

    if (success) {
        return navigation('/genres');
    }

    return (
        <div className="container">
            <h1>New Geners</h1>
            <Form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={genresName} onChange={onChange} className="form-control" id="name" placeholder="Genres Name" />
                </div>
                <button type="button" onClick={save} className="btn btn-primary">Save</button>
            </Form>
        </div>
    )
}

export default NewGeners;