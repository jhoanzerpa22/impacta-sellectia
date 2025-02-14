# Proyecto Impacta!

Este proyecto es una página única construida con HTML, JavaScript (usando las librerías Swiper y AOS) y SCSS para los estilos.

## Estructura del proyecto

- `index.html`: Archivo principal HTML que contiene la estructura de la página.
- `styles/`: Carpeta que contiene los archivos SCSS.
  - `style.scss`: Archivo principal SCSS que importa los demás archivos.
  - `_variables.scss`: Archivo SCSS para definir variables globales (colores, fuentes, etc.).
  - `_swiper.scss`: Archivo SCSS para estilos específicos del slider Swiper.
  - `_layout.scss`: Archivo SCSS para estilos específicos en la estructura principal del sitio (header, footer, sidebar, etc.).
  - `_base.scss`: Archivo SCSS para estilos específicos básicos para elementos HTML (body, headings, párrafos, etc.)
- `js/`: Carpeta que contiene el archivo JavaScript principal.
  - `script.js`: Archivo JavaScript que contiene la lógica de la página, la inicialización de Swiper y AOS.
- `assets/`: Carpeta que contiene los recursos estáticos del proyecto.
  - `portada/`: Carpeta para las imágenes del slider.
  - `logos/`: Carpeta para los logos de los clientes del proyecto.
  - `iconos/`: Carpeta para los iconos svg de los servicios del proyecto.

## Decisiones de diseño

- **Diseño responsive:** Se ha utilizado un diseño responsive para asegurar que la página se vea correctamente en diferentes dispositivos (escritorio, móvil, tablet).
- **Librería Swiper:** Se ha utilizado Swiper para crear un slider de imágenes en la sección principal de la página.
- **Librería AOS (Animate On Scroll):** Se ha utilizado AOS para agregar animaciones a los elementos a medida que el usuario hace scroll.
- **SCSS:** Se ha utilizado SCSS como preprocesador de CSS para mejorar la organización y el mantenimiento de los estilos. Se han definido variables, mixins y estilos específicos para el slider Swiper.
- **JavaScript modular:** El código JavaScript se ha organizado en un archivo separado para mejorar la legibilidad y el mantenimiento. Se ha utilizado la sintaxis de módulos ES6 para importar y exportar funciones.
- **Optimización de recursos:** Se han optimizado las imágenes para reducir el tamaño de los archivos y mejorar el tiempo de carga de la página.

## Instalación y uso

1. Clona el repositorio: `git clone https://github.com/jhoanzerpa22/impacta-sellectia.git`
2. Abre el archivo `index.html` en tu navegador.

## Créditos

- Swiper: [https://swiperjs.com/](https://swiperjs.com/)
- AOS: [https://michalsnik.github.io/aos/](https://michalsnik.github.io/aos/)