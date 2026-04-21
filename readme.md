# React Email Starter

A live preview right in your browser so you don't need to keep sending real emails during development.

## Getting Started

First, install the dependencies:

`sh
npm install
# or
yarn
`

Then, run the development server:

`sh
npm run dev
# or
yarn dev
`

Open [localhost:3000](http://localhost:3000) with your browser to see the result.

## Componentes Personalizados

Este proyecto incluye componentes reutilizables personalizados para facilitar la creación de plantillas de email consistentes. Todos los componentes están ubicados en la carpeta components/.

### BodyStructure

Componente base que proporciona la estructura HTML esencial para todas las plantillas de email.

**Props:**
- previewText?: string - Texto que se muestra en la preview del email
- children?: React.ReactNode - Contenido del email

**Ejemplo de uso:**
`	sx
import { BodyStructure } from './components/BodyStructure';

export default function MyEmail() {
  return (
    <BodyStructure previewText="Welcome to our platform">
      {/* Email content here */}
    </BodyStructure>
  );
}
`

### EmailHeader

Header con logo y fondo opcional para el inicio de las plantillas.

**Props:**
- logoSrc: string - URL de la imagen del logo
- logoAlt?: string - Texto alternativo del logo
- logoWidth?: string | number - Ancho del logo
- logoHeight?: string | number - Alto del logo
- backgroundImage?: string - URL de imagen de fondo
- backgroundColor?: string - Color de fondo
- paddingTop?, paddingBottom?, paddingLeft?, paddingRight?: string | number - Espaciado

**Ejemplo de uso:**
`	sx
import { EmailHeader } from './components/EmailHeader';

<EmailHeader
  logoSrc="https://example.com/logo.png"
  backgroundImage="https://example.com/background.jpg"
  paddingTop="5rem"
  paddingBottom="5rem"
/>
`

### EmailFooter

Footer con logos de marcas enlazados.

**Props:**
- logos: LogoItem[] - Array de objetos con src, alt y href
- backgroundColor?: string - Color de fondo
- paddingTop?, paddingBottom?, paddingLeft?, paddingRight?: string | number - Espaciado
- logoHeight?: string | number - Alto de los logos
- marginRight?: string | number - Espaciado entre logos

**Ejemplo de uso:**
`	sx
import { EmailFooter } from './components/EmailFooter';

<EmailFooter
  logos={[
    { src: 'https://example.com/logo1.png', alt: 'Company', href: 'https://example.com/' },
    { src: 'https://example.com/logo2.png', alt: 'Division', href: 'https://example.com/division' },
  ]}
  backgroundColor="#00308b"
/>
`

### OneColumnText

Sección de una sola columna para contenido de texto con opciones de alineación.

**Props:**
- children: React.ReactNode - Contenido de texto
- sectionPadding?, sectionBackgroundColor?: string - Estilos de la sección
- columnWidth?: string - Ancho de la columna
- columnPadding?: string | number - Padding de la columna
- 	extAlign?: 'left' | 'center' | 'right' - Alineación del texto

**Ejemplo de uso:**
`	sx
import { OneColumnText } from './components/OneColumnText';

<OneColumnText textAlign="center">
  <h1>Welcome Message</h1>
  <p>This is a centered text section...</p>
</OneColumnText>
`

### TwoColumns

Layout de dos columnas con imagen y texto, permitiendo elegir el lado de la imagen.

**Props:**
- imageSrc: string - URL de la imagen
- imageAlt: string - Texto alternativo
- imagePosition: 'left' | 'right' - Posición de la imagen
- children: React.ReactNode - Contenido de texto
- imageWidth?, imageHeight?: string | number - Dimensiones de la imagen
- sectionPadding?, sectionBackgroundColor?: string - Estilos de la sección
- imageColumnWidth?, textColumnWidth?: string - Ancho de las columnas

**Ejemplo de uso:**
`	sx
import { TwoColumns } from './components/TwoColumns';

<TwoColumns
  imageSrc="https://example.com/image.jpg"
  imageAlt="Product screenshot"
  imagePosition="left"
>
  <h1>Product Update</h1>
  <p>Check out our latest features...</p>
</TwoColumns>
`

### TwoColumnsText

Layout de dos columnas con texto en ambas, permitiendo elegir la posición de la primera columna.

**Props:**
- column1Content: React.ReactNode - Contenido de la primera columna
- column2Content: React.ReactNode - Contenido de la segunda columna
- column1Position: 'left' | 'right' - Posición de la primera columna
- sectionPadding?, sectionBackgroundColor?: string - Estilos de la sección
- column1Width?, column2Width?: string - Ancho de las columnas
- column1Padding?, column2Padding?: string | number - Padding de las columnas

**Ejemplo de uso:**
`	sx
import { TwoColumnsText } from './components/TwoColumnsText';

<TwoColumnsText
  column1Content={<div><h2>Columna 1</h2><p>Contenido de la primera columna</p></div>}
  column2Content={<div><h2>Columna 2</h2><p>Contenido de la segunda columna</p></div>}
  column1Position="left"
/>
`

### Plantilla Completa de Ejemplo

Aquí tienes un ejemplo de cómo combinar estos componentes para crear una plantilla completa:

`	sx
import { BodyStructure, EmailHeader, EmailFooter, OneColumnText, TwoColumns, TwoColumnsText } from './components/[component]';

export default function DemoEmail() {
  return (
    <BodyStructure previewText="Important Update">
      <EmailHeader
        logoSrc="https://example.com/logo.png"
        backgroundImage="https://example.com/background.jpg"
      />

      <OneColumnText textAlign="center">
        <h1>Platform Update</h1>
        <p>Hello! We're excited to announce some important updates to our platform...</p>
      </OneColumnText>

      <TwoColumns
        imageSrc="https://example.com/screenshot.png"
        imageAlt="Product screenshot"
        imagePosition="right"
      >
        <h2>New Features</h2>
        <p>Check out our latest features...</p>
      </TwoColumns>

      <TwoColumnsText
        column1Content={<div><h2>Features</h2><ul><li>New dashboard</li><li>Enhanced security</li></ul></div>}
        column2Content={<div><h2>Benefits</h2><p>These updates will improve your experience...</p></div>}
        column1Position="left"
      />

      <EmailFooter
        logos={[
          { src: 'https://example.com/logo1.png', alt: 'Company', href: 'https://example.com/' },
          { src: 'https://example.com/logo2.png', alt: 'Division', href: 'https://example.com/division' },
        ]}
      />
    </BodyStructure>
  );
}
`

## License

MIT License
