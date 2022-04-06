
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'



const Genres = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/genres').then(res => {
            setData(res.data.data);
        })
    }, [])

    const deleteGen = (id) => {
        axios.delete('/api/genres/' + id).then(res => {
            const filtrado = data.filter(item => item.id !== id)
            setData(filtrado);
        })
    }

    const lineRender = (record) => {
        return (
            <tr key={record.id}>
                <th scope="row">{record.id}</th>
                <td>{record.name}</td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={() => deleteGen(record.id)}>Delete</button>
                    <Link to={'' + record.id} className="btn btn-primary">Edit</Link>
                </td>
            </tr>)
    }


    if (data.length === 0) {
        return (
            <div className="container">
                <h1>Geners</h1>
                <div className="alert alert-warning" role="alert">
                    You have no genres created!
                </div>
            </div>
        )
    }


    return (
        <div className="container">
            <h1>Genres</h1>
            <div><Link to="/genres/new">New Geners</Link></div>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(lineRender)}
                </tbody>
            </table>
            <pre>{JSON.stringify(data)}</pre>
        </div>

    );
};


export default Genres;