// dữ liệu 1
var massMark = 78;
var heightMark = 1.69;
var massJohn = 92;
var heightJohn = 1.95;
console.log("test 1");

var BMIMark = (massMark / (heightMark * heightMark));

var BMIJohn = (massJohn / (heightJohn * heightJohn));

if (BMIMark > BMIJohn) {
    console.log(`BMI của Mark ${BMIMark.toFixed(1)} cao hơn Join ${BMIJohn.toFixed(1)}`);
} else {
    console.log(`BMI của Mark ${BMIMark.toFixed(1)} thấp hơn Join ${BMIJohn.toFixed(1)}`);
}

// dữ liệu 2
var massMark = 95;
var heightMark = 1.88;
var massJohn = 85;
var heightJohn = 1.76;
console.log("test 2");

var BMIMark = (massMark / (heightMark * heightMark));

var BMIJohn = (massJohn / (heightJohn * heightJohn));

if (BMIMark > BMIJohn) {
    console.log(`BMI của Mark ${BMIMark.toFixed(1)} cao hơn Join ${BMIJohn.toFixed(1)}`);
} else {
    console.log(`BMI của Mark ${BMIMark.toFixed(1)} thấp hơn Join ${BMIJohn.toFixed(1)}`);
}