
import React, { useState, useEffect } from "react";
import axios from 'axios';


const Genres = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/genres').then(res => {
            setData(res.data.data);
        })
    }, [])

    const lineRender = (record) => {
        return (<tr key={record.id}>
            <th scope="row">{record.id}</th>
            <td>{record.name}</td>
            <td>
                <button>+</button>
            </td>
        </tr>)
    }

    return (
        <div>
            <h1>Genres</h1>
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