const test = document.querySelectorAll('.test');
console.log(test);
test.forEach(tst => tst.addEventListener('click', hWorld));

function hWorld() {
    console.log('Hello World xD');
}