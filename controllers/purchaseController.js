import {processPayment} from '../utils/paymentProcessor.js';

export const buySolana = async(req, res) => {
    const {paymentMethod, amount, currency} = req.body;
    try{
        const paymentResult = await processPayment(paymentMethod, amount, currency);
        if(paymentResult.success){
            res.status(200).json({
                message: 'Payment successful, Solana purchased',
                transactionId: paymentResult.transactionId,
            });
        }
        else{
            res.status(400).json({
                message: 'Payment failed',
                error: paymentResult.error,
            });
        }
    }
    catch(error){
        res.status(500).json({
            message: 'An error occurred while processing the payment',
            error: error.message,
        });
    }
};