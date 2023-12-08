import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["Sydney", "Melbourne", "Brisbane"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Alert>
        This is a test <span>alert!</span>
      </Alert>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button color="secondary" onClick={() => console.log("clicked")}>
        My Botton
      </Button>
    </div>
  );
}

export default App;
