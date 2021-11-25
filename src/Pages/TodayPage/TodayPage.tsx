import style from "./todayPage.module.scss";
import Header from "../../components/Main/Header/Header";
import { useAppSelector } from "../../services/hooks";
import TaskList from "../../components/Sub/TaskList/TaskList";

const TodayPage = () => {

  const data = useAppSelector((state) => state.todoReducers.data);

  return (
    <div className={style.container}>
      <Header />
      {!data.length && <h5 className={style.emptyList}>Список задач пуст</h5>}
      {data.length > 0 && <TaskList />}
    </div>
  );
};

export default TodayPage;
