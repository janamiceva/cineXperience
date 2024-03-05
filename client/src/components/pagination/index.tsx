import { Box, Button, ButtonGroup, makeStyles, styled } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  '&.MuiButtonBase-root.MuiButton-root: hover': {
    border: '1px solid red',
  }
}));

type PaginationProps = {
  totalItems: number;
  currentPage: number;
  paginate: (number: number) => void;
};

function Pagination({ totalItems, currentPage, paginate }: PaginationProps) {

  const totalPages = Math.ceil(totalItems / 8);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <StyledBox>
      <ButtonGroup>
        <StyledButton
          sx={{ border: '1px solid red', color: 'white' }}
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1 > 0 ? currentPage - 1 : totalPages)}
        >
          Prev
        </StyledButton>
        {pageNumbers.map((number) => (
          <StyledButton
            key={number}
            sx={{ color: currentPage === number ? 'white' : 'red', backgroundColor: currentPage === number ? 'red' : 'transparent', border: '1px solid red' }}
            onClick={() => paginate(number)}
          >
            {number}
          </StyledButton>
        ))}
        <StyledButton
          sx={{ border: '1px solid red', color: 'white' }}
          disabled={currentPage === totalPages}
          onClick={() => paginate(currentPage + 1 <= totalPages ? currentPage + 1 : 1)}
        >
          Next
        </StyledButton>
      </ButtonGroup>
    </StyledBox>
  );
}

export default Pagination;
