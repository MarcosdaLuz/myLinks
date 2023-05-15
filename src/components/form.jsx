import React from "react";
import script from './script.js'
import {useForm} from 'react-hook-form'
import './style.css'
import validator from "validator";

export default ()=>{
const {register, handleSubmit, formState :{errors}} = useForm()
const submit = (data) =>{
    
}

    return(
        // validate: (value) => { }
            <div>
                <input className={errors?.url &&'error'} type="text" 
                {...register('url',{required: true,validate:(value) =>{
                    const str = value.slice((value.indexOf(',')) +1, value.length)
                    return validator.isURL(str) && value.includes(',') ?  true : false
                } })}
                placeholder="URL Name,http://" onKeyDown={(key) => {if(key.key === "Enter"){ handleSubmit(submit)()}}}/>

                {errors?.url?.type == 'required' && <p>Campo requirido</p>}
                {errors?.url?.type == 'validate'&& <p>Invalido, Requer formato URL Name,http://</p>}
            </div>
        
    )

}
