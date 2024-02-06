import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, styled } from "@mui/material";

const StyledDropDown = styled(FormControl)({
    minWidth: 120,
    bottom: 7,
    marginLeft: 20,
    '& .MuiInputBase-root:after': {
        borderBottom: '2px solid white',
    },
    '& .MuiFormLabel-root.Mui-focused': {
        color: 'white'
    },
    '& .MuiSvgIcon-root': {
        color: 'white'

    },
    '& .MuiInputBase-root': {
        color: 'white'
    }
})

type DropDownProps = {
    genre: string;
    handleChangeDropDownOption: (event: SelectChangeEvent) => void
}


function DropDown({ genre, handleChangeDropDownOption }: DropDownProps) {

    return (
        <StyledDropDown variant="standard">
            <InputLabel id="demo-simple-select-standard-label" sx={{ color: 'white' }}>Genre</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={genre}
                onChange={handleChangeDropDownOption}
                label="Genre"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={'Romance'}>Romance</MenuItem>
                <MenuItem value={'Drama'}>Drama</MenuItem>
                <MenuItem value={'Science Fiction'}>Sci-Fi</MenuItem>
                <MenuItem value={'Action'}>Action</MenuItem>
                <MenuItem value={'Adventure'}>Adventure</MenuItem>
                <MenuItem value={'Thriller'}>Thriller</MenuItem>
                <MenuItem value={'Crime'}>Crime</MenuItem>
            </Select>
        </StyledDropDown>
    )
}

export default DropDown;