// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);


const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {
    
    const cards=[];

        for (let i = 0;i < names.length; i++) 
        {
            cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        
            debugger;
        }
    return cards;
    
}

writeCards(names);



//Count Down Function//

let posInt = 10;

function countDown(posInt) {
    while (posInt >= 0) {
        
        console.log(posInt);
        posInt--;
        debugger;
       
    }
return posInt;
}