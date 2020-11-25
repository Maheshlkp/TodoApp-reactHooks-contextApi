import React from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

export const AddUser = () => {
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label>Home</Label>
                    <Input type="text" placeholder="Enter Name"></Input>
                </FormGroup>
                <Button className="btn btn-success" type="button">Submit</Button>
                <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
            </Form>
        </div>
    )
}
