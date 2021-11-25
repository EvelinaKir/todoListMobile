import style from "./addButton.module.scss";
import { useAppDispatch, useAppSelector } from "../../../services/hooks";
import { todoActions } from "../../../services/reducers/reducer";
import plus from "../../../images/plusButton.svg";

const AddButton = () => {
  
  const dispatch = useAppDispatch();
  const showModal = todoActions.showModal;

  return (
    <button
      className={style.addButton}
      onClick={() => dispatch(showModal(true))}
    >
      <img src={plus} />
    </button>
  );
};

export default AddButton;
