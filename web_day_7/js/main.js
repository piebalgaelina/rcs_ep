function buttonClick(){
var element = document
.querySelector('#some-paragraph');
if (element.innerText == 'foo') {
    element.innerText = 'bar';
} else {
    element.innerText = 'foo';
}
//setInterval(buttonClick, 500);
}
console.log(document.querySelectorAll('.other-paragraph').innerText);

function checkParagraphContent(){
var elements = document.querySelectorAll('.other-paragraph');
for (var i= 0; i < elements.length; i++) {
  var elements = elements[i] ;
  var number = i + 1 ;
    if (element.innerText == 'foo'+ number) {
      element.innerText = 'bar' + number;
    } else {
        element.innerText = 'foo' + number;
    }
}
function add(number) {
    var element = document
    .getElementById('number');
    var currentValue = parseInt(element.innerText);
    element.innerText
}

var count = 0;
function addcount(){
    count++;
    document 
    .getElementById('counter')
    .innerText = count;
}