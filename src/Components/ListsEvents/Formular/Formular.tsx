


import { SetStateAction, useState } from 'react';
import './Formular.scss'
import { Formik, Form, Field, FormikTouched, FormikErrors, useField, FormikState, } from 'formik';
import 'sweetalert2/src/sweetalert2.scss'
import { useNavigate } from "react-router-dom";

import * as Yup from 'yup';
import { addEvent } from '../../../store/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface MyFormValues {
    "title": string,
    "date_event": Date,
    "description": string,
    "image": any,
    "type_event": string,
    "phone_number": string,
    "email": string,
    "place_event": string,
}


export const Formular = () => {
    const [startDate, setStartDate] = useState(new Date());
    const countDispatch = useDispatch<Dispatch<EventAction>>();
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const titlesName: string[] = useSelector(
        (state: EventState) => state.titles
    );
    const initialValues: MyFormValues = {
        title: "",
        date_event: new Date(),
        type_event: "",
        phone_number: "",
        email: "",
        place_event: "",
        description: "",
        image: '',
    };

    const handleOnSubmit = (values: iEvent) => {
        alert(JSON.stringify(values));

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
        date_event: Yup.date()
            .nullable()
            .required("Start Date is required")
            .min(new Date(), "Start Date must be later than today"),
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

    const handleError = (errors: FormikErrors<MyFormValues>, touched: FormikTouched<MyFormValues>, title: any) => {
        return (
            errors.title && touched.title ? (
                <p className='text-danger'>{errors.title} {title}</p>
            ) : null)
    }

    return (
        <div className='d-flex flex-column col-12'>
            <h1>Event add form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={(values: iEvent) => handleOnSubmit(values)}
            >
                {({ errors, touched, setFieldValue, resetForm }) => (
                    <Form>
                        {titles.map((inputField, index) => {
                            if (inputField === "image") {
                                return (
                                    <div key={titles.indexOf(inputField)}>
                                        <label>{titlesName[index]}:</label>
                                        <input name="image" type="file" accept="image/*" onChange={(e: any) => {
                                            setFieldValue("image", e.currentTarget.files[0].name);
                                        }}
                                        />
                                        {handleError(errors, touched, titles[index])}
                                    </div>)
                            } else if (inputField === "date_event") {
                                return <div key={titles.indexOf(inputField)}>
                                    <label>{titlesName[index]}:</label>
                                    <Field name="date_event">
                                        {() => {
                                            return (
                                                <DatePicker
                                                    selected={startDate}
                                                    showTimeSelect
                                                    onChange={(date: Date) => {
                                                        setStartDate(date)
                                                        setFieldValue("date_event", date);
                                                    }}
                                                    shouldCloseOnSelect={true}
                                                />


                                            );

                                        }}
                                    </Field>
                                    {errors.date_event && touched.date_event ? <p className='text-danger'>{errors.date_event}</p> : null}
                                </div>

                            } else {
                                return (
                                    <div key={titles.indexOf(inputField)}>
                                        <label>{titlesName[index]}:</label>
                                        <Field name={inputField} placeholder={titlesName[index]} style={errors.title && touched.title ? { border: "2px solid #F5C6CB", backgroundColor: "#F8D7DA" } : null} />
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
