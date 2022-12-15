import { useState } from 'react';
import './App.css';
import AddForm from './components/addForm/AddForm';
import List from './components/list/List';

function App() {
  const [items, setItems] = useState<string[]>(["Hello", "Welcome", "Good Bye"]);
  const addItemHadler = (itemText: string) => {
    setItems([...items, itemText]);
  };
  return (
    <div>
      <AddForm add={addItemHadler} />
      <List data={items} />
    </div>
  );
}

export default App;
