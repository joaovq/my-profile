import { Inter } from 'next/font/google'
import React, { FormEvent } from 'react'
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    align-items: center;
    margin: 5rem 0rem;
    .inputText {
        padding: 12px 15px;
        border: 1px solid #CFCFCF;
        background: #FFF;
        outline: none;
    }
    #btnSend {
        background: #1e1e1e;
        border: none;
        color: #FFF;
        padding: 8px 10px;
        height: 100%;
        cursor: pointer;
        font-size: large;
        &:hover {
            opacity: .8;
        }
    }
    .emailField {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: .8rem;
    }
    .boxInput {
        display: flex;
        align-items: center;
        gap: .5rem;
    }
    #contactEmail {
        width: 100%;
        max-width: 300px;
    }
`

const ContactForm = () => {

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
    }

    return (
        <>
            <Form method="post" onSubmit={handleSubmit}>
                <div className="emailField">
                    <label htmlFor="contactEmail">Email</label>
                    <div className='boxInput'>
                        <input type="text" id='contactEmail' name='contactEmail' className={`inputText`} placeholder='@email.com' />
                        <button id='btnSend' type='submit'>Enviar</button>
                    </div>
                </div>
            </Form>
        </>
    )
}

export default ContactForm
