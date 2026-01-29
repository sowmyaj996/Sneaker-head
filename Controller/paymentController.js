const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "rzp_test_1234567890",
  key_secret: "rzp_test_0987654321",
});

module.exports = razorpay;
