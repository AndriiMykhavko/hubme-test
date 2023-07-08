import { useState } from 'react';
import classNames from 'classnames';

import Popup from '@components/common/popup';

import { Checkbox, IconButton, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Task, TaskId } from '@store/tasksSlice';
import { truncateText } from '@utils/truncate-text';

import CustomizedTaskItem from './styles';

export type OnCheckedChange = () => void;

export type OnDeleteTask = (id: TaskId) => void;

interface Props extends Task {
  onCheckedChange: OnCheckedChange;
  onDeleteTask: OnDeleteTask;
}

const TaskItem: React.FC<Props> = ({
  title,
  done,
  id,
  onCheckedChange,
  onDeleteTask,
}) => {
  const [toggleOpenPopup, setToggleOpenPopup] = useState(false);

  const togglePopup = () => {
    setToggleOpenPopup((prev) => !prev);
  };

  const handleSuccess = () => {
    onDeleteTask(id);
    togglePopup();
  };

  return (
    <>
      <CustomizedTaskItem>
        <Checkbox checked={done} onChange={onCheckedChange} />
        <Typography
          variant="body1"
          className={classNames({
            crossed: done,
          })}
        >
          {truncateText(title)}
        </Typography>
        <div className="hideOnHover">
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="displayOnHover">
          <IconButton onClick={togglePopup}>
            <DeleteForeverIcon />
          </IconButton>
        </div>
      </CustomizedTaskItem>
      <Popup
        open={toggleOpenPopup}
        onSuccess={handleSuccess}
        onClosePopup={togglePopup}
      />
    </>
  );
};

export default TaskItem;

