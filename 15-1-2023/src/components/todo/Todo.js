import {
  Button,
  Checkbox,
  Divider,
  Input,
  InputRef,
  List,
  message,
} from "antd";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, doneTodo, getTodo } from "../../store/todo";

export default function Todo() {
  const { isLoading, list } = useSelector((state) => state);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");

  const fetchTodo = () => {
    dispatch(getTodo());
  };
  const addTodoHandler = () => {
    const todo = {
      done: false,
      todo: inputData,
    };
    dispatch(addTodo(todo))
      .unwrap()
      .then(() => {
        setInputData("");
        fetchTodo();
      });
  };
  const todoOnChangeHandler = (id, isDone) => {
    dispatch(doneTodo({ id, isDone }))
      .unwrap()
      .then(() => {
        fetchTodo();
      });
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div>
      {contextHolder}

      <Title>My Todo App</Title>
      <Divider />
      <Input.Group compact>
        <Input
          style={{ width: "calc(100% - 200px)" }}
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <Button type="primary" onClick={addTodoHandler}>
          Add Todo
        </Button>
      </Input.Group>
      <Divider />
      <List
        size="small"
        header={<div>Todo CheckList</div>}
        bordered
        loading={isLoading}
        dataSource={list}
        renderItem={(item, index) => (
          <List.Item>
            <Checkbox
              checked={item?.done}
              onChange={() => todoOnChangeHandler(item?.id, !item?.done)}
            >
              {item?.todo}
            </Checkbox>
          </List.Item>
        )}
      />
    </div>
  );
}
