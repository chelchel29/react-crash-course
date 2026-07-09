function TestForm() {
  const handleClick = () => {
    alert("hello world");
  };

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement, HTMLInputElement> | undefined,
  ) => {
    console.log(event?.target.value);
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleInput}
        placeholder="Type something..."
      />
      <button onClick={handleClick}>Click Me</button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default TestForm;
