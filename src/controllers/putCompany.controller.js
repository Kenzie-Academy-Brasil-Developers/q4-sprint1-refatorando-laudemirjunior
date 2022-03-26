import { putCompanyService } from "../services";

export const putCompanyController = async (req, res) => {
  const responseData = await putCompanyService(req);

  res.status(200).json({ messagem: "Company updated", responseData });
};
