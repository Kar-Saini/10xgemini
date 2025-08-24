const numString = "1234567890";
const OTP_DIGIT = 4;
export function generateOtp() {
  let otpString = "";
  for (let i = 0; i < OTP_DIGIT; i++) {
    const randNum = Math.floor(Math.random() * numString.length);
    otpString += numString[randNum];
  }
  return otpString;
}
