function App() {
  const handleClick = () => {
    window.ipcRenderer.send("click");
  };
  return (
    <>
      <div onClick={handleClick}>xin chào</div>
    </>
  );
}

export default App;
