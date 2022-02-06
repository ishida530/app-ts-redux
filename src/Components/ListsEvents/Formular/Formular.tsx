


import React, { ReactEventHandler, useRef, useState, useEffect } from 'react';
import './Formular.scss'
import { Formik, Form, Field, FormikHelpers, ErrorMessage, FormikTouched, FormikErrors, } from 'formik';
import 'sweetalert2/src/sweetalert2.scss'
import { useNavigate } from "react-router-dom";

import * as Yup from 'yup';
import { Effect } from 'formik-effect'

import { addEvent } from '../../../store/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';

interface MyFormValues {
    "title": string,
    "date_event": string,
    "description": string,
    "image": any,
    "type_event": string,
    "phone_number": string,
    "email": string,
    "place_event": string,
}


export const Formular = () => {
    const countDispatch = useDispatch<Dispatch<EventAction>>();
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const events: iEvent[] = useSelector(
        (state: EventState) => state.events
    );
    const initialValues: MyFormValues = {
        title: "",
        date_event: "",
        type_event: "",
        phone_number: "",
        email: "",
        place_event: "",
        image: '',
        description: "",
    };

    const handleOnSubmit = (values: iEvent) => {
        axios({
            method: 'post',
            url: 'http://localhost:3001/add',
            data: JSON.stringify(values),
        }).then((response) => {
            console.log(response.data);
            console.log('udalo');
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            ).then((result: any) => {
                if (result.isConfirmed) {
                    dispatch(addEvent(values));
                    return navigate("/");
                }

            })
        })
    }
    const SignupSchema = Yup.object().shape({
        title: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        date_event: Yup.string()
            .max(20, 'Must be 15 characters or less')
            .required('Required'),
        description: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        type_event: Yup.string()
            .max(20, 'Must be 15 characters or less')
            .required('Required'),
        phone_number: Yup.string()
            .max(20, 'Must be 15 characters or less')
            .required('Required'),
        place_event: Yup.string()
            .max(20, 'Must be 15 characters or less')
            .required('Required'),
        image: Yup.mixed().required('File is required'),
        email: Yup.string().required('Required'),
    })


    const [titles, setTitiles] = useState(Object.keys(initialValues));

    const handleError = (errors: FormikErrors<MyFormValues>, touched: FormikTouched<MyFormValues>, name: string) =>
    (errors.title && touched.title ? (
        <div>{errors.title}</div>
    ) : null)
    return (
        <div>
            <h1>My Example</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={(values: iEvent) => handleOnSubmit(values)}
            >
                {({ errors, touched, setFieldValue, resetForm }) => (
                    <Form>
                        {titles.map(inputField => {
                            if (inputField === "image") {
                                return (
                                    <div key={titles.indexOf(inputField)}>
                                        <input name="image" type="file" accept="image/*" style={(errors.title && touched.title ? { border: "2px solid red" } : { border: "2px solid transparent" })
                                        } onChange={(e: any) => {
                                            setFieldValue("image", e.currentTarget.files[0].name);
                                        }}
                                        />
                                        {handleError(errors, touched, inputField)}
                                    </div>)
                            } else {
                                return (
                                    <div key={titles.indexOf(inputField)}>
                                        <Field name={inputField} placeholder={inputField} style={errors.title && touched.title ? { border: "2px solid red" } : null} />
                                        {handleError(errors, touched, inputField)}
                                    </div>)
                            }
                        })}
                        <div className='d-flex w100 justify-content-between mt-3'>
                            <button type="button" className="btn btn-secondary col-4" onClick={() => resetForm()} >Clean</button>
                            <button type="submit" className="btn btn-primary   col-4" >Save</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    );
};
export default Formular
