/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/*  const regExpName = /^[A-Za-z\s?]+$/ ;
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
  */



// eslint-disable-next-line react-refresh/only-export-components
export const validationsFieldCreate ={

ownerName:{
    required: 'Este campo es obligatorio',
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
      message: 'El correo electrónico no puede tener más de 30 caracteres',
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
    required: 'Este campo es obligatorio',
    pattern:{
        value: /^[A-Za-z\s?]+$/,
        message: 'El nombre de la mascota no puede contener espacios en blancos(ni al principio, ni al final), tampoco números'
    },
    maxLength:{
        value:30,
        message: 'El nombre de la mascota no puede tener más de 30 caracteres',

    }
},
specie:{
    required: 'Este campo es obligatorio',
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
    required: 'Este campo es obligatorio',
    pattern:{
        value: /^[A-Za-z\s?]+$/,
        message: 'El nombre no puede contener espacios en blancos(ni al principio, ni al final), tampoco números'
    },
    maxLength:{
        value:30,
        message: 'El nombre no puede tener más de 30 caracteres',

    }
}

};
export const validationAppointment={
    appointmentDetail:{
        required: 'Este campo es obligatorio',
        pattern: {
            value: /^[A-Za-z?]+$/,
            message: 'El nombre no puede contener espacios en blancos (ni al principio, ni al final), tampoco números'
        },
        maxLength:{
            value:30,
            message: 'El nombre no puede tener más de 30 caracteres',
    
        }
    },
    veterinarian:{
        required: 'Este campo es obligatorio',
        pattern: {
            value: /^[A-Za-z?]+$/,
            message: 'El nombre no puede contener espacios en blancos (ni al principio, ni al final), tampoco números'
        },
        maxLength:{
            value:30,
            message: 'El nombre no puede tener más de 30 caracteres',
    
        }
    },
    pet:{
        required: 'Este campo es obligatorio',
        pattern: {
            value: /^[A-Za-z?]+$/,
            message: 'El nombre no puede contener espacios en blancos (ni al principio, ni al final), tampoco números'
        },
        maxLength:{
            value:30,
            message: 'El nombre de la mascota no puede tener más de 30 caracteres',
    
        }
    },
    date:{
        required: 'Este campo es obligatorio',
        
        maxLength:{
            value:30,
            message: 'El nombre no puede tener más de 30 caracteres',
    
        }
    },
    time:{
        required: 'Este campo es obligatorio',
        pattern:{
            value: /^(?:1[0-6]|[89])$/,
            message: 'Recuerda el horario de atencion es de 8:00 a 16:00 de corrido'
        }
    
    },
    



}






// eslint-disable-next-line react-refresh/only-export-components
export const errorStyle = {
    color: 'red',
    fontSize: '14px',
  };
  
  export const ErrorMessage = ({ message }) => (
    <p style={errorStyle}>{message}</p>
  );
   