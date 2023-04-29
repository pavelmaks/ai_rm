import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from "react";
import PropTypes from 'prop-types';
import { CropTemplates } from '../../config/crop-templates';
import './crop-img-setting.css';

const CropImgSetting = props => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const [checkedList] = useState(CropTemplates);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="crop-template-form">
            {checkedList.map(({ id, name }) => (
                    <div key={id}>
                        <input {...register("format", { required: true })}
                            type="radio"
                            name="format"
                            value={name}
                            id={id} 
                            className="visually-hidden crop-template-input"
                            defaultChecked={id === 'rect_16_9'}
                        />
                        <label htmlFor={id} className="crop-template-label">
                            {name}
                        </label>
                    </div>
            ))}
            </div>
            <input className="calibrate__btn" value="Сохранить" type="submit" />
        </form>
    )
}

CropImgSetting.propTypes = {}

export default CropImgSetting