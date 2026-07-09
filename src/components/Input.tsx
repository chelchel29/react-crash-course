function Input() {
  const logger = (
    event: React.ChangeEvent<HTMLInputElement, HTMLInputElement> | undefined,
  ) => {
    console.log(event?.target.value);
  };
  return (
    <div className="my-4">
      <input
        placeholder="something...."
        className="border-2 ps-2 py-2"
        onChange={logger}
      />
    </div>
  );
}

export default Input;
