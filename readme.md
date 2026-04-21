# 📧 Maquetador de Plantillas de Email

<p align="center">
  <img src="https://react.email/_next/image?url=%2Fbrand%2Flogo.png&w=128&q=75" alt="React Email Logo" width="200px">
</p>

<p align="center">
  <strong>Crea plantillas de email profesionales y responsivas con React.</strong><br />
  Una base sólida y personalizable para tus comunicaciones por correo electrónico.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/React_Email-000000?style=for-the-badge&logo=react&logoColor=white" alt="React Email">
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License MIT">
</p>

---

## 🚀 Inicio Rápido

Obtén una vista previa en vivo directamente en tu navegador sin necesidad de enviar correos reales durante el desarrollo.

1.  **Instalar dependencias:**
    ```bash
    npm install
    # o
    yarn install
    ```

2.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    # o
    yarn dev
    ```

3.  **Ver el resultado:**
    Abre [localhost:3000](http://localhost:3000) en tu navegador.

---

## ✨ Características Principales

- 📱 **Diseño Responsivo**: Plantillas que se ven bien en cualquier dispositivo.
- 🧩 **Componentes Reutilizables**: Biblioteca de componentes listos para usar.
- ⚡ **Preview en Tiempo Real**: Edita y mira los cambios instantáneamente.
- 🛠️ **Fácil de Personalizar**: Estructura modular basada en componentes de React.

---

## 🏗️ Componentes Personalizados

Este proyecto incluye componentes reutilizables en la carpeta `components/` para garantizar consistencia.

### 📦 Estructura Base

#### `BodyStructure`
Proporciona la estructura HTML esencial.
- **Props:**
  - `previewText`: Texto que se muestra en la preview del email.
  - `children`: Contenido del email.

---

### 🎨 Diseño y Layout

#### `EmailHeader`
Header con soporte para logo y fondos.
- **Props principales:** `logoSrc`, `backgroundImage`, `backgroundColor`, `padding`.

#### `OneColumnText`
Sección de texto de una sola columna.
- **Props principales:** `textAlign`, `columnWidth`, `sectionBackgroundColor`.

#### `TwoColumnsTextImg`
Layout híbrido de imagen y texto.
- **Props principales:** `imageSrc`, `imagePosition` (left/right), `imageWidth`.

#### `TwoColumnsText`
Layout de dos columnas de texto.
- **Props principales:** `column1Content`, `column2Content`, `column1Position`.

#### `EmailFooter`
Footer con logos de marca y enlaces.
- **Props principales:** `logos` (array de objetos), `backgroundColor`.

---

## 📝 Ejemplo de Uso

```tsx
import { BodyStructure, EmailHeader, EmailFooter, OneColumnText, TwoColumnsTextImg } from './components';

export default function DemoEmail() {
  return (
    <BodyStructure previewText="Actualización Importante">
      <EmailHeader
        logoSrc="https://example.com/logo.png"
        backgroundImage="https://example.com/background.jpg"
      />

      <OneColumnText textAlign="center">
        <h1>¡Hola!</h1>
        <p>Tenemos novedades emocionantes para compartir contigo.</p>
      </OneColumnText>

      <TwoColumnsTextImg
        imageSrc="https://example.com/feature.png"
        imageAlt="Nueva característica"
        imagePosition="right"
      >
        <h2>Nuevas Funciones</h2>
        <p>Descubre todo lo que hemos añadido este mes...</p>
      </TwoColumnsTextImg>

      <EmailFooter
        logos={[
          { src: 'https://example.com/logo1.png', alt: 'Empresa', href: 'https://example.com/' }
        ]}
      />
    </BodyStructure>
  );
}
```

---

## 📂 Estructura del Proyecto

```text
├── components/       # Componentes visuales reutilizables
├── emails/           # Plantillas de email (archivos .tsx)
│   └── static/       # Imágenes y assets estáticos
├── package.json      # Dependencias y scripts
└── readme.md         # Documentación (¡Estás aquí!)
```

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo para más detalles.

---

<p align="center">Hecho con ❤️ para desarrolladores de emails</p>
