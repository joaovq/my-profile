'use client'

import React, { ChangeEvent, useTransition } from 'react'
import styled from 'styled-components'
import { usePathname, useRouter } from '@/navigation'

const Select = styled.select`
    border: .1px solid rgb(202, 202, 202);
    border-radius: 10px;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const LabelContainer = styled.label`
    display: flex;
    flex-direction: row;
    gap: .5rem;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    font-size: small;
`

type Props = {
    children: React.ReactNode;
    defaultValue: string;
    label: string;
};

export default function LocaleSwitcherSelect({
    children,
    defaultValue,
    label
}: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;
        startTransition(() => router.replace(pathname, { locale: nextLocale }));
    }

    return (
        <LabelContainer>
            <p>{label}</p>
            <Select
                defaultValue={defaultValue}
                disabled={isPending}
                onChange={onSelectChange}
            >
                {children}
            </Select>
        </LabelContainer>
    );
}