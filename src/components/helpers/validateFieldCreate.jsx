const regExpName = /^[A-Za-z\s?]+$/ ;
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
 


/* 
export const validationsFieldCreate ={

ownerName:{
    requered: 'Este campo es obligatorio',
    pattern:{
        value: /^[A-Za-z\s?]+$/,
        message: 'El nombre no puede contener espacios en blancos(ni al principio, ni al final), tampoco números'
    },
    maxLength:{
        value:30,
        message: 'El nombre no puede tener más de 25 caracteres',

    }
},
email: {
    required: 'Este campo es obligatorio',
    pattern: { 
      value:  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ,
      message: 'Correo electrónico inválido',
    },
    maxLength: {
      value: 30,
      message: 'El correo electrónico no puede tener más de 35 caracteres',
    },
  },
  tel:{
    required: 'Este campo es obligatorio',
    pattern: {
      value: /^\d{12}$/,
      message: 'Número de celular inválido. Debe tener 12 dígitos.',
    },
  },
  petName:{
    requered: 'Este campo es obligatorio',
    pattern:{
        value: /^[A-Za-z\s?]+$/,
        message: 'El nombre de la mascota no puede contener espacios en blancos(ni al principio, ni al final), tampoco números'
    },
    maxLength:{
        value:30,
        message: 'El nombre de la mascota no puede tener más de 25 caracteres',

    }
},
specie:{
    requered: 'Este campo es obligatorio',
    pattern:{
        value: /^[A-Za-z\s?]+$/,
        message: 'El nombre no puede contener espacios en blancos(ni al principio, ni al final), tampoco números'
    },
    maxLength:{
        value:30,
        message: 'El nombre no puede tener más de 25 caracteres',

    }
},
race:{
    requered: 'Este campo es obligatorio',
    pattern:{
        value: /^[A-Za-z\s?]+$/,
        message: 'El nombre no puede contener espacios en blancos(ni al principio, ni al final), tampoco números'
    },
    maxLength:{
        value:30,
        message: 'El nombre no puede tener más de 25 caracteres',

    }
}

};
export const errorStyle = {
    color: 'red',
    fontSize: '14px',
  };
  
  export const ErrorMessage = ({ message }) => (
    <p style={errorStyle}>{message}</p>
  );
   */