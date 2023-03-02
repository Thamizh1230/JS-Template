var obj = [
    {
        id: 1,
        image: "vivo.webp",
        productName: "ASUS Vivo AIO V22",
        price: 48000,
        // quantity: 0,
        

    },
    {
        id: 2,
        image: "sony1.webp",
        productName: "Sony Alpha ILCE",
        price: 173290,
        // quantity: 0,
    },
    {
        id: 3,
        image: "samsung.webp",
        productName:"Samsung Crystal 4K",
        price:35000,
        // quantity: 0,
    },
    {
        id: 4,
        image: "pc.webp",
        productName:"ZOONIS Gaming",
        price: 21999,
        // quantity: 0,
    },
    {
        id: 5,
        image: "samsung2.webp",
        productName: "Samsung smart Moniter",
        price: 25000,
        // quantity: 0,
    },
    {
        id: 6,
        image: "apple14pro.jpg",
        productName: "Iphone 14pro",
        price: 175000,
        // quantity: 0,
    },
    // {
    //     id:7,
    //     image: "printer.webp",
    //     productName: "HP-printer",
    //     price: 14999
    // },

    // {
    //     id: 8,
    //     image: "wallart.webp",
    //     productName: "Wall-art temple",
    //     price: 999,

    // },
    // {
    //     id: 9,
    //     image: "solar.web",
    //     productName: "Solar-Motion sensor",
    //     price: 1329,
    // },
    // {
    //     id:10,
    //     image: "guitar.webp",
    //     productName: "KADENCE Concert Ukulele 24inch",
    //     price: 3399,
    // },
    // {
    //     id:11,
    //     image: "washing.webp",
    //     productName: "Semi Automatic Top Load Black",
    //     price: 8290,
    // },
    // {
    //     id:12,
    //     image: "refrigerator.webp",
    //     productName: "Smart Wifi Frost Free Refrigerator",
    //     price:54999,
    // }

];

let itemBox = document.getElementById("item-box");
let cartItem = [];

function showdata(data){
    itemBox.innerHTML="",
    data.forEach(function(elm, i, arr){


//<--------------------create-element--------------------------------->
        let colElm = document.createElement("div");
        let subcolElm = document.createElement("div");
        let imageElm = document.createElement("img");
        let productContent = document.createElement("div");
        // let linkedName = document.createElement("a");
        let productName= document.createElement("h5");
        let productPrice = document.createElement("h6");
        let addtocartbtn = document.createElement("button");

/*------------------set-attribute--------------------------------------*/
        colElm.setAttribute("class", "col-4");
        subcolElm.setAttribute("class", "frst_img");
        imageElm.setAttribute("src", "image/" + elm.image);
        productContent.setAttribute("class", "pro-content");
        addtocartbtn.setAttribute("class", "addtocart_btn");
        // addtocartbtn.onclick = addtocartItem.bind(null, elm.id);
        // linkedName.setAttribute("href");


/*--------------------set-value----------------------------------------*/
        productName.innerText = elm.productName;
        productPrice.innerText = elm.price;
        addtocartbtn.innerText = "Add to cart";
        addtocartbtn.onclick = addCartItems.bind(null, elm.id);
        productContent.append(productName, productPrice, addtocartbtn)
        // .append(h3, p)
        subcolElm.append(imageElm, productContent);
        colElm.append(subcolElm);
        itemBox.append(colElm);

});
}
console.log(showdata(obj));


function addCartItems(id){
    let finddata = cartItem.find(function(items){
        return items.id == id;
    })
    if (finddata){
        let updatecartlist = cartItem.map(function(items){
        
            if(items.id == id){
                items.quantity+=1;
                return items
            }else
                return items;
        })
        cartItem = updatecartlist;
        console.log(cartItem);
        updatecart(cartItem);
        showtotalprice(cartItem);
    }else{
        let newItemcart = obj.find(function(items){
            return items.id == id;
        })
        newItemcart.quantity = 1;
        cartItem.push(newItemcart);
        console.log(cartItem);
        updatecart(cartItem);
        showtotalprice(cartItem);
        
    }
}


function decrementcartitem(id){
    let finddata = cartItem.find(function(items){
        return items.id == id;
    })
    if (finddata){
        if (finddata.quantity == 1){
            let updatecartlist = cartItem.filter(function(items){
                return items.id !== id;
            });
            cartItem = updatecartlist;
            updatecart(cartItem);
            showtotalprice(cartItem);

        }
        else{
            let updatecartlist = cartItem.map(function(items){
                if(items.id === id){
                    items.quantity-=1;
                    return items;
                }
                else return items;

            })
            console.log(cartItem);
            cartItem = updatecartlist;
            updatecart(cartItem);
            showtotalprice(cartItem);
            

        }
    }
}



function delcartitem(id){
    let finddata = cartItem.find(function(items){
        return items.id == id;
    })
    if(finddata){
        let updateitem = cartItem.filter(function(items){
            return items.id !== id;

        });
        cartItem = updateitem;
        updatecart(cartItem);
        showtotalprice(cartItem);
        
    }

}


function showtotalprice(cartItem){
    let totalprice = document.getElementById("cartTotalPrice");
    totalprice.innerText = "";
    let total = 0;
    
    for(let i=0; i<cartItem.length;i++){
        if(cartItem.quantity !=0){
            total = total +(cartItem[i].price * cartItem[i].quantity);
            console.log(total);
            totalprice.innerText = "Total price: " + total;

        }
    }

}




let addtocartBox = document.getElementById("addshowcart")

function updatecart(newData){
    addtocartBox.innerHTML = " ";
    newData.forEach(function(elm, i, arr){

        /*----------------create Elements-----------------------------------------*/
        let cartElm = document.createElement("div");
        let subcartElm = document.createElement("div");
        let cartimageElm = document.createElement("img");
        let cartproTitle = document.createElement("div");
        let cartproName = document.createElement("h6");
        let cartproPrice = document.createElement("h6");
        let cartproQuantity = document.createElement("h6"); 
        let cartitemAdd = document.createElement("button");
        let cartitemSub = document.createElement("button");
        let cartitemdel = document.createElement("button");
        let cartitembuy = document.createElement("button");


        /*---------------------set-attribute values---------------------------*/
        cartElm.setAttribute("class", "showcartdata");
        subcartElm.setAttribute("class","showcartimage");
        cartimageElm.setAttribute("src", "image/" + elm.image);
        cartproTitle.setAttribute("class", "showcarttitle");
        cartitemAdd.setAttribute("class", "addbutton");
        cartitemSub.setAttribute("class", "subbutton");
        cartitemdel.setAttribute("class", "delbutton")
        cartitembuy.setAttribute("class", "buybutton");


       
        /*----------------------set-values---------------------------------*/

        cartproName.innerText = "Product Name : " + elm.productName;
        cartproPrice.innerText = "Product Price: Rs. " + elm.price;
        cartproQuantity.innerText = "Quantity :" + elm.quantity;
        cartitemAdd.innerText = " + ";
        cartitemSub.innerText = " - ";
        cartitemdel.innerText = "Delete";
        cartitembuy.innerText = "Buy";
        cartitemAdd.onclick = addCartItems.bind(null, elm.id);
        cartitemSub.onclick = decrementcartitem.bind(null, elm.id);
        cartitemdel.onclick = delcartitem.bind(null, elm.id);



        subcartElm.append(cartimageElm, cartproTitle);
        cartproTitle.append(cartproName, cartproPrice, cartproQuantity, cartitemAdd, cartitemSub, cartitemdel);
        cartElm.appendChild(subcartElm);
        addtocartBox.appendChild(cartElm);

    })
}
