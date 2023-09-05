# Sistema Clínico

aplicación web mediante estándares (HTML, CSS y
Javascript) que permita crear y gestionar listas de pacientes por provincia y hospital. Los requisitos de la
aplicación son:


## Requisitos

- La aplicación gestionará un conjunto de pacientes, cada uno de una provincia y un hospital.
- Existirá un catálogo de provincias. El catálogo será una colección (array de objetos) con los datos de las provincias.
- Existirá un catálogo de hospitales. El catálogo será una colección con los datos de los hospitales. Cada hospital pertenecerá a una provincia
- Cada elemento de la lista de pacientes tendrá:
    - Provincia
    - Hospital  
    - Nombre del paciente
    - Teléfono
    - Botón de eliminar esa entrada de la lista
    - Botón para marcar (destacar) esa entrada en la lista

- Para añadir una entrada a la lista:
    - Existirá un campo de entrada (INPUT) para escribir el nombre del paciente.
    - Existirá un campo de entrada (INPUT) para escribir el teléfono del paciente.
    - Existirá un campo desplegable (SELECT) que permitirá la selección de la provincia.
    - Existirá un campo desplegable (SELECT) que permitirá la selección del hospital (los hospitales se filtrarán por la provincia seleccionada).
    - Los cuatro campos son obligatorios
    - Existirá un botón que permitirá la creación de una nueva entrada en la lista.
    - Al añadir una entrada, los campos nombre y teléfono de paciente se vaciarán.
- Para eliminar un paciente
    - Existirá un botón para eliminar por cada paciente (cada fila).
    - Al pulsar el botón se eliminará el paciente de esa fila
- Para marcar un paciente
    - Existirá un botón para marcar cada fila
    - Al pulsarlo se marcará de color la fila, si no estaba marcada antes, o se quitará ese color si ya estaba marcada.
- Al final de la lista se mostrará el total de entradas en la lista
- El total se modificará automáticamente:
    - Cuando se inserte un nuevo registro
    - Cuando se elimine un registro de la lista
