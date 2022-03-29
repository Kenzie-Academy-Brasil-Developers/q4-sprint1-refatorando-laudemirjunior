import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { config, companies } from "../configs";

export const loginCompanyService = async (data) => {
  const { cnpj, password } = data;
  const company = companies.find((_) => _.cnpj === cnpj);
  if (!company) {
    return undefined;
  }
  const match = await bcrypt.compare(password, company.password);
  if (!match) {
    return undefined;
  }

  const token = jwt.sign({ cnpj }, config.secret, {
    expiresIn: config.expiresIn,
  });

  return {
    token,
    company,
  };
};
