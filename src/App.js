import './App.css';
import { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';


class App extends Component { //컴포넌트 만드는 코드
  constructor(props) {//렌더보다 먼저실행되면서 초기화 시켜주고싶은 코드는 constructor 안에씀
    super(props);
    this.state = {//state의값 초기화
      mode : 'welcome',
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      welcome:{title:'Welcome!', desc:'Hello, React!'},
      contetns:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if(this.state.mode == 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode == 'read'){
      _title = this.state.contetns[0].title;
      _desc = this.state.contetns[0].desc;
    }
    return (
      <div className="App">
        <Subject title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>
        <TOC data={this.state.contetns}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
