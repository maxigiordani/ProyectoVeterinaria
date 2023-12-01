const regExpName = /^[A-Za-z\s?]+$/;
const regExpEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
const regExpTel = /^\d{12}$/
const regExpTime =  /^(?:1[0-6]|[89])$/;


export const validateNames=(field)=>{
    if(regExpName.test(field)&& field.trim() !== "") {
        return true;
    }else{
        return false;
    }
}

export const validateEmail=(field)=>{
    if(regExpEmail.test(field)&& field.trim() !== "") {
        return true;
    }else{
        return false;
    }
}
export const validateTel=(field)=>{
    if(regExpTel.test(field)&& field.trim() !== "") {
        return true;
    }else{
        return false;
    }
}

export const validateTime = (field)=>{
    if(regExpTime.test(field)&& field.trim()!== ""){
        return true;
    }else{
        false
    }
}
