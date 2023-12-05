'use client'
import { useTranslations } from 'next-intl'
import React, { FormEvent, useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    useEffect(() => emailjs.init(
        process.env.NEXT_PUBLIC_API_KEY_EMAIL_JS == null ? "" : process.env.NEXT_PUBLIC_API_KEY_EMAIL_JS
    ), []);
    const formRef = useRef<HTMLFormElement>(null)
    const emailRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const [loading, setLoading] = useState(false);
    // TODO transfer to hook
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const serviceId = process.env.NEXT_PUBLIC_SERVICEID_EMAIL_JS == null ? "" : process.env.NEXT_PUBLIC_SERVICEID_EMAIL_JS;
        const templateId = process.env.NEXT_PUBLIC_TEMPLATEID_EMAIL_JS == null ? "" : process.env.NEXT_PUBLIC_TEMPLATEID_EMAIL_JS;
        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                to_name: "João Vítor",
                from_name: nameRef.current?.value,
                name: nameRef.current?.value,
                recipient: emailRef.current?.value,
                message: messageRef.current?.value,
                description: descriptionRef.current?.value,
            });
            toast.success(t("successMessage"))
            formRef.current?.reset()
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

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
            <Form method="post" ref={formRef} onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="contactEmail">{t("name.label")}</label>
                    <div className='boxInput'>
                        <input type="text" ref={nameRef} id='name' name='name' className={`inputText`} placeholder='Ex: John e. Doe' required />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="contactEmail">Email</label>
                    <div className='boxInput'>
                        <input ref={emailRef} type="email" id='contactEmail' name='contactEmail' className={`inputText`} placeholder='@email.com' required />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="message">{t("message.label")}</label>
                    <div className="boxInput">
                        <input type="text" id='message' ref={messageRef} name='message' className={`inputText`} placeholder={t("message.placeholder")} required />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="description">{t("description.label")}</label>
                    <div className="boxInput">
                        <textarea id='description' ref={descriptionRef} name='description' className={`inputText`} placeholder={t("description.placeholder")} />
                    </div>
                </div>
                <button id='btnSend' type='submit' disabled={loading}>{loading? t("loadingMessage"): t("sendButton")}</button>
            </Form>
        </>
    )
}

export default ContactForm
