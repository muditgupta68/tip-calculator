
// inputs value 
let billValue = document.querySelector(".bill");
let customValue = document.querySelector(".customButton");
let pplValue = document.querySelector(".people");

// buttons query
let tipButton = document.querySelectorAll(".tipButton");
let reset = document.querySelector(".reset");

// output 
let perPerson = document.getElementById("tipPerPerson");
let totalAmount = document.getElementById("total");
let warning = document.querySelector(".warning");

// values variables
let billAmount = 0;
let tipValue = 5;
let ppl = 1;

let result;

const clearCustom = ()=>{
    customValue.value = null;
};

const removeActive = ()=>{
    tipButton.forEach(btn => {
        btn.classList.remove("active");
    });
}

billValue.addEventListener("input",(eve)=>{
    let value = eve.target.value;
    if(!isNaN(value) && value.length<=5 && value>0){
        billAmount = value;
        // console.log(billAmount);
        solve();
    }
    else{
        eve.target.value = null;
    }
})

for (btns of tipButton) {
    btns.addEventListener("click",(e)=>{
        removeActive();
        clearCustom();
        e.target.classList.add("active");
        tipValue = e.target.value;
        // console.log(tipValue);
        solve();
    })
}

customValue.addEventListener("input",(e)=>{
    removeActive();
    let value = e.target.value;
    if(!isNaN(value) && value.length<=2 && value>0){
    tipValue = value;
    solve();
    }
    else{
        e.target.value = null;
    }
    
    // console.log(tipValue);
})

pplValue.addEventListener("input",(e)=>{
    let value = e.target.value;
    if(!isNaN(value) && value.length<=4 && value>0){
        ppl = value;
        warning.classList.remove('visible');
        e.target.classList.remove('warningBorder');
        solve();
    }
    else{
        e.target.value = null;
        e.target.classList.add('warningBorder');
        warning.classList.add('visible');
    }
})


const solve=()=>{
    if(billAmount>0){
        result = ((billAmount/100) * tipValue).toFixed(2);
        totalAmount.innerHTML = `$${result}`;
        perPerson.innerHTML = `$${(result/ppl).toFixed(2)}`;

    }
    // console.log(result);
}

reset.addEventListener("click",(e)=>{
    clearCustom();
    removeActive();
    billValue.value = null;
    pplValue.value = null;
    billAmount = 0;
    tipValue = 5;
    ppl = 1;
    totalAmount.innerHTML = "$0.00"
    perPerson.innerHTML = "$0.00";
})
