import { useSelector, useDispatch } from 'react-redux';

import TaskItem, { OnDeleteTask } from '@components/common/task-item';

import {
  TaskId,
  deleteTask,
  getTasks,
  toggleTaskStatus,
} from '@store/tasksSlice';
import { AppDispatch } from '@store/index';

import CustomizedTasksList from './styles';

const TasksList: React.FC = () => {
  const tasks = useSelector(getTasks);

  const dispatch = useDispatch<AppDispatch>();

  const onToggleTaskStatus = (id: TaskId) => {
    dispatch(toggleTaskStatus(id));
  };

  const onDeleteTask: OnDeleteTask = (id: TaskId) => {
    dispatch(deleteTask(id));
  };

  const tasksList = tasks.map((item) => (
    <TaskItem
      key={item.id}
      title={item.title}
      id={item.id}
      done={item.done}
      onCheckedChange={() => {
        onToggleTaskStatus(item.id);
      }}
      onDeleteTask={onDeleteTask}
    />
  ));

  return <CustomizedTasksList>{tasksList}</CustomizedTasksList>;
};

export default TasksList;

