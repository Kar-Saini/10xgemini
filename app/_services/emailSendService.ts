import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
export async function sendOtpEmail(to: string, otp: string) {
  await transporter.sendMail({
    from: `"10xGemini" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}`,
    html: `<h1>Your OTP is ${otp}</h1>`,
  });
}
