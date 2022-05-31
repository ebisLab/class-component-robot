import Card from './Card';
import {data} from './data'
import SearchBox from './SearchBox';

function App() {
  return (
    <div className="App">
      <h2>awesome friends</h2>
      <SearchBox data={data}/>
      {data.map(item=> <Card key={item.id} title={item.title} />)}
    </div>
  );
}

export default App;
