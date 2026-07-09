import { useRef } from "react";

export function RefHook() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    inputRef.current?.focus();
    inputRef.current?.select();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Search..." />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
