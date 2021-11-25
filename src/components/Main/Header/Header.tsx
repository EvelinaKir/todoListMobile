import style from "./header.module.scss";
import { useAppDispatch, useAppSelector } from "../../../services/hooks";
import { todoActions } from "../../../services/reducers/reducer";

const Header = () => {
  const { data, deleteTask } = useAppSelector((state) => state.todoReducers);
  const dispatch = useAppDispatch();
  const { deleteTaskPoint } = todoActions;
  return (
    <div className={style.container}>
      <h1 className={style.title}>Сегодня</h1>
      {data.length > 0 && (
        <button
          onClick={() => dispatch(deleteTaskPoint(!deleteTask))}
          className={style.changeButton}
        >
          {deleteTask ? "Отменить" : "Править"}
        </button>
      )}
    </div>
  );
};

export default Header;
