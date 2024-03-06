import express, { Request, Response } from "express";
import Stripe from 'stripe';

const router = express.Router()

const SecretKey = process.env.STRIPE_SECRETEKEY;
const stripe = new Stripe(SecretKey as string)

const charge = (token: string, amt: number) => {
    return stripe.charges.create({
        amount: amt * 100,
        currency: 'usd',
        source: token,
        description: 'Payment for tickets'
    })
}

router.post('/pay', async (request: Request, response: Response) => {
    try {
        const token = request.body.body.token
        const amount = request.body.body.amount
        await charge(token, amount)

        response.send('Charged!')
    } catch (e) {
        console.log(e)
        response.status(500)
    }
})
export default router
