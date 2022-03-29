import { companies } from "../configs";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

export const registerCompanyController = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  let company = {
    ...req.body,
    id: uuidv4(),
    vehicles: [],
    password: hashedPassword,
  };

  companies.push(company);

  res.status(201).json({ message: "Company successfully created", company });
};
