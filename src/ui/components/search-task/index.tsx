import { useDispatch } from 'react-redux';

import { TextField } from '@mui/material';

import Button from '@components/common/button';
import TasksList from '@components/tasks-list';

import useTypedSelector from '@hooks/use-typed-selector';

import { AppDispatch } from '@store/index';
import { ActiveFilter, setFilter, setSearchValue } from '@store/tasksSlice';

import CustomizedSearchTask from './styles';

const SearchTask: React.FC = () => {
  const { activeFilter, searchFieldValue } = useTypedSelector(
    (state) => state.tasks,
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleFilterChange = (type: ActiveFilter) => {
    dispatch(setFilter(type));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
  };

  return (
    <>
      <CustomizedSearchTask>
        <TextField
          label="Search by text..."
          size="small"
          onChange={handleChange}
          variant="outlined"
          value={searchFieldValue}
          fullWidth
        />

        <Button
          text="All"
          isActive={activeFilter === 'all'}
          onClick={() => handleFilterChange('all')}
        />
        <Button
          text="Done"
          checkIcon
          isActive={activeFilter === 'done'}
          onClick={() => handleFilterChange('done')}
        />
      </CustomizedSearchTask>
      <TasksList />
    </>
  );
};

export default SearchTask;

