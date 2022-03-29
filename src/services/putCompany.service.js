import bcrypt from "bcryptjs";
import { companies } from "../configs";

const putCompanyService = (data) => {
  const { company } = data;
  const updatedCompany = { ...company, ...data.body };

  const index = companies.indexOf(company);

  updatedCompany.password = bcrypt.hash(data.body.password, 10);

  companies[index] = updatedCompany;

  return companies;
};

export { putCompanyService };
