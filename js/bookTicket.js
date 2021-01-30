// effect After Click BookNow button, Start

const bookButton =  document.getElementById('book-Button');
bookButton.addEventListener('click', function(){
    document.getElementById('main-Container').style.display = "none";
    document.getElementById('effectAfterBook').style.display = 'block';

})

// effect after Click BookNow Button, end 


//classType is economic class and first class


// classHandler function Start
function classHandler(classType, isIncrease){  
    const classCount = getInputValue(classType); 
    let totalClassCount = classCount;

    if (isIncrease == true && classCount >= 0 ){
        totalClassCount = totalClassCount + 1;
    }

    if (isIncrease == false && classCount >= 1 ){
        totalClassCount = totalClassCount - 1;
    }

    document.getElementById(classType + '-Class-Count').value = totalClassCount;
    
    if (classType == "first"){

        document.getElementById('sub-Total1').innerText ='$' + totalClassCount *  150;
      
    }

    if (classType == "economy"){
        document.getElementById('sub-Total2').innerText ='$' + totalClassCount *  100;
    }
    calculateSubTotal();  
}
// classHandler function end


// calculateSubTotal function Start

function calculateSubTotal(){
    const firstCount = getInputValue('first')
    const economyCount = getInputValue('economy')
    const subTotalPrice = firstCount*150 + economyCount*100; //sub total Calculation
    document.getElementById('sub-Total').innerText = '$' + subTotalPrice;

    const tax = subTotalPrice * .1  //tax Calculation
    document.getElementById('tax-Amount').innerText = '$' + tax;
    const grandTotal = tax + subTotalPrice;
    document.getElementById('grand-Total').innerText = '$' + grandTotal; //grand total Calculation
}

// calculateSubTotal function End


// getInputValue function start

function getInputValue(classType){
    const classInput = document.getElementById(classType +'-Class-Count');
    const classCount = parseInt(classInput.value);
    return classCount;
}

// getInputValue function end

