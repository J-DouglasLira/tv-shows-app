import React, { useState, useEffect } from 'react';
import {
    Form,
    Badge,
} from "reactstrap";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const InfoSerie = () => {
    const [form, setForm] = useState({});
    const [success, setSuccess] = useState(false);
    const [data, setData] = useState({});
    const [mode, setMode] = useState("EDIT");
    const [genres, setGenres] = useState([])

    const params = useParams();
    useEffect(() => {
        axios
            .get('/api/series/' + params.id)
            .then(res => {
                setData(res.data)
                setForm(res.data);
            })

    }, [params.id]);

    useEffect(() => {
        axios
            .get('api/genres').then(res => {
                setGenres(res.data.data);
            })
    }, [data])


    const navigation = useNavigate();

    const seleciona = value => () => {
        setForm({
            ...form,
            status: value
        })
    }

    const onChange = field => (e) => {
        setForm({
            ...form,
            [field]: e.target.value
        });
    }

    const save = () => {
        axios
            .put('/api/series/' + params.id, form).then(res => {
                setSuccess(true);
            })
    }


    if (success) {
        return navigation('/series');
    }

    const masterHeader = {
        height: '50vh',
        minHeight: '500px',
        backgroundImage: `url(${data.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }


    return (
        <div>
            <header style={masterHeader}>
                <div className="h-100" style={{ background: 'rgba(0,0,0,0.7' }}>
                    <div className='h-100 container' >
                        <div className="row h-100 align-items-center">
                            <div className="col-3 ">
                                <img alt={data.name} className="img-fluid img-thumbnail" src={data.poster} />
                            </div>
                            <div className="col-8">
                                <h1 className='font-weight-light text-white'>{data.name}</h1>
                                <div className='lead text-white'>
                                    {data.status === 'watched' && <Badge color='success'>Watched</Badge>}
                                    {data.status === 'toWatch' && <Badge color='warning'>To watch</Badge>}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div>
                <button className="btn btn-primary" onClick={() => { setMode('EDIT') }}>
                    Edit
                </button>
            </div>
            {
                mode === 'EDIT' &&
                <div className="container">
                    <h1>New TV-Show</h1>
                    <pre>{JSON.stringify(form)}</pre>
                    <button className="btn btn-primary" onClick={() => { setMode('INFO') }}>
                        Cancel Edit
                    </button>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" value={form.name} onChange={onChange('name')} className="form-control" id="name" placeholder="Series Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Comentários</label>
                            <input type="text" value={form.comments}
                                onChange={onChange('comments')}
                                className="form-control"
                                id="name"
                                placeholder="Series Name" />
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="status" id="watched" value="WATCHED" onClick={seleciona('watched')} />
                            <label className="form-check-label" htmlFor="watched">
                                Watched
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="status" id="toWatch" value="to_Watched" onClick={seleciona('toWatch')} />
                            <label className="form-check-label" htmlFor="toWatch">
                                To Watch
                            </label>
                        </div>
                        <button type="button" onClick={save} className="btn btn-primary">Save</button>
                    </Form>
                </div>
            }
        </div>
    )
}

export default InfoSerie;