import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

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
    </div>
  );
}

export default App;
