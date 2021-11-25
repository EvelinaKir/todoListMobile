import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../services/hooks";
import { todoActions } from "../../../services/reducers/reducer";
import style from "./taskList.module.scss";
import { Ttask } from "../../../services/reducers/reducer";

const TaskList = () => {

  const data = useAppSelector((state) => state.todoReducers.data);
  const res = data.map((elem) => {return <Task key={elem.id} elem={elem} />});

  return (
  <ul className={style.MainContainer}>{res}</ul>
  );
};

const Task: FC<{ elem: Ttask }> = ({ elem }) => {
  const { deleteTask, data } = useAppSelector((state) => state.todoReducers);
  const [value, setValue] = useState<boolean>(false);
  const { changeTaskPoint, showModal, writeCurrentTask,changetoDoList } = todoActions;

  const dispatch = useAppDispatch();
  
  const checkboxStyle = deleteTask ? style.deleteCheckbox : style.checkbox;

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (deleteTask) {
      const newArr = [...data].filter((el) => el.id !== elem.id);
      dispatch(changetoDoList(newArr));
    } else {
      setValue(e.target.checked);
    };
  };
  const openChange = (elem: Ttask) => {
    dispatch(writeCurrentTask(elem));
    dispatch(changeTaskPoint(true));
    dispatch(showModal(true));
  };

  return (
    <li className={style.oneTask}>
      <input
        id={String(elem.id)}
        type="checkbox"
        className={checkboxStyle}
        checked={value}
        onChange={(e) => handleCheckbox(e)}
      />
      <label htmlFor={String(elem.id)}>
        <span>{!deleteTask && elem.task}</span>
      </label>
      <span onClick={() => openChange(elem)} className={style.delText}>
        {deleteTask && elem.task}
      </span>
    </li>
  );
};

export default TaskList;
