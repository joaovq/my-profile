'use client'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'

const Form = styled.form<{ isFull: boolean }>`
    @keyframes sticky {
        0% {
            width: 0%;
        }
        100% {
            width: 100%;
        }
    }
    display: flex;
    align-items: center;
    border: .6px solid gray;
    border-radius: 10px;
    padding: 10px;
    gap: .8rem;
    label {
        svg {
            font-size: medium;
        }
    }
    #search {
        display: ${props => props.isFull ? "flex" : "none"};
        border: none;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        outline: none;
        font-size: medium;
        animation: sticky .3s alternate ease-in-out both;
    }
`

const SearchForm = () => {
    const t = useTranslations('SearchForm')
    const [isFull, setIsFull] = useState(false)
    return (
        <Form isFull={isFull}>
            <label htmlFor="search" onClick={() => { setIsFull(!isFull) }}><FaSearch /></label>
            <input type="text" name='search' title='search' id='search' placeholder={t('placeholder')} />
        </Form>
    )
}

export default SearchForm