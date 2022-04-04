import React, {useState} from 'react';
import {
   Form
  } from "reactstrap";

const NewGeners = () =>{

    return (
        <div className="container">
            <h1>New Geners</h1>
            <Form>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Genres Name" />
                </div>
            </Form>
        </div>
    )
}

export default NewGeners;