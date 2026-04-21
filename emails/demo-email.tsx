import { BodyStructure, EmailHeader, EmailFooter, OneColumnText, TwoColumnsTextImg } from '../components';

export default function DemoEmail() {
    return (
        <BodyStructure fontFamily="HelveticaNeue,Helvetica,Arial,sans-serif" previewText="Actualización Importante">
            <EmailHeader
                logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Dragon_Ball_Z_logo.svg/1280px-Dragon_Ball_Z_logo.svg.png"
                backgroundColor="#f5f5f5"
                logoAlt="Dragon Ball Z"
                logoWidth="350px"
                logoHeight="auto"
                paddingBottom="2em"
                paddingTop="2em"
                paddingRight="1em"
                paddingLeft="1em"
            />

            <OneColumnText textAlign="center">
                <h1>¡Hola!</h1>
                <p>Tenemos novedades emocionantes para compartir contigo.</p>
            </OneColumnText>

            <TwoColumnsTextImg
                imageSrc="https://i.blogs.es/ea7bf7/goku-dragon-ball-2024/1200_800.webp"
                imageAlt="Nueva característica"
                imagePosition="left"
                imageColumnWidth="50%"
                textColumnWidth="50%"
                sectionPadding="1em"
                imageWidth="100%"
                textColumnPadding="1em"
            >
                <h2>Nuevas Funciones</h2>
                <p>Descubre todo lo que hemos añadido este mes...</p>
            </TwoColumnsTextImg>

            <EmailFooter
                logos={[
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Dragon_Ball_anime_logo.png', alt: 'Dragon Ball Z', href: 'https://example.com/' },
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Dragon_Ball_Z_logo.svg/1280px-Dragon_Ball_Z_logo.svg.png', alt: 'Dragon Ball', href: 'https://example.com/' },
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Dragon_Ball_GT_logo.png/1280px-Dragon_Ball_GT_logo.png', alt: 'Dragon Ball GT', href: 'https://example.com/' },
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Dragon_Ball_Super.png', alt: 'Dragon Ball Super', href: 'https://example.com/' },
                ]}
                logoHeight= "2.5rem"
                marginRight=".5em"
                backgroundColor='#f5f5f5'
                paddingBottom="2em"
                paddingTop="2em"
                paddingRight="1em"
                paddingLeft="1em"
            />
        </BodyStructure>
    );
}