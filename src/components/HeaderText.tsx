import Button from "./Button";

interface HeaderTextProps {
  text: string;
}

function HeaderText({ text }: HeaderTextProps) {
  return (
    <div>
      HeaderText : {text} <Button />
    </div>
  );
}

export default HeaderText;
