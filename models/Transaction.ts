import mongoose, { Schema, type InferSchemaType } from 'mongoose';

const TransactionSchema = new Schema(
      {
            name: { type: String, required: true },
            email: { type: String, required: true },
            plan: { type: String, required: true },
            amount: { type: Number, required: true },
            currency: { type: String, required: true, default: 'USD' },
            paymentMethod: { type: String, required: true, enum: ['card', 'crypto', 'onramppay'] },
            provider: { type: String, required: true, enum: ['flutterwave', 'nowpayment', 'onramppay'] },
            status: { type: String, required: true, default: 'pending' },
            reference: { type: String, required: true, unique: true },
            redirectUrl: { type: String, required: true },
      },
      { timestamps: true }
);

export type Transaction = InferSchemaType<typeof TransactionSchema>;

const TransactionModel = mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);

export default TransactionModel;
