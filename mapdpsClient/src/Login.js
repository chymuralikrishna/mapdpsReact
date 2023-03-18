import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { Panel } from 'primereact/panel';

function Login() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.value });
    };

    const formik = useFormik({
        initialValues: {
            value: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.value) {
                errors.value = 'Password is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (<div className="flex align-items-center justify-content-center" >
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
              
            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                </span>
                <InputText placeholder="Username" />
            </div>
            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                    <i className="pi pi-lock"></i>
                </span>
                <Toast ref={toast} />
                <Password
                    inputId="in_value"
                    placeholder="Password" 
                    name="value"
                    rows={5}
                    cols={30}
                    className={classNames({ 'p-invalid': isFormFieldInvalid('value') })}
                    value={formik.values.value}
                    feedback={false}
                    onChange={(e) => {
                        formik.setFieldValue('value', e.target.value);
                    }}
                />
                </div>
                {getFormErrorMessage('value')}
                <Button label="Submit" type="submit" icon="pi pi-check" />
              
            </form>
            </div>
    )
}

export default Login;
