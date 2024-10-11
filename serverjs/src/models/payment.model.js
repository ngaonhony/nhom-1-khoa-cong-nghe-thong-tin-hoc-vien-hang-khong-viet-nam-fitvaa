const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ['credit_card', 'debit_card', 'paypal', 'zalo_pay'], 
    required: true, 
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'], 
    default: 'pending', 
  },
  transactionId: {
    type: String,
    unique: true, 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports= mongoose.model("Payment", paymentSchema);