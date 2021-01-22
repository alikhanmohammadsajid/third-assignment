//  kilometerToMeter
//      "we know",
//              1 kilometer = 1000 meter:

function kilometerTometer(kilometer) {
    let meter =kilometer * 1000;
    return meter;
}


//  budgetCalculator
//      "give that",
//              watch = 50 tk:
//              phone = 100 tk:
//             laptop = 500 tk:



function budgetCalculator(watchCount, phoneCount, laptopCount) {
    let totalGadget = watchCount * 50 + phoneCount * 100 + laptopCount * 500;
    return (totalGadget)
}
const totalGadget = budgetCalculator(50, 30, 10);
console.log(totalGadget);



// hotelCost

function hotelCost(hotel) {
var day = 0;
if (hotel<=10) {
    day = hotel * 100;
}
else if (hotel<=20) {
    var first10 = 10 * 100;
    var remaining = hotel - 20;
    var second10 = remaining * 80;
    day = first10 + second10;
}
else{
    var first10 = 10 * 100;
    var second10 = 10 * 80;
    var remaining = hotel - 30;
    var third10 = remaining * 50;
    day = first10 + second10 + third10;
}
    return day;
}
  var totalCost=hotelCost(23)
 console.log(totalCost)





// megaFriend

function megaFriend (alif) {
    var biggestFriend = alif[0];
    for (let i = 0; i < alif.length; i++) {
        const element = alif[i];
        console.log(element.length);
        if (element.length > biggestFriend) {
            biggestFriend = element;
        }   
    }
    return (biggestFriend);
}
var total = megaFriend(['ajmaeen', 'sajid', 'saad', 'wasif' ])
console.log(total);