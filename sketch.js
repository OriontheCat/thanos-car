var thanosImg;
var thanosCarImg;
var environment = {
  thanos: Array(2),
  //true, in first cell, false, in second cell
  car: Boolean()
};

var possibleEvironments = [{
  thanos: [true, true],
  //true, in first cell, false, in second cell
  car: true,
}, {
  thanos: [false, true],
  //true, in first cell, false, in second cell
  car: true,
}, {
  thanos: [false, false],
  //true, in first cell, false, in second cell
  car: true,
}, {
  thanos: [true, false],
  //true, in first cell, false, in second cell
  car: true,
}, {
  thanos: [true, true],
  //true, in first cell, false, in second cell
  car: false,
}, {
  thanos: [true, false],
  //true, in first cell, false, in second cell
  car: false,
}, {
  thanos: [false, true],
  //true, in first cell, false, in second cell
  car: false,
}, {
  thanos: [false, false],
  //true, in first cell, false, in second cell
  car: false,
}];

var nextEnvironment = [{
  thanos: [false, true],
  //true, in first cell, false, in second cell
  car: true,
}, {
  thanos: [false, true],
  //true, in first cell, false, in second cell
  car: false,
}, {
  thanos: [false, false],
  //true, in first cell, false, in second cell
  car: true,
}, {
  thanos: [false, true],
  //true, in first cell, false, in second cell
  car: true,
}, {
  thanos: [true, false],
  //true, in first cell, false, in second cell
  car: false,
}, {
  thanos: [false,false],
  //true, in first cell, false, in second cell
  car: true,
}, {
  thanos: [false, false],
  //true, in first cell, false, in second cell
  car: false,
}, {
  thanos: [false, false],
  //true, in first cell, false, in second cell
  car: false,
}];

var slider;
var button;

function setup() {
  thanosImg = loadImage("assets/images/thanos.png");
  thanosCarImg = loadImage("assets/images/thanos_car.png");
  createCanvas(innerWidth, innerHeight);
  background("white");
  environment = possibleEvironments[0];
  textSize(15);
  slider = createSlider(0, 7, 0, 1);
  slider.position(20, 20);
  slider.changed(changeEnvironment);
  button = createButton('next');
  button.position(20, 65);
  button.mousePressed(next);
}

function changeEnvironment() {
  environment = possibleEvironments[slider.value()];
}

function next() {
  Array.from(document.getElementsByTagName("input")).forEach(element => {
    element.value = getNextIndex().toString();
  });
  environment = nextEnvironment[getNextIndex()];
}

function isEquivalent(a, b) {
  if (a.car != b.car) return false;
  if (a.thanos[0] != b.thanos[0]) return false;
  if (a.thanos[1] != b.thanos[1]) return false;
  return true;
}

function getNextIndex() {
  for (var i = 0; i < possibleEvironments.length; i++) {
    if (isEquivalent(environment, possibleEvironments[i])) {
      console.log(i);
      return i;
    }
  }
  return 0;
}



function draw() {
  console.log(slider.value());
  background("white");
  line(width / 2, 0, width / 2, height);
  if (environment.car) {
    image(thanosCarImg, width / 5, height / 3, height / 3, height / 5);
  } else {
    image(thanosCarImg, 3 * width / 5, height / 3, height / 3, height / 5);
  }
  console.log(environment);
  console.log("0: asd " + environment.thanos[0]);
  if (environment.thanos[0]) {
    image(thanosImg, width / 4, height / 2, height / 5, height / 5);
    console.log("0");
  }
  if (environment.thanos[1]) {
    console.log("1");
    image(thanosImg, 3 * width / 4, height / 2, height / 5, height / 5);
  }
  text(`Environment: ${slider.value()+1}`, slider.x * 2 + slider.width, 35);
}
