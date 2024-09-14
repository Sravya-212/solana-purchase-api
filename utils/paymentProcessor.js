export const processPayment = async (_paymentMethod, _amount, _currency) => {
    //Mock function
    try{
        await new Promise((resolve) => setTimeout(resolve, 1000));
        //Mock response
        return {
            success: true,
            transactionId: '12345',
        };
    } catch (error) {
        return {
            success:false,
            error: 'Payment processing failed',
        };
    }
};