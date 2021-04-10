import React,{ Component } from 'react';
class TOC extends Component { //컴포넌트 만드는 코드
    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(
        <li key={data[i].id}>
          <a href={"/content/"+data[i].id}
          data-id = {data[i].id}
          onClick = {function(e){
           // e.target 에러발생
          e.preventDefault();
            this.props.onChangePage(e.target.dataset.id);
          }.bind(this)}
          >{data[i].title}</a>
        </li>);
        i = i+1;
      }
      return (
        <nav>
              <ul>
                  {lists}
              </ul>
          </nav>
      );
    }
  }

  export default TOC;
  