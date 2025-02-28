const flag=document.querySelectorAll(".flags select"); // selecting all the select elements in the flags class

for(let selectFlag of flag){
    for (code in countryCodes){
        let selectCode=document.createElement("option");
        selectCode.innerText=code;
        if(selectFlag.name==="flagCode"&&code==="INR"){
            selectCode.selected="selected";
        }
        selectFlag.append(selectCode);
    };
    selectFlag.addEventListener("change",(event)=>{
        updateFlag(event.target);
    });
}; // creating options for the selected country code and adding event listener to update the flag

const updateFlag=(flag)=>{
    let code=flag.value;
    let countryCode=countryCodes[code];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=flag.parentElement.querySelector("img");
    img.src=newSrc;
}; // updating the flag image based on the selected country code