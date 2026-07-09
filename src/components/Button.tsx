function Button() {
  const showAlert = (text: string) => {
    alert(text);
  };

  return (
    <button
      className=" text-white p-2 px-4 rounded-md text-sm bg-black"
      onClick={() => {
        showAlert("hello react");
      }}
    >
      Click me
    </button>
  );
}

export default Button;
