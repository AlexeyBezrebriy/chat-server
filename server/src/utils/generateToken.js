import jwt from "jsonwebtoken"

export const generateTokenAndSetCookie = async (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  })

  res.cookie("token", token, {
    expires: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    // secure: process.env.NODE_ENV !== "development",
  })
}
