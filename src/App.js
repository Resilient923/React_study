import './App.css';
import { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';


class App extends Component { //APP 이라는 컴포넌트 만드는 코드
  constructor(props) {//렌더보다 먼저실행되면서 초기화 시켜주고싶은 코드는 constructor 안에씀
    super(props);
    this.state = {//state의값 초기화
      mode: 'welcome',
      selected_content_id :2,
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      welcome: { title: 'Welcome!', desc: 'Hello, React!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' }
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      var i = 0;
      while(i< this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break
        }
        i=i+1
      }
      
    }
    return (
      <div className="App">
        {<Subject title={this.state.subject.title}//onChangePage라는 이벤트생성
          sub={this.state.subject.sub}
          onChangePage={function () {//만든이벤트
            this.setState({mode:'change'});
          }.bind(this)}
        >
        </Subject>}
        {/* <header>
          <h1>
            <a href="/" onClick={function(e){//event 생성해주기
            //hi 알림창 누름면 새로고침되는현상 발생 default값이 event로 들어감
              e.preventDefault();// default event를 막아준다.
              //this.state.mode ='hi';//이렇게 넘기면 안되는이유는 React 입장에서는 몰래 바꾼 셈이다.
              //render()가 호출되지 않는다.
              this.setState({
                mode :'hi'
              });
              //함수가 호출되면서 내부적으로 일어나는 많은 일들을 가져온다.
            }.bind(this)}>{this.state.subject.title}</a>
            {this.state.subject.sub}
          </h1>
        </header> */}
        <TOC onChangePage={function() { //props
             this.setState({
                mode:'read',
                selected_content_id:0
             });
         }.bind(this)}
          data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
