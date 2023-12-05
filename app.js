const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");


//cambiar color de la zapatilla
const products = [
    {
        id : 1,
        title: "Air Force One",
        price: 89990,
        colors: [
            {
                code: "black",
                img: "./img/af1.png",
            },
            {
                code: "white",
                img: "./img/af2.png",
            },
        ],
    },
    {
        id : 2,
        title: "Jordan Retro 1",
        price: 79990,
        colors: [
            {
                code: "gray",
                img: "./img/retro1.png",
            },
            {
                code: "skyblue",
                img: "./img/retro1.1.png",
            },
        ],
    },
    {
        id : 3,
        title: "Vans SK-8",
        price: 79990,
        colors: [
            {
                code: "yellow",
                img: "./img/vans.png",
            },
            {
                code: "black",
                img: "./img/vans11.png",
            },
        ],
    },
    {
        id : 4,
        title: "Adidas Forum",
        price: 99990,
        colors: [
            {
                code: "blue",
                img: "./img/forum.png",
            },
            {
                code: "red",
                img: "./img/forum11.png",
            },
        ],
    },
    {
        id : 5,
        title: "New Balance 550",
        price: 99990,
        colors: [
            {
                code: "purple",
                img: "./img/newbalance.png",
            },
            {
                code: "yellow",
                img: "./img/newbalance11.png",
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".sizes");




menuItems.forEach((item, index)=>{
    item.addEventListener("click", () => {
        //cambiar la diapositiva actual
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //cambiar el producto elegido
        choosenProduct = products[index]

        //cambiar los textos del producto actual
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img

        currentProductColors.forEach((color,index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

//cambiar imagen con seleccionar el color de la zapatilla
currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    });
});


//cambiar color al seleccionar la talla
currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
            size.style.color = "white";
    });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex";
});

close.addEventListener("click",()=>{
    payment.style.display = "none";
});
