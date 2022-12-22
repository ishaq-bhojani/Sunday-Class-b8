import MyButton from "../myButton/MyButton";

function Item({data}: {data: string}) {
  const onDeleteHandler = () => {};
    return (
      <div>
        {data} <MyButton type="button"
        click={onDeleteHandler} theme="cancel">
          Delete</MyButton>
      </div>
    );
  }
  
  export default Item;
  