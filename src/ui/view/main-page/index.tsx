import AddTask from '@components/add-task';
import SearchTask from '@components/search-task';
import Container from '@mui/material/Container';

const Main: React.FC = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <SearchTask />
        <AddTask />
      </Container>
    </div>
  );
};

export default Main;

