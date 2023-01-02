const elements = document.getElementsByClassName('a-price');
const TAX = 13;

for (let element of elements) {
    let price = element.firstElementChild.innerHTML.match(/[\d\.]+/);
    const spanElement = document.createElement('span');
    if(!Number.isNaN(price)){
        console.log("==========================",price)
        let priceAfterTax = Number.parseFloat(price) + Number.parseFloat((price*TAX/100).toFixed(2));
        spanElement.innerHTML = `{ $${priceAfterTax} }`;
    }
    element.insertAdjacentElement('afterend', spanElement);
    // element.innerHTML += '$';
}