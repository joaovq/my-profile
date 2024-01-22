'use client'
import { useTranslations } from 'next-intl'
import React, { useRef } from 'react'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod'
import { useSendEmailContact } from './contactForm.hook';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { userContactEmailFormData, userContactForm } from './contact.schema';

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
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<userContactEmailFormData>(
        {
            resolver: zodResolver(userContactForm)
        }
    )
    const formRef = useRef<HTMLFormElement>(null)

    const { loading, handleSendEmail } = useSendEmailContact(
        () => {
            toast.success(t("successMessage"))
            reset()
        }
    )

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Form method="post" ref={formRef} onSubmit={handleSubmit(handleSendEmail)}>
                <div className="field">
                    <label htmlFor="contactEmail">{t("name.label")}</label>
                    <div className='boxInput'>
                        <input type="text" id='name' className={`inputText`} placeholder='Ex: John e. Doe' required {...register("name")} />
                    </div>
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <div className='boxInput'>
                        <input type="email" id='email' className={`inputText`} placeholder='@email.com' required {...register("email")} />
                    </div>
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div className="field">
                    <label htmlFor="message">{t("message.label")}</label>
                    <div className="boxInput">
                        <input type="text" id='message' className={`inputText`} placeholder={t("message.placeholder")} required {...register("message")} />
                    </div>
                    {errors.message && <span>{errors.message.message}</span>}
                </div>
                <div className="field">
                    <label htmlFor="description">{t("description.label")}</label>
                    <div className="boxInput">
                        <textarea id='description' className={`inputText`} placeholder={t("description.placeholder")} {...register("description")} />
                    </div>
                    {errors.description && <span>{errors.description.message}</span>}
                </div>
                <button id='btnSend' type='submit' disabled={loading}>{loading ? t("loadingMessage") : t("sendButton")}</button>
            </Form>
        </>
    )
}

export default ContactForm
