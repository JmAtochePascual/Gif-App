# GIFT APP

Gif App es una aplicación web que permite buscar y visualizar gifs animados a través de una interfaz moderna y responsiva. Utiliza React con TypeScript para una experiencia fluida y escalable, consumiendo datos desde una API externa. Cada búsqueda se organiza en secciones que agrupan los resultados, y se incluyen mensajes visuales y estados de carga para mejorar la experiencia del usuario.

## Características

- Búsqueda dinámica de gifs.
- Visualización en secciones según el término de búsqueda.
- Manejo de estado de carga (Loading...) durante la búsqueda.
- Código modular con hooks personalizados y tipado estricto con TypeScript.

## Tecnologías

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

- **React:** Se utiliza como biblioteca principal para la construcción de interfaces de usuario basadas en componentes reutilizables y declarativos.

- **TypeScript:** Se emplea para proporcionar un sistema de tipado estático sobre JavaScript, lo que permite detectar errores en tiempo de desarrollo y mejorar la calidad del código.

- **Vite:** Se utiliza como herramienta de construcción y servidor de desarrollo, destacando por su velocidad y eficiencia en la recarga en caliente y la compilación de proyectos modernos.

- **Tailwind CSS:** Se emplea para diseñar la interfaz de usuario mediante clases utilitarias, permitiendo un desarrollo rápido, consistente y altamente personalizable del estilo visual.

- **API de Giphy (o servicio equivalente):** Se utiliza como proveedor externo para la obtención de gifs animados, permitiendo mostrar resultados dinámicos basados en la búsqueda del usuario.

- **ESLint y Prettier (si están presentes):** Se emplean para mantener un código limpio, estandarizado y libre de errores comunes mediante análisis estático y formateo automático.

## Estructura del Proyecto

- **components/**: Se emplea para definir los componentes visuales reutilizables que conforman la interfaz del usuario, como formularios y listas de gifs.

- **hooks/**: Se emplea para centralizar y reutilizar lógica de estado y efectos secundarios mediante hooks personalizados, como la búsqueda de gifs.

- **mapper/**: Se emplea para transformar los datos provenientes de la API a un formato compatible con los modelos internos de la aplicación.

- **models/**: Se emplea para representar las entidades principales de la aplicación (como `Gift` o `Section`) mediante clases o interfaces.

- **services/**: Se emplea para abstraer la lógica de conexión con APIs externas, como la obtención de gifs desde un servicio externo.

- **types/**: Se emplea para declarar tipos globales de TypeScript y garantizar un desarrollo con tipado estricto y seguro.

- **App.tsx / main.tsx**: Se emplean para estructurar y renderizar la aplicación principal, conectando todos los componentes y lógica.

- **index.css**: Se emplea para definir los estilos globales de la aplicación.

- **.env / .env.template**: Se emplean para manejar configuraciones sensibles o personalizadas mediante variables de entorno.

## Instalación

> Para trabajar con este proyecto, necesitarás tener instalado:
>
> - **Node.js** (versión 14 o superior)

## Uso

Para visualizar el proyecto localmente, sigue estos pasos:

1. Clona este repositorio:

```
git clone https://github.com/JMatochePascual/Todo-App.git
```

2. Navega al directorio del proyecto:

```
cd Todo-App
```

3. Instala las dependencias necesarias:

```
npm install
```

4. Inicia el servidor en modo desarrollo:

```
npm run dev
```

## Contribución

Si deseas contribuir al proyecto, por favor sigue estos pasos en orden:

1. Haz un fork del repositorio

2. Crea una nueva rama para tu funcionalidad:
   ```bash
   git checkout -b feature-name
   ```
3. Realiza y confirma tus cambios:
   ```bash
   git commit -am 'Add new feature'
   ```
4. Sube los cambios a tu repositorio:
   ```bash
   git push origin feature-name
   ```
5. Abre un Pull Request desde tu repositorio hacia el proyecto principal

## Licencia

Este proyecto se encuentra disponible bajo la licencia MIT. Puedes consultar los términos completos [aquí](https://opensource.org/licenses/MIT).

Desarrollado con 💚 por JMCode | © 2025 - Transformando ideas en soluciones digitales.
