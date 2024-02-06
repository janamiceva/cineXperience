import { Modal, Box, SxProps } from "@mui/material"

type ModalFormProps = {
    open: boolean,
    handleClose: React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactNode,
    sx?: SxProps
}

function ModalForm({ open, handleClose, children, sx }: ModalFormProps) {
    return (
        <Modal
            open={open}
            onClose={() => handleClose(false)}
        >
            <Box sx={{
                position: 'absolute' as 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'rgba(255,255,255,0.9)',
                borderRadius: '2%',
                boxShadow: 24,
                p: 4,
                ...sx
            }}>
               {children}
            </Box>
        </Modal>
    )
}
export default ModalForm