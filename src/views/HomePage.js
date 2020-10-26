import React, { Fragment, useState } from 'react';
import Form from '../components/form/Form';
import Input from '../components/input/Input';

const HomePage = () => {

    const [ persona, setPerson ] =useState({
        name:"",
        lastname:"",
        email:""
    })

    const handleChange = (event) =>{
        setPerson({
            ...persona,
            [event.target.name]:event.target.value
        });

        console.log(persona)
     }

    return (
        <Fragment>
            <h1>
                HomePage
            </h1>
            <Input key={1} name="name" value={persona.name} label="Nombre" placeholder="Ingrese nombre" callback={handleChange}></Input>
            <Input key={2} name="lastname" value={persona.lastname} label="Apellido" placeholder="Ingrese apellido" callback={handleChange}></Input>
            <Input key={3} name="email" value={persona.email} label="Correo" placeholder="Ingrese email" callback={handleChange}></Input>

        </Fragment>

    );
}

export default HomePage;