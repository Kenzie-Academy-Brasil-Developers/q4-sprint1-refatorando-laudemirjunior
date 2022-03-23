import { companies } from "../services";

export const getCompanyController = (req, res) => {
  res.status(200).json(companies);
};
