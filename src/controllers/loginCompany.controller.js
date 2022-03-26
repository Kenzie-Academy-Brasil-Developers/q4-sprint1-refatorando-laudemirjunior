import { loginCompanyService } from "../services";

export const loginCompanyController = async (req, res) => {
  const responseData = await loginCompanyService(req.body);
  if (!responseData.token) {
    return res.status(401).json({ message: "User and password missmatch." });
  }

  return res.status(200).json(responseData);
};
