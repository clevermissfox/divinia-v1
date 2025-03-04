export default function getZodiacSign(month, day) {
  switch (month) {
    case 1:
      return day <= 19 ? "capricorn" : "aquarius";
    case 2:
      return day <= 18 ? "aquarius" : "pisces";
    case 3:
      return day <= 20 ? "pisces" : "aries";
    case 4:
      return day <= 19 ? "aries" : "taurus";
    case 5:
      return day <= 20 ? "taurus" : "gemini";
    case 6:
      return day <= 20 ? "gemini" : "cancer";
    case 7:
      return day <= 22 ? "cancer" : "leo";
    case 8:
      return day <= 22 ? "leo" : "virgo";
    case 9:
      return day <= 22 ? "virgo" : "libra";
    case 10:
      return day <= 22 ? "libra" : "scorpio";
    case 11:
      return day <= 21 ? "scorpio" : "sagittarius";
    case 12:
      return day <= 21 ? "sagittarius" : "capricorn";
    default:
      return "Invalid month";
  }
}
