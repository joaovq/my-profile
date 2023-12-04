'use client'
import { useTranslations } from 'next-intl'
import React, { FormEvent } from 'react'
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 300px;
    .inputText {
        padding: 12px 15px;
        border: 1px solid #CFCFCF;
        background: #FFF;
        outline: none;
        width: 100%;
        max-width: 300px;
    }
    #btnSend {
        background: #1e1e1e;
        border: none;
        color: #FFF;
        padding: 8px 10px;
        height: 100%;
        max-height: 50px;
        cursor: pointer;
        font-size: large;
        width: 100%;
        &:hover {
            opacity: .8;
        }
    }
    .field {
        display: flex;
        flex-direction: column;
        gap: .8rem;
        textarea {
            max-height: 90px;
        }
    }
    .boxInput {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
    @media (max-width: 400px) {
        .boxInput {
            flex-wrap: wrap;
            input, textarea {
                width: 100%;
            }
            button {
                width: 100%;
            }
        }
    }
`

const ContactForm = () => {
    const t = useTranslations("ContactForm")

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
    }

    return (
        <>
            <Form method="post" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="contactEmail">Email</label>
                    <div className='boxInput'>
                        <input type="text" id='contactEmail' name='contactEmail' className={`inputText`} placeholder='@email.com' />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <div className="boxInput">
                        <input type="text" id='message' name='message' className={`inputText`} placeholder='Describe the reason for contact' />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="message">Description</label>
                    <div className="boxInput">
                        <textarea id='description' name='description' className={`inputText`} placeholder="What's your proposal?" />
                    </div>
                </div>
                <button id='btnSend' type='submit'>{t("sendButton")}</button>
            </Form>
        </>
    )
}

export default ContactForm
