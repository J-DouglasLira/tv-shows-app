import React, { useState, useEffect } from 'react';
import {
  Form
} from "reactstrap";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditGeners = () => {
  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);

  const params = useParams();


  useEffect(() => {
    axios.get('/api/genres/' + params.id).then(res => {
      setName(res.data.name);
    })
  }, [params.id])


  const navigation = useNavigate();
  const onChange = (e) => {
    setName(e.target.value);
  }

  const save = () => {
    axios.put('/api/genres/' + params.id, {
      name
    }).then(res => {
      setSuccess(true);
    })
  }

  if (success) {
    return navigation('/genres');
  }

  return (
    <div className="container">
      <h1>Edit Geners</h1>
      <Form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" value={name} onChange={onChange} className="form-control" id="name" placeholder="Genres Name" />
        </div>
        <button type="button" onClick={save} className="btn btn-primary">Save</button>
      </Form>
    </div>
  )
}

export default EditGeners;