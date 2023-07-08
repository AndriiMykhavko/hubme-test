import { FieldValues, useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import Button from '@components/common/button';

import { addTask } from '@store/tasksSlice';
import { AppDispatch } from '@store/index';

import { MIM_LENGTH, REQUIRED } from '@constants/validation';

import { TextField } from '@mui/material';

import { nanoid } from '@reduxjs/toolkit';

import CustomizedAddTask from './styles';

type FormValues = {
  task: string;
};

const AddTask: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const taskID = nanoid();

  const { handleSubmit, reset, control } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      task: '',
    },
  });

  const onSubmit = (data: FieldValues) => {
    const taskData = { title: data.task, done: false, id: taskID };

    dispatch(addTask(taskData));
    reset();
  };

  return (
    <CustomizedAddTask onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="task"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            helperText={error?.message || ''}
            label="Your task"
            size="small"
            error={!!error}
            value={value}
            onChange={onChange}
            placeholder="Write your checklist text here"
          />
        )}
        rules={{ required: REQUIRED, minLength: MIM_LENGTH }}
      />

      <Button text="Add" outlineGreen type="submit" />
    </CustomizedAddTask>
  );
};

export default AddTask;

