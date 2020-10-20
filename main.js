// VOORRAAD ARRAY MET TV'S
const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

//opdracht 1a
const inStock = inventory.reduce((total, tv) => {
    return total + tv.originalStock - tv.sold
}, 0)

//opdracht 1b
const opdrachtContainer = document.getElementById("opdracht-container");
const newContent = document.createElement('p');
newContent.setAttribute("id", "stockCount");
newContent.textContent = inStock.toString();
opdrachtContainer.appendChild(newContent);

//opdracht 2a
inventory.map((tv) => {
    console.log(tv.type);
});

//opdracht 2b
const inventoryOutOfStock = getSoldOut(inventory);

function getSoldOut(inventory){
    return inventory.filter((tv) => {
        return tv.originalStock === tv.sold
    });
}
inventoryOutOfStock.map((tv) => {
    console.log("Uitverkocht: " + tv.brand + " " + tv.name + " " + tv.type)
});

//opdracht 2c
const inventoryHasAmbilight = getAmbilightTvs(inventory);
console.log(inventoryHasAmbilight);

function getAmbilightTvs(inventory){
    return inventory.filter((tv) => {
        return tv.options.ambiLight
    });
}

inventoryHasAmbilight.map((tv) => {
    console.log("Heeft ambilight: " + tv.brand + " " + tv.name + " " + tv.type)
});

//opdracht 2d
function sortByPrice(tvList){
    tvList.sort((a, b) => {
        return a.price - b.price
    });
}

console.log(inventory);


/*
let total = 0;
for (let i = 0; i < inventory.length; i++) {
  const currentTV = inventory[i];
  const currentTVinventory = currentTV.originalStock - currentTV.sold;
  total = total + currentTVinventory;
}
console.log(total);*/

//opdracht 3
tvList = document.createElement('ul')
for (let i = 0; i < 2; i++) {
    const type = inventory[i].type;
    const listElement = document.createElement('li');
    listElement.textContent = type;
    tvList.appendChild(listElement);
}
opdrachtContainer.appendChild(tvList);

//opdracht 4a

function tvName(tv) {
    return tv.brand + " " + tv.type + " - " + tv.name;
}

//opdracht 4b

function tvOptions(tv) {
    let options = [];
    for (const [key, value] of Object.entries(tv.options)){
        if(value){
            options.push(key);
        }
    }
    let output = "";
    if (options.length > 0){
        output = "Beschikt over ";
    }

    let optionsPrinted = 0;
    for (let i = 0; i < options.length; i++) {
        if(optionsPrinted === 0){
            output += options[i];
        } else if(optionsPrinted < options.length - 1){
            output = output + ", " + options[i]
        } else {
            output = output + " en " + options[i];
        }
        optionsPrinted++;
    }

    return output;
}

//opdracht 4c
function tvSizes(tv){
    const availableSizes = tv.availableSizes;
    output = "";
    for (let i = 0; i < availableSizes.length; i++) {
        output = output + availableSizes[i] + " inches (" + Math.round(availableSizes[i]*2.54) + " cm)"
        if(i < availableSizes.length - 1){
            output += " | "
        }
    }
    return output;
}

//opdracht 4d

function getInventoryDiv(tvArray){
    const result = document.createElement("div");
    result.setAttribute("id", "tvlist");
    return tvArray.reduce((result, tv) => {
        const tvDescription = document.createElement("p");
        const line1 = document.createElement("div");
        line1.textContent = tvName(tv);
        tvDescription.appendChild(line1);
        const line2 = document.createElement("div");
        line2.textContent = "€" + tv.price + ",-";
        tvDescription.appendChild(line2);
        const line3 = document.createElement("div");
        line3.textContent = tvSizes(tv);
        tvDescription.appendChild(line3);
        const line4 = document.createElement("div");
        line4.textContent = tvOptions(tv);
        tvDescription.appendChild(line4);

        result.appendChild(tvDescription);

        return result;

    }, result);
}

opdrachtContainer.appendChild(getInventoryDiv(inventory));

//opdracht 6a
function remainignValue(inventory){
    let result = 0;
    for (let i = 0; i < inventory.length; i++) {
        result += (inventory[i].price * (inventory[i].originalStock - inventory[i].sold));
    }
    return result;
}

const remainingValueDiv = document.createElement("div");
remainingValueDiv.textContent = "Waarde televisies in magazijn: " + remainignValue(inventory);
opdrachtContainer.appendChild(remainingValueDiv);

//opdracht 6b
function soldValue(inventory){
    let result = 0;
    for (let i = 0; i < inventory.length; i++) {
        result += (inventory[i].price * inventory[i].sold);
    }
    return result;
}

const soldValueDiv = document.createElement("div");
soldValueDiv.textContent = "Opbrengst tot nu toe: " + soldValue(inventory);
opdrachtContainer.appendChild(soldValueDiv);

//opdracht 7

//prijs
document.getElementById('sort').onclick = function printSorted(){
    sortByPrice(inventory);
    const oldDiv = document.getElementById("tvlist");
    const newDiv = getInventoryDiv(inventory);
    opdrachtContainer.replaceChild(newDiv, oldDiv);
}

//ambilight
// function printAmbilightList(inventory){
//     const ambilightTvs = getAmbilightTvs(inventory);
//     const newDiv = getInventoryDiv(ambilightTvs);
//     const oldDiv = document.getElementById("tvlist");
//     opdrachtContainer.replaceChild(newDiv, oldDiv);
// }

document.getElementById('ambilight').onclick = function (){
    const ambilightTvs = getAmbilightTvs(inventory);
    const newDiv = getInventoryDiv(ambilightTvs);
    const oldDiv = document.getElementById("tvlist");
    opdrachtContainer.replaceChild(newDiv, oldDiv);
}

document.getElementById('soldout').onclick = function (){
    const soldout = getSoldOut(inventory);
    const newDiv = getInventoryDiv(soldout);
    const oldDiv = document.getElementById("tvlist");
    opdrachtContainer.replaceChild(newDiv, oldDiv);
}




