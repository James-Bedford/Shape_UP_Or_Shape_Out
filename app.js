document.addEventListener("DOMContentLoaded", function () {
  let rectangleBtn = document.getElementById(`rectangleBtn`);
  let container = document.getElementById(`display_area`);
  let circleBtn = document.getElementById(`circleBtn`);
  let shapeDescription = document.getElementById(`shape`);
  let heightDescription = document.getElementById(`height`);
  let widthDescription = document.getElementById(`width`);
  let areaDescription = document.getElementById(`area`);
  let perimeterDescription = document.getElementById(`perimeter`);
  let radiusDescription = document.getElementById(`radius`);

  class Shape {
    constructor(height, width) {
      this.h = height;
      this.w = width;
      this.div = document.createElement(`div`);
      this.div.style.width = `${this.w}px`;
      this.div.style.height = `${this.h}px`;
      this.div.style.left = `${(this.w, positionGenerator())}px`;
      this.div.style.top = `${(this.h, positionGenerator())}px`;
      this.div.className = `shape`;
      container.appendChild(this.div);
      this.div.addEventListener(`dblclick`, () => this.deleteObject());
    } //end costructor

    deleteObject() {
      this.div.remove();
    }
  } //end Shape class

  class Circle extends Shape {
    constructor(height, width) {
      super(height, width);
      if (this.div) {
        this.div.classList.add("circle");
        this.div.addEventListener("click", () => this.describe());
      }
    }

    describe() {
      clearDescription();
      shapeDescription.innerText = "circle";
      widthDescription.innerText = `${this.w}`;
      heightDescription.innerText = `${this.h}`;
      let radius = parseInt(this.height);
      let radiusResult = radius / 2;
      radiusDescription.innerText = `${radiusResult}`;
      areaDescription.innerText = Math.floor(
        Math.PI * `${this.h}` * `${this.h}`
      );
      perimeterDescription.innerText = Math.floor(2 * Math.PI * `${this.h}`);
    }
  } //end class circle

  class Square extends Shape {
    constructor(height, width) {
      super(height, width);
      if (this.div) {
        this.div.classList.add("square");
        this.div.addEventListener("click", () => this.describe());
      }
    }

    describe() {
      clearDescription();
      shapeDescription.innerText = "Square";
      widthDescription.innerText = `${this.w}`;
      heightDescription.innerText = `${this.h}`;
      radiusDescription.innerText = `N/A`;
      areaDescription.innerText = `${this.h}` * `${this.h}`;
      perimeterDescription.innerText = `${this.h * 4} `;
    }
  } //end class square

  class Rectangle extends Shape {
    constructor(height, width) {
      super(height, width);
      if (this.div) {
        this.div.classList.add(`rectangle`);
        this.div.addEventListener("click", () => this.describe());
      }
    }

    describe() {
      clearDescription();
      shapeDescription.innerText = "Rectangle";
      widthDescription.innerText = `${this.w}`;
      heightDescription.innerText = `${this.h}`;
      radiusDescription.innerText = `N/A`;
      areaDescription.innerText = `${this.h}` * `${this.w}`;
      perimeterDescription.innerText = `${this.h * 2 + this.w * 2} `;
    }
  } //end class rectangle

  class Triangle extends Shape {
    constructor(height, width) {
      super(height, width);
      if (this.div) {
        this.div.classList.add(`triangles`);
        this.div.addEventListener("click", () => this.describe());
      }
    }

    describe() {
      clearDescription();
      shapeDescription.innerText = "Triangle";
      widthDescription.innerText = `N/A`;
      heightDescription.innerText = `${this.h}`;
      radiusDescription.innerText = `N/A`;
      areaDescription.innerText = 0.5 * `${this.h}` * `${this.h}`;
      perimeterDescription.innerText = Math.floor(
        2 * `${this.h}` + Math.sqrt(2) * `${this.h}`
      );
    }
  } //end class Triangle

  circleBtn.addEventListener("click", function newCircle() {
    let circleRadius = document.getElementById(`txtCircleRadius`).value;
    new Circle(circleRadius * 2, circleRadius * 2);
  });

  squareBtn.addEventListener(`click`, function newSquare() {
    let squareSide = document.getElementById(`txtSquareLength`).value;
    new Square(squareSide, squareSide);
  });

  rectangleBtn.addEventListener(`click`, function newRectangle() {
    let rectangleHeight = document.getElementById(`txtRectHeight`).value;
    let rectangleWidth = document.getElementById(`txtRectWidth`).value;
    new Rectangle(rectangleHeight, rectangleWidth);
  });
  triangleBtn.addEventListener(`click`, function newTriangle() {
    let triangleHeight = document.getElementById(`txtTriangleLength`).value;
    let triangleWidth = document.getElementById(`txtTriangleLength`).value;
    new Triangle(triangleHeight, triangleWidth);
  });

  function positionGenerator() {
    return Math.floor(Math.random() * 500 + 1);
  }

  function clearDescription() {
    shapeDescription.innerText = " ";
    heightDescription.innerText = " ";
    widthDescription.innerText = " ";
    areaDescription.innerText = " ";
    perimeterDescription.innerText = " ";
    radiusDescription.innerText = " ";
  }
});
