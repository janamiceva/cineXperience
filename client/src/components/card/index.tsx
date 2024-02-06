import { Box, Button, InputBase, Typography } from '@mui/material';
import { useState } from 'react';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements'
import { axiosIntance } from '../../interceptors/auth-interceptor';
import { useCardStore } from '../../store/card-store';

interface IFormProps extends ReactStripeElements.InjectedStripeProps {
}

interface ICardProps {
    handleReserve: () => void;
}

function Card({ stripe, handleReserve }: IFormProps & ICardProps) {

    const [name, setName] = useState('')
    const amount = useCardStore().totalPrice

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const result = await stripe?.createToken({ name })
            const token = result?.token?.id
            await axiosIntance.post('/payment/pay', {
                headers: {
                    'Content-type': 'application/json'
                },
                body: ({ token, amount })
            })
            handleReserve()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Box sx={{ width: 'inherit' }}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Typography>Card Holder</Typography>
                <InputBase
                    sx={(theme) => ({
                        borderBottom: '1px solid black',
                        marginBottom: theme.spacing(2),
                        height: theme.spacing(2.5),
                    })}
                    type="text"
                    className=" input-group my-1 p-1 border border-dark"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                <CardElement />
                <Button sx={{width: '100%'}} type='submit'>Pay</Button>
            </form>
        </Box>

    )
}



export default injectStripe(Card);