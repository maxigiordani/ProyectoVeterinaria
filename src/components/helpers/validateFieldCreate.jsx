import dayjs from "dayjs";

export const validationsFieldCreate = {
  ownerName: {
    required: "Este campo es obligatorio",
    pattern: {
      value: /^[^\s].*[^\s]$/,
      message:
        "El nombre no puede contener espacios en blancos(ni al principio, ni al final), tampoco números",
    },
    maxLength: {
      value: 30,
      message: "El nombre no puede tener más de 25 caracteres",
    },
  },
  email: {
    required: "Este campo es obligatorio",
    pattern: {
      value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
      message: "Correo electrónico inválido",
    },
    maxLength: {
      value: 30,
      message: "El correo electrónico no puede tener más de 30 caracteres",
    },
  },
  tel: {
    required: "Este campo es obligatorio",
    pattern: {
      value: /^\d{12}$/,
      message: "Número de celular inválido. Debe tener 12 dígitos.",
    },
  },
  petName: {
    required: "Este campo es obligatorio",
    pattern: {
      value: /^[^\s].*[^\s]$/,
      message:
        "El nombre de la mascota no puede contener espacios en blancos(ni al principio, ni al final), tampoco números",
    },
    maxLength: {
      value: 30,
      message: "El nombre de la mascota no puede tener más de 30 caracteres",
    },
  },
  specie: {
    required: "Este campo es obligatorio",
    pattern: {
      value: /^[^\s].*[^\s]$/,
      message:
        "El nombre no puede contener espacios en blancos(ni al principio, ni al final), tampoco números",
    },
    maxLength: {
      value: 30,
      message: "El nombre no puede tener más de 30 caracteres",
    },
  },
  race: {
    required: "Este campo es obligatorio",
    pattern: {
      value: /^[^\s].*[^\s]$/,
      message:
        "El nombre no puede contener espacios en blancos(ni al principio, ni al final), tampoco números",
    },
    maxLength: {
      value: 30,
      message: "El nombre no puede tener más de 30 caracteres",
    },
  },
};

export const validationAppointment = {
  appointmentDetail: {
    required: "Este campo es obligatorio",
    pattern: {
      value: /^[^\s].*[^\s]$/,
      message:
        "El nombre no puede contener espacios en blancos (ni al principio, ni al final), tampoco números",
    },
    maxLength: {
      value: 30,
      message: "El nombre no puede tener más de 30 caracteres",
    },
  },
  veterinarian: {
    required: "Este campo es obligatorio",
    pattern: {
      value: /^[^\s].*[^\s]$/,
      message:
        "El nombre no puede contener espacios en blancos (ni al principio, ni al final), tampoco números",
    },
    maxLength: {
      value: 30,
      message: "El nombre no puede tener más de 30 caracteres",
    },
  },
  pet: {
    required: "Este campo es obligatorio",
    pattern: {
      value: /^[^\s].*[^\s]$/,
      message:
        "El nombre no puede contener espacios en blancos (ni al principio, ni al final), tampoco números",
    },
    maxLength: {
      value: 30,
      message: "El nombre de la mascota no puede tener más de 30 caracteres",
    },
  },
  date: {
    required: "Este campo es obligatorio",
    validate: (value) => {
      const currentDate = dayjs();
      const selectedDate = dayjs(value);

      if (selectedDate.isBefore(currentDate, "day")) {
        return "La fecha no puede ser del pasado";
      }

      return true;
    },
  },
  time: {
    required: "Este campo es obligatorio",
    pattern: {
      value: /^(08|09|1[0-6]):00$/,
      message:
        'Recuerda el horario de atencion es de 8:00 a 16:00 de corrido. Los turnos son cada hora en punto, ej: "12:00"',
    },
  },
};

export const errorStyle = {
  color: "red",
  fontSize: "14px",
};

export const ErrorMessage = ({ message }) => (
  <p style={errorStyle}>{message}</p>
);
