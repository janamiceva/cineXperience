import { Button, ButtonProps } from "@mui/material";

type HeaderMenuItemProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode
} & ButtonProps

function HeaderMenuItem({ onClick, children }: HeaderMenuItemProps) {
    return (
        <Button onClick={onClick} sx={{ my: 2, color: 'white', display: 'block' }} >
            {children}
        </Button>
    )
}

export default HeaderMenuItem;