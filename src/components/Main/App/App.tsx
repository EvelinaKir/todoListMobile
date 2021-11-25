import style from "./app.module.scss";
import TodayPage from "../../../Pages/TodayPage/TodayPage";
import AddButton from "../../Sub/AddButton/AddButton";
import TaskModal from "../Modals/TaskModal";

const App = () => {
  
  return (
    <div className={style.container}>
      <TodayPage />
      <AddButton />
      <TaskModal />
    </div>
  );
};

export default App;
