// Importa la librería bcryptjs para encriptar contraseñas
import bcrypt from 'bcryptjs';

// Define la cantidad de "salt rounds" o rondas de sal. Cuanto mayor sea este número, más seguro pero más lento será el proceso.
const saltRounds = 10;

// Obtiene la contraseña del administrador desde la variable de entorno
const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD 

// Genera un hash (contraseña encriptada) utilizando bcrypt y el número de salt rounds
const adminPasswordHash = bcrypt.hashSync(adminPassword, saltRounds);

// Objeto que contiene las credenciales del administrador
const admin = {
  username: 'admin',
  passwordHash: adminPasswordHash,
};

// Exporta el objeto de credenciales
export { admin };