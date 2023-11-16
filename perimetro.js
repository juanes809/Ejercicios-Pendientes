class Figurageometrica {
    constructor(ciruclo, cuadrado, triangulo, area, perimtero){
        this.ciruclo = ciruclo
        this.cuadrado = cuadrado
        this.triangulo = triangulo
        this.area = 0
        this.perimetro = p0
    }

}


class Circulo extends FiguraGeometrica {
    constructor(radio) {
      super();
      this.radio = radio;
    }
  
    calcularArea() {
      this.area = Math.PI * this.radio * this.radio;
    }
  
    calcularPerimetro() {
      this.perimetro = 2 * Math.PI * this.radio;
    }
  }
  
  class Cuadrado extends FiguraGeometrica {
    constructor(lado) {
      super();
      this.lado = lado;
    }
  
    calcularArea() {
      this.area = this.lado * this.lado;
    }
  
    calcularPerimetro() {
      this.perimetro = 4 * this.lado;
    }
  }
  
  class Rectangulo extends FiguraGeometrica {
    constructor(base, altura) {
      super();
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea() {
      this.area = this.base * this.altura;
    }
  
    calcularPerimetro() {
      this.perimetro = 2 * (this.base + this.altura);
    }
  }