import { companies } from "../configs";

export const getCompanyController = (req, res) => {
  res.status(200).json(companies);
};
