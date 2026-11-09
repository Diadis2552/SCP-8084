

const btn1 = document.querySelector('#bttn');
const blocks = document.querySelector('#exp');
const blocka = document.querySelector('#content');
const btn2 = document.querySelector('#bttn2');

btn1.addEventListener('click', () => {
    blocks.style.display = blocks.style.display === "block" ? "none" : "block";
    blocka.style.display = blocka.style.display === "none" ? "block" : "none";
})
btn2.addEventListener('click', () => {
    blocka.style.display = blocka.style.display === "block" ? "none" : "block";
    blocks.style.display = blocks.style.display === "none" ? "block" : "none";

})


const btn3 = document.querySelector('#bttn3');
const recov = document.querySelector('#recovery');
const content2 = document.querySelector('#content2');
const btn4 = document.querySelector('#bttn4');

btn3.addEventListener('click', () => {
    recov.style.display = recov.style.display === "block" ? "none" : "block";
    content2.style.display = content2.style.display === "none" ? "block" : "none";
})
btn4.addEventListener('click', () => {
    content2.style.display = content2.style.display === "block" ? "none" : "block";
    recov.style.display = recov.style.display === "none" ? "block" : "none";

})
const btn5 = document.querySelector('#bttn5');
const voice = document.querySelector('#voice');
const content3 = document.querySelector('#content3');
const btn6 = document.querySelector('#bttn6');

btn5.addEventListener('click', () => {
    voice.style.display = voice.style.display === "block" ? "none" : "block";
    content3.style.display = content3.style.display === "none" ? "block" : "none";
})
btn6.addEventListener('click', () => {
    content3.style.display = content3.style.display === "block" ? "none" : "block";
    voice.style.display = voice.style.display === "none" ? "block" : "none";

})

const btn9 = document.querySelector('#bttn9');
const expcontent = document.querySelector('#exp4');
const content4 = document.querySelector('#expcontent');
const btn8 = document.querySelector('#bttn8');

btn9.addEventListener('click', () => {
    expcontent.style.display = expcontent.style.display === "block" ? "none" : "block";
    content4.style.display = content4.style.display === "none" ? "block" : "none";
})
btn8.addEventListener('click', () => {
    content4.style.display = content4.style.display === "block" ? "none" : "block";
    expcontent.style.display = expcontent.style.display === "none" ? "block" : "none";
})


const btn11 = document.querySelector('#bttn11');
const test = document.querySelector('#test');
const content5 = document.querySelector('#content5');
const btn10 = document.querySelector('#bttn10');

btn11.addEventListener('click', () => {
    test.style.display = test.style.display === "block" ? "none" : "block";
    content5.style.display = content5.style.display === "none" ? "block" : "none";
})
btn10.addEventListener('click', () => {
    content5.style.display = content5.style.display === "block" ? "none" : "block";
    test.style.display = test.style.display === "none" ? "block" : "none";

})
const btn13 = document.querySelector('#bttn13');
const test2 = document.querySelector('#test2');
const content7 = document.querySelector('#content7');
const btn12 = document.querySelector('#bttn12');

btn13.addEventListener('click', () => {
    test2.style.display = test2.style.display === "block" ? "none" : "block";
    content7.style.display = content7.style.display === "none" ? "block" : "none";
})
btn12.addEventListener('click', () => {
    content7.style.display = content7.style.display === "block" ? "none" : "block";
    test2.style.display = test2.style.display === "none" ? "block" : "none";

})
const btn15 = document.querySelector('#bttn15');
const test3 = document.querySelector('#test3');
const content8 = document.querySelector('#content8');
const btn14 = document.querySelector('#bttn14');

btn15.addEventListener('click', () => {
    test3.style.display = test3.style.display === "block" ? "none" : "block";
    content8.style.display = content8.style.display === "none" ? "block" : "none";
})
btn14.addEventListener('click', () => {
    content8.style.display = content8.style.display === "block" ? "none" : "block";
    test3.style.display = test3.style.display === "none" ? "block" : "none";

})