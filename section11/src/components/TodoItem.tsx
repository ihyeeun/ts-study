import { useDispatch } from "../App";
import { Todo } from "../types";

interface Props extends Todo {}

export function TodoItem(props: Props) {
  const dispatch = useDispatch();
  const onClickButton = () => {
    dispatch.onClickDelete(props.id);
  };

  return (
    <div>
      {props.id} 번 : {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}
