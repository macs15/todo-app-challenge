# To-Do app challenge
> Puedes hacer ***fork*** de este *repositorio*, modificarlo e usarlo libremente.

> *Puedes ver el Sandbox del proyecto en este [link](https://codesandbox.io/s/crazy-wiles-rz5qw)*

Una aplicación de **tareas por hacer** con un *CRUD* (*leer, crear, modificar y borrar, respectivamente* ) sencillo sin base de datos por lo que se implementó el uso de **LocalStorage** para administrar las tareas.


## Características

- Implementación de ***Dark/Light mode***
- *Responsivo* - Carga dinámica de imágenes para el *background* según el modo (*Dark/Light*) y, también, para pantallas más pequeñas.
- Filtrado por estado de las tareas: *completadas* o *finalizadas*

## Tools y Tecnologías usados

- El proyecto está hecho con **React**
- Gestor de tareas en **LocalStorage**
- Para los estilos de la aplicación se usó **Tailwind CSS** y **Styled components**
- Como no se trabajó con una base de datos (*que proveen ID*) se utilizó **uuid** para generar *ID's* dinámicos para las *tareas*