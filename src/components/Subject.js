import React, { Component } from 'react';
class Subject extends Component {
    render(){//render 라고 하는 메소드가 있다. function 생략 class안의 함수는 render
     
      return (
        <header>
            <h1><a href="/"></a>{this.props.title}</h1>
            {this.props.sub}
        </header>  
      );
    }
  }

export default Subject; 
      
  
     