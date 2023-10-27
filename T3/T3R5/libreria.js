var sum= (num1, num2) => num1 + num2;
var string=  (str) => `the length of "${str}" is:`+ str.length;
let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "Youre so lovely", "You re so sweet that Id think you re a sweetpotato -- and I LOOOOVE POTATOES"]

var alertas=(name) => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`);
var nombreyedad = (name,age) => "Hello, I am "+ name + ", and I am " +age+ " years old.";
var sumanums = numeros => numeros.reduce(getSum,0);

let eye = "eye";
const fire =(palabra) =>`bulls-` + palabra;

const fibonacci = (n) => {
    if (n < 3) {
      return 1;
    } else {
      return fibonacci(n-1) + fibonacci(n-2);
    }
  };

function getSum(total, num) {
    return total + num;
  }
