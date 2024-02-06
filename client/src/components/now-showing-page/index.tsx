import * as React from 'react'
import Box from '@mui/material/Box'
import { Button, Checkbox, FormControlLabel, FormGroup, IconButton, Tab, Tabs, TextField, Typography, styled } from '@mui/material'
import getNowShowingPageTabs from './now-showing-page-tabs'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react'
import ModalForm from '../modal'
import { useForm } from 'react-hook-form'
import useAddMovie from '../../hooks/use-add-movie'
import { MovieInput } from '../../types/movie-input'
import { auth } from '../../auth/firebase-config'
import useGetUserById from '../../hooks/use-get-user'
import UserRole from '../../types/enum/user-role'

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root: after': {
    borderBottom: 'none',
  },
  '& .MuiInputBase-root: hover': {
    borderBottom: 'none',
  },
  '& .MuiInputBase-root-MuiInput-root: hover': {
    borderBottom: 'none',
  }
}))

const StyledTab = styled(Tab)(({ theme }) => ({
  color: 'white',
  '&.MuiButtonBase-root.Mui-selected': {
    color: 'white'
  }
}))

const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-flexContainer': {
    justifyContent: 'center'
  }
}))

const Container = styled(Box)(({theme})=>({
  marginTop: theme.spacing(5), 
  marginBottom: theme.spacing(6.25), 
  padding: theme.spacing(6.25),
  [theme.breakpoints.down('md')]: {
    padding: 0,
    marginTop: theme.spacing(8),
  }
}))

function MovieList() {
  const NowShowingPageTabs = getNowShowingPageTabs()
  const [isAddingMovie, setIsAddingMovie] = useState(false);
  const [activeTab, setActiveTab] = React.useState('1');
  const { mutateAsync: addNowShowingMovie } = useAddMovie();
  const { register, handleSubmit } = useForm<MovieInput>();
  const userRole = useGetUserById(auth.currentUser?.uid as string)?.data?.user?.role

  const handleChangeTab = (event: React.SyntheticEvent, newActiveTab: string) => {
    setActiveTab(newActiveTab);
  }

  const handleAddMovie = () => {
    setIsAddingMovie(true);
  }

  const addMovie = async (input: MovieInput) => {
    addNowShowingMovie(input)
    setIsAddingMovie(false);
  }


  return (
    <>
      <Container>
        <StyledTabs TabIndicatorProps={{ style: { backgroundColor: "red" } }} value={activeTab} onChange={handleChangeTab}>
          {NowShowingPageTabs.map((tab) => (
            <StyledTab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </StyledTabs>

        {userRole === UserRole.admin && <Box sx={{ color: 'white', visibility: activeTab === '1' ? 'visible' : 'hidden' }}>
          <IconButton onClick={handleAddMovie}><AddIcon sx={{ color: 'white' }} /></IconButton>
        </Box>}

        <ModalForm open={isAddingMovie} handleClose={setIsAddingMovie}>
          <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>Add a movie</Typography>
          <form style={{ display: 'flex', flexDirection: 'column', paddingTop: 10 }} onSubmit={handleSubmit(addMovie)} >
            <StyledTextField placeholder={'Add movie name'} variant="standard" {...register("name", {
              required: {
                value: true,
                message: 'Name is required'
              },
              minLength: 1
            })} />
            <StyledTextField placeholder={'Add movie description'} variant="standard" {...register("description", {
              required: {
                value: true,
                message: 'Description is required'
              },
              minLength: 1
            })} />
            <StyledTextField placeholder={'Add movie director'} variant="standard" {...register("director", {
              required: {
                value: true,
                message: 'Director is required'
              },
              minLength: 1
            })} />
            <StyledTextField placeholder={'Add movie duration'} variant="standard" {...register("duration", {
              required: {
                value: true,
                message: 'Duration is required'
              },
              minLength: 1
            })} />
            <StyledTextField placeholder={'Add movie rating'} variant="standard" {...register("rating", {
              required: {
                value: true,
                message: 'Rating is required'
              },
              minLength: 1
            })} />
            <StyledTextField placeholder={'Add movie image'} variant="standard" {...register("image", {
              required: {
                value: true,
                message: 'Image is required'
              },
              minLength: 1
            })} />
            <StyledTextField placeholder={'Add movie videoId'} variant="standard" {...register("videoId", {
              required: {
                value: true,
                message: 'VideoId is required'
              },
              minLength: 1
            })} />
            <StyledTextField placeholder={'Add movie cast'} variant="standard" {...register("cast", {
              required: {
                value: true,
                message: 'Cast is required'
              },
              minLength: 1
            })} />
            <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
              <FormControlLabel key="Romance" control={<Checkbox value='Romance' color="error" />} label="Romance" {...register("genre")} />
              <FormControlLabel key="Drama" control={<Checkbox value='Drama' color="error" />} label="Drama" {...register("genre")} />
              <FormControlLabel key="Action" control={<Checkbox value='Action' color="error" />} label="Action" {...register("genre")} />
              <FormControlLabel key="Crime" control={<Checkbox value='Crime' color="error" />} label="Crime" {...register("genre")} />
              <FormControlLabel key="Adventure" control={<Checkbox value='Adventure' color="error" />} label="Adventure" {...register("genre")} />
              <FormControlLabel key="Science Fiction" control={<Checkbox value='Science Fiction' color="error" />} label="Science Fiction" {...register("genre")} />
              <FormControlLabel key="Comedy" control={<Checkbox value='Comedy' color="error" />} label="Comedy" {...register("genre")} />
              <FormControlLabel key="Thriller" control={<Checkbox value='Thriller' color="error" />} label="Thriller" {...register("genre")} />
            </FormGroup>
            <Button sx={{ color: 'black', border: '1px solid black', fontWeight: 'bold' }} type="submit" value="submit">Add movie</Button>
          </form>
        </ModalForm>
        <Box sx={(theme) => ({ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' })}>
          {NowShowingPageTabs.map((tab) => (
            activeTab === tab.value && tab.content
          ))}
        </Box>
      </Container>
    </>
  )
}

export default MovieList;

