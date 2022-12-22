import { FormEvent, useRef } from "react";
import MyButton from "../myButton/MyButton";

function AddForm({add}: {add: (a: string) => void}) {
    const inputRef = useRef<HTMLInputElement>(null);
    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault();
        add(inputRef.current!.value);
    }
    
    return (
      <div>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="my-input">
                    Item Name
                </label>
                <input id="my-input" ref={inputRef} />
            </div>
            <div>
                <MyButton type="submit" theme="ok">Add</MyButton>
            </div>
        </form>
      </div>
    );
  }
  
  export default AddForm;
  