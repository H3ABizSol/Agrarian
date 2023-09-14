import jwt from "jsonwebtoken";
const jwt_key: any = process.env.JWT_TOKEN;

const jwtToken = async (id: any) => {
  const token = jwt.sign({ id }, jwt_key);
  return token;
};

export default jwtToken;
