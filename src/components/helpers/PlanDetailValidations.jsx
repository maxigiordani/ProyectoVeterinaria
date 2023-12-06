import React from "react";

export const validationRules = {
  name: {
    required: "Este campo es obligatorio",
    pattern: {
      value: /^[^\d\s]+(\s[^\d\s]+)*$/,
      message:
        "El nombre no puede contener espacios en blanco al principio o al final, tampoco números",
    },
    maxLength: {
      value: 25,
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
      value: 35,
      message: "El correo electrónico no puede tener más de 35 caracteres",
    },
  },
  message: {
    required: "Este campo es obligatorio",
    maxLength: {
      value: 300,
      message: "El mensaje no puede tener más de 300 caracteres",
    },
  },
  phone: {
    required: "Este campo es obligatorio",
    pattern: {
      value: /^\d{12}$/,
      message: "Número de celular inválido. Debe tener 12 dígitos.",
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
