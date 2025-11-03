// Datos de calorías por porción (100g)
const carnes = {
  pollo: { asado: 1.9, frito: 2.6, cocido: 1.65 },
  res: { asado: 2.5, frito: 3.5, cocido: 2.0 },
  pescado: { asado: 1.2, frito: 2.0, cocido: 1.0 },
  cerdo: { asado: 2.7, frito: 3.8, cocido: 2.2 }
};

const frutas = {
  manzana: 0.57,
  banana: 0.89,
  naranja: 0.47,
  fresa: 0.33
};

const verduras = {
  zanahoria: { cruda: 0.41, cocida: 0.35 },
  brócoli: { cruda: 0.34, cocida: 0.35 },
  espinaca: { cruda: 0.23, cocida: 0.23 },
  calabaza: { cruda: 0.26, cocida: 0.20 }
};

const bebidas = {
  agua: 0,
  "jugo-naranja": 0.45,
  "jugo-manzana": 0.46,
  refresco: 0.42,
  leche: 0.42,
  "te-sin-azucar": 0.01
};

// Variable global para acumular calorías
let caloriasTotales = 0;

// Función para calcular calorías de carnes
function calcularCalorias() {
  const carne = document.getElementById('carne').value;
  const preparacion = document.getElementById('preparacion').value;
  const cantidad = parseFloat(document.getElementById('cantidad').value);
  
  if (!cantidad || cantidad <= 0) {
    document.getElementById('resultado').textContent = '⚠️ Por favor ingresa una cantidad válida.';
    return;
  }
  
  const caloriasPorcion = carnes[carne][preparacion];
  const caloriasCalculadas = caloriasPorcion * cantidad * 100;
  caloriasTotales += caloriasCalculadas;
  
  document.getElementById('resultado').innerHTML = `
    <strong>Resultado:</strong><br>
    ${cantidad} porción(es) de ${carne} ${preparacion} = ${caloriasCalculadas.toFixed(2)} calorías<br>
    <strong>Total acumulado: ${caloriasTotales.toFixed(2)} calorías</strong>
  `;
}

// Función para calcular calorías de frutas
function calcularCaloriasFruta() {
  const fruta = document.getElementById('fruta').value;
  const cantidad = parseFloat(document.getElementById('cantidadFruta').value);
  
  if (!cantidad || cantidad <= 0) {
    document.getElementById('resultadoFruta').textContent = '⚠️ Por favor ingresa una cantidad válida.';
    return;
  }
  
  const caloriasPorcion = frutas[fruta];
  const caloriasCalculadas = caloriasPorcion * cantidad * 100;
  caloriasTotales += caloriasCalculadas;
  
  document.getElementById('resultadoFruta').innerHTML = `
    <strong>Resultado:</strong><br>
    ${cantidad} porción(es) de ${fruta} = ${caloriasCalculadas.toFixed(2)} calorías<br>
    <strong>Total acumulado: ${caloriasTotales.toFixed(2)} calorías</strong>
  `;
}

// Función para calcular calorías de verduras
function calcularCaloriasVerduras() {
  const verdura = document.getElementById('verdura').value;
  const preparacion = document.getElementById('preparacionVerdura').value;
  const cantidad = parseFloat(document.getElementById('cantidadVerdura').value);
  
  if (!cantidad || cantidad <= 0) {
    document.getElementById('resultadoVerdura').textContent = '⚠️ Por favor ingresa una cantidad válida.';
    return;
  }
  
  const caloriasPorcion = verduras[verdura][preparacion];
  const caloriasCalculadas = caloriasPorcion * cantidad * 100;
  caloriasTotales += caloriasCalculadas;
  
  document.getElementById('resultadoVerdura').innerHTML = `
    <strong>Resultado:</strong><br>
    ${cantidad} porción(es) de ${verdura} ${preparacion} = ${caloriasCalculadas.toFixed(2)} calorías<br>
    <strong>Total acumulado: ${caloriasTotales.toFixed(2)} calorías</strong>
  `;
}

// Función para calcular calorías de bebidas
function calcularCaloriasBebidas() {
  const bebida = document.getElementById('bebida').value;
  const cantidad = parseFloat(document.getElementById('cantidadBebida').value);
  
  if (!cantidad || cantidad <= 0) {
    document.getElementById('resultadoBebida').textContent = '⚠️ Por favor ingresa una cantidad válida (en ml).';
    return;
  }
  
  const caloriasPorMl = bebidas[bebida];
  const caloriasCalculadas = caloriasPorMl * cantidad;
  caloriasTotales += caloriasCalculadas;
  
  document.getElementById('resultadoBebida').innerHTML = `
    <strong>Resultado:</strong><br>
    ${cantidad} ml de ${bebida.replace('-', ' ')} = ${caloriasCalculadas.toFixed(2)} calorías<br>
    <strong>Total acumulado: ${caloriasTotales.toFixed(2)} calorías</strong>
  `;
}

// Función para reiniciar el contador
function reiniciarContador() {
  caloriasTotales = 0;
  document.getElementById('resultado').textContent = '* El contador ha sido reiniciado.';
  document.getElementById('resultadoFruta').textContent = '* El contador ha sido reiniciado.';
  document.getElementById('resultadoVerdura').textContent = '* El contador ha sido reiniciado.';
  document.getElementById('resultadoBebida').textContent = '* El contador ha sido reiniciado.';
  
  // Limpiar inputs
  document.getElementById('cantidad').value = '';
  document.getElementById('cantidadFruta').value = '';
  document.getElementById('cantidadVerdura').value = '';
  document.getElementById('cantidadBebida').value = '';
}
// evento para el botón
function calcularIMC() {
  let peso = parseFloat(document.getElementById("peso").value);
  let estatura = parseFloat(document.getElementById("estatura").value);

  if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
    document.getElementById("resultadoIMC").innerHTML =
      "⚠️ Ingresa valores válidos para peso y estatura.";
    return;
  }

  let imc = peso / (estatura * estatura);
  let estado = "";

  if (imc < 18.5) estado = "Bajo peso";
  else if (imc < 24.9) estado = "Peso normal";
  else if (imc < 29.9) estado = "Sobrepeso";
  else estado = "Obesidad";

  document.getElementById("resultadoIMC").innerHTML =
    `<strong>Tu IMC es:</strong> ${imc.toFixed(2)} → ${estado}`;
}