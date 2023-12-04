import Image, { StaticImageData } from 'next/image'
import LogoImage from 'public/gif/logo-gif.gif'
import { CSSProperties } from 'styled-components'

type Props = {
    image?: StaticImageData,
    alt?: string,
    style?: CSSProperties
}

const LogoIcon = (
    {
        image = LogoImage,
        alt = 'Logo joaovq',
        style = {
            minWidth: 90,
            maxWidth: 100,
        }
    }: Props) => {
    return (
        <Image
            src={image}
            alt={alt}
            style={{
                width: "100%",
                height: "auto",
                ...style
            }}
        />
    )
}

export default LogoIcon