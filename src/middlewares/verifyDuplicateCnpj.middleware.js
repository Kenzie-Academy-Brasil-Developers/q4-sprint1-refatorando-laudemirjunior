import { companies } from "../services";

export const verifyDuplicateCnpjMiddleware = (req, res, next) => {
  let { cnpj } = req.body;

  let company = companies.find((company) => company.cnpj == cnpj);

  if (company) {
    return res.status(400).json({ message: "CNPJ already registered" });
  }

  return next();
};
