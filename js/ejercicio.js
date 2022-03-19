function calcularPerimetroCuadrado() {
  let lado = prompt("Ingrese la medida del lado");
  parseInt(lado);
  let perimetro = lado * 4;
  alert(perimetro);
}

function calcularPerimetroRectangulo() {
  let lado1 = prompt("Ingrese la medida del lado 1");
  let lado2 = prompt("Ingrese la medida del lado 2");
  parseInt(lado1);
  parseInt(lado2);
  let perimetro = lado1 * 2 + lado2 * 2;
  alert(perimetro);
}

function calcularAreaTriangulo() {
  let base = prompt("Ingrese la medida de la base");
  let altura = prompt("Ingrese la medida de la altura");
  parseInt(base);
  parseInt(altura);
  let perimetro = (base * altura) / 2;
  alert(perimetro);
}

function calcularAreaCuadrado() {
  let lado = prompt("Ingrese la medida del lado");
  parseInt(lado);
  let area = lado * lado;
  alert(area);
}

function calcularPerimetroTriangulo() {
  let lado1 = prompt("Ingrese la medida del lado 1");
  let lado2 = prompt("Ingrese la medida del lado 2");
  let lado3 = prompt("Ingrese la medida del lado 3");
  lado1 = Number(lado1);
  lado2 = Number(lado2);
  lado3 = Number(lado3);
  let area = lado1 + lado2 + lado3;
  alert(Number(area));
}

function calcularAreaRectangulo() {
  let base = prompt("Ingrese la medida de la base");
  let altura = prompt("Ingrese la medida de la altura");
  parseInt(base);
  parseInt(altura);
  let area = base * altura;
  alert(area);
}
