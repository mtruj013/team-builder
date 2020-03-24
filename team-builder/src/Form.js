import React from 'react'


function Form(props) {
    return (
        <form onSubmit={props.onFormSubmit}>
            <label> Name
                <input
                    onChange={props.onInputChange}
                    value={props.formValues.name}
                    name='name'
                    type='text'
                />
            </label><br/>

            <label> Email
                <input
                    onChange={props.onInputChange}
                    value={props.formValues.email}
                    name='email'
                    type='email'
                />
            </label><br/>

            <label> Role
                <input
                    onChange={props.onInputChange}
                    value={props.formValues.role}
                    name='role'
                    type='text'
                />
            </label>

            <input type='submit'/>
        </form>
    );
}

export default Form;