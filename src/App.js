import './App.css';
import { Component } from 'react';
import './components/TOC';
import './components/Article';
import './components/Subject';


class App extends Component { //컴포넌트 만드는 코드
  render(){
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"> </Subject>
        <TOC></TOC>
        <Article></Article>
      </div>
    );
  }
}

export default App;
