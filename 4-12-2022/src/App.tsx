import './App.css';
import List from './components/list/List';

function App() {
  const texts = ["Hello", "Welcome", "Good Bye"];
  return (
    <div>
      <List data={texts} />
    </div>
  );
}

export default App;
