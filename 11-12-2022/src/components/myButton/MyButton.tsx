import "./MyButton.css"

type ButtonProps = {
    children: string;
    type: "submit" | "button";
    theme: "ok" | "cancel";
    click?: () => void;
};

function MyButton({
    children,
    type,
    theme,
    click
}: ButtonProps) {
    return (
      <button type={type} onClick={click}
        style={ theme === "ok" ? {backgroundColor: "blue"} : {backgroundColor: "red"}}>
        {children}
    </button>
    );
  }
  
  export default MyButton;
  