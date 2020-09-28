import React, {useState, useCallback} from 'react';
import NewsList from "./components/NewsList";
import axios from "axios";
import Categories from './components/Categories';

const App = () => {
  const[category, setCategory] = useState('all');
  const onSelect = useCallback(category=>setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect}></Categories>
      <NewsList category={category}></NewsList>
    </>
  )
}
// function App() {
//   return (
//     <div className="App">
//       <h1>hello</h1>
//     </div>
//   );
// }

export default App;
