// https://github.com/Aduvai1/basic-javascript-assignment-3



//========== kilometerToMeter ===========

function kilometerToMeter(kilo){
    if(kilo > 0){
        var meter = kilo * 1000;
    }
    else{
        meter = "Enter Positive Number"
    }
    return meter;
}



//========== budgetCalculator ===========

function budgetCalculator(amountOfWatch, amountOfMobile, amountOfLaptop){
    watchPrice = 50;
    mobilePrice = 100;
    laptopPrice = 500;
    if(amountOfWatch > 0){
        totalWatchPrice = amountOfWatch * watchPrice;
    }
    else{
        totalWatchPrice = "Please Enter Valid Amount";
    }
    if(amountOfMobile > 0){
        totalMobilePrice = amountOfMobile * mobilePrice;
    }
    else{
        totalMobilePrice = "Please Enter Valid Amount";
    }
    if(amountOfLaptop > 0){
        totalLaptopPrice = amountOfLaptop * laptopPrice;
    }
    else{
        totalLaptopPrice = "Please Enter Valid Amount";
    }

    totalCoast = totalWatchPrice + totalMobilePrice + totalLaptopPrice;

    if(totalCoast > 0) {
        totalCoastAmount = totalCoast;
    }
    else {
        totalCoastAmount = "Please Enter Valid Amount";
    }
    return totalCoastAmount;
}



//========== hotelCost ===========

function hotelCost(days){
    var totalCoast = 0;
    if(days <= 10){
        if(days > 0){
            totalCoast = days * 100;
        }
        else{
            totalCoast = "Please Enter Valid Amount";
        }
    }
    else if(days <= 20){
        if(days > 10){
            var beforeTenDays = 10 * 100;
            var remainingDays = days - 10;
            var afterTenDays = remainingDays * 80;
            totalCoast = beforeTenDays + afterTenDays;
        }
        else{
            totalCoast = "Please Enter Valid Amount";
        }
    }
    else if(days > 20){
        var beforeTenDays = 10 * 100;
        var afterTenDays = 10 * 80;
        var remainingDays = days - 20;
        var afterTwentyDays = remainingDays * 50;
        totalCoast = beforeTenDays + afterTenDays + afterTwentyDays;
    }
    else{
        totalCoast = "Please Enter Valid Amount";
    }
    return totalCoast;
}



//========== megaFriend ===========

function megaFriend(friends){
    var longName = friends[0];
    for(var i = 0; i < friends.length; i++){
        var compare = friends[i];
        if(compare.length > longName.length){
            longName = compare;
        }
    }
    return longName;
}

