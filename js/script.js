// array de objetos con los datos de las provincias
// y los hospitales por prvincia
const hospitalesPorProvincia = {
    Castellón: [
      { nombre: "Hospital Provincial de Castellón", id: "Hospital Provincial de Castellón" },
      { nombre: "Hospital General Universitario de Castellón", id: "Hospital General Universitario de Castellón" },
      { nombre: "Hospital Universitario de La Plana", id: "Hospital Universitario de La Plana" },
      { nombre: "Hospital la Magdalena", id: "Hospital la Magdalena" },
    ],
    Valencia: [
      { nombre: "Hospital Clínico Universitario de Valencia", id: "Hospital Clínico Universitario de Valencia" },
      { nombre: "Hospital Universitario y Politécnico La Fe", id: "Hospital Universitario y Politécnico La Fe" },
      { nombre: "IMED Valencia", id: "IMED Valencia" },
      { nombre: "Hospital Malvarrosa", id: "Hospital Malvarrosa" },
    ],
    Alicante: [
        { nombre: "Hospital Vithas Medimar", id: "Hospital Vithas Medimar" },
        { nombre: "Hospital Vithas Alicante", id: "Hospital Vithas Alicante" },
        { nombre: "Hospital General Universitario de Alicante", id: "Hospital General Universitario de Alicante" },
      ],
  };
// Funcion para cargar la lista de hospitales segun la provincia seleccionada
function cargarHospitales() {
    const provinciaSelect = document.getElementById("provincia");
    const hospitalSelect = document.getElementById("hospital");
    // Obtener el valor de la provincia seleccionada
    const provinciaSeleccionada = provinciaSelect.value;
    // Limpiar las opciones del select de hospitales
    hospitalSelect.innerHTML = "<option value=''>Selecciona un hospital</option>";
    // Verificar si se seleccionó una provincia válida
    if (provinciaSeleccionada) {
      // Obtener los hospitales correspondientes a la provincia seleccionada
      const hospitales = hospitalesPorProvincia[provinciaSeleccionada];
      // Agregar las opciones al select de hospitales
      hospitales.forEach((hospital) => {
        const option = document.createElement("option");
        option.value = hospital.id;
        option.textContent = hospital.nombre;
        hospitalSelect.appendChild(option);
      });
    }
  }

// Obtener referencias a los elementos del formulario y la tabla
const formulario = document.getElementById("formulario");
const nombreInput = document.getElementById("nombre");
const telefonoInput = document.getElementById("telefono");
const provinciaSelect = document.getElementById("provincia");
const hospitalSelect = document.getElementById("hospital");
const tablaPacientes = document.getElementById("bodyTabla");

// Agregar un evento de envío al formulario
formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el comportamiento de envío predeterminado
  // Obtener los valores de los campos del formulario
  const nombre = nombreInput.value;
  const telefono = telefonoInput.value;
  const provincia = provinciaSelect.value;
  const hospital = hospitalSelect.value;
  // Crear una nueva fila en la tabla con los valores ingresados
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${provincia}</td>
    <td>${hospital}</td>
    <td>${nombre}</td>
    <td>${telefono}</td>
    <td><button onclick="eliminarFila(this)">Eliminar</button></td>
    <td><button onclick="marcarFila(this)">Marcar</button></td>
  `;
  // Agregar la fila a la tabla
  tablaPacientes.appendChild(fila);
  // Limpiar los valores del formulario
  nombreInput.value = "";
  telefonoInput.value = "";
  provinciaSelect.value = "";
  hospitalSelect.value = "";

  const recuentoElemento = document.getElementById("recuento");
  recuentoElemento.textContent = `Total: ${tablaPacientes.children.length}`;
});

// Función para eliminar una fila de la tabla
function eliminarFila(botonEliminar) {
  const fila = botonEliminar.parentNode.parentNode; // Obtener la fila que contiene el botón
  tablaPacientes.removeChild(fila); // Eliminar la fila de la tabla
  const recuentoElemento = document.getElementById("recuento");
  recuentoElemento.textContent = `Total: ${tablaPacientes.children.length}`;
}

function marcarFila(botonColor) {
    const fila = botonColor.parentNode.parentNode; // Obtener la fila que contiene el botón
    // Obtener el color actual de fondo de la fila
    const colorActual = fila.style.backgroundColor;
    // Si la fila tiene el color original, cambiarlo a otro color
    if (colorActual === "white" || colorActual !== "orange") {
      fila.style.backgroundColor = "orange";
    } else { // Si la fila ya tiene un color distinto, restaurar el color original
      fila.style.backgroundColor = "white";
    }
  }
