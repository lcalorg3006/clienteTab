Adaptacion de los componentes a los requerimientos específicos de la aplicación
Creación de un menú intuitivo y funcional
 Implementación de navegación fluida entre pantallas
  Integración correcta de datos externos en la aplicación
   Manejo eficiente de la asincronía y errores en la carga de datos
    Implementación de componentes que se adapten a los datos recibidos.
    Correcta actualización de los componentes al recibir nueva información.//reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
Interfaz computer:
 id: string - Identificador único de la computadora.
classroomId: string - Identificador del aula donde se encuentra la computadora.
studentName: string - Nombre del estudiante que utiliza la computadora.
grade: string - Grado escolar del estudiante.
tipo rootStackParamList:
Este tipo define las rutas de navegación dentro de la aplicación, especificando las pantallas disponibles y sus parámetros.
Pantallas:
MainMenu: Pantalla principal de la aplicación, no requiere parámetros.
ComputerManagement: Pantalla para gestionar computadoras, no requiere parámetros.
SearchComputer: Pantalla para buscar computadoras, no requiere parámetros.
 Componente MainMenu
 Este componente representa el menú principal de la aplicación. Desde aquí, los usuarios pueden navegar a diferentes secciones de la aplicación, como la gestión de computadoras y la búsqueda de computadoras.
 Puede recibir propiedades como funciones de navegación y datos del usuario.
Componente ComputerManagement
Este componente permite a los usuarios gestionar las computadoras, incluyendo la adición, edición y eliminación de registros de computadoras.
Puede recibir funciones para manejar la lógica de gestión de computadoras y datos de computadoras.
 Componente SearchComputer
 Este componente permite a los usuarios buscar computadoras en el sistema. Puede incluir un formulario de búsqueda y mostrar los resultados.
 Puede recibir funciones para manejar la búsqueda y datos de computadoras.
Estructura de la Store
Estado Inicial: Definimos el estado inicial que contendrá la lista de computadoras.
Acciones: Funciones para agregar, eliminar y buscar computadoras.
