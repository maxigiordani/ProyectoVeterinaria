import bcrypt from "bcryptjs";

const saltRounds = 10;

const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

const adminPasswordHash = bcrypt.hashSync(adminPassword, saltRounds);

const admin = {
  username: "admin",
  passwordHash: adminPasswordHash,
};

export { admin };
