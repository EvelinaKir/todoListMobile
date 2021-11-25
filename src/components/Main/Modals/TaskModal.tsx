import classNames from "classnames";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../services/hooks";
import { todoActions } from "../../../services/reducers/reducer";
import style from "./taskModal.module.scss";
import { Ttask } from "../../../services/reducers/reducer";

const TaskModal = () => {

  const { modal, data, changeTaskModal, currentTask } = useAppSelector(
    (state) => state.todoReducers
  );
 const { showModal, changetoDoList, changeTaskPoint, writeCurrentTask } =
    todoActions;
  const dispatch = useAppDispatch();

  const [textValue, setTextValue] = useState<string>("");

  const shown = modal && style.showIt;

  const handleAdd = () => {
    const newArr: Array<Ttask> = [...data];
    if (!changeTaskModal) {
      const newTask = {
        task: textValue,
        id: new Date().getTime(),
      };
      newArr.push(newTask);
      dispatch(changetoDoList(newArr));
    } else {
      const result = newArr.map((elem) => {
        if (currentTask && elem.id === currentTask.id) {
          const newElem = { ...elem };
          newElem.task = textValue;
          return newElem;
        } else {
          return elem;
        }
      });
      dispatch(changetoDoList(result));
    }
    handleClose();
  };

  const handleClose = () => {
    dispatch(writeCurrentTask(null));
    dispatch(showModal(false));
    dispatch(changeTaskPoint(false));
    setTextValue("");
  };

  useEffect(() => {
    if (currentTask) {
      setTextValue(currentTask.task);
    }
  }, [currentTask]);

  return (
    <div className={classNames(style.container, shown)}>
      <textarea
        value={textValue}
        onChange={(e) => {
          setTextValue(e.target.value);
        }}
        rows={changeTaskModal ? 1 : undefined}
        className={changeTaskModal ? style.inputChangeTask : style.inputTask}
        placeholder="Введите текст задачи"
      />
      <div className={style.buttons}>
        <button className={style.closeButton} onClick={handleClose}>
          Закрыть
        </button>
        <button onClick={handleAdd} className={style.saveTask}>
          {changeTaskModal ? "Сохранить" : "Добавить"}
        </button>
      </div>
    </div>
  );
};

export default TaskModal;
