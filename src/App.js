import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends React.Component {
  constructor() {
    super();
    this.todoItem = [
      { title:'Đi đá bóng', isComplete: false }, 
      { title:'Đi đổ xăng', isComplete: false }, 
      { title:'Đi chơi', isComplete: false }
    ];
  }

  render() {
    return (
      <div className="App">
        {
          this.todoItem.length > 0 && this.todoItem.map((item, index) => 
          <TodoItem key={index} item={item} />)
        }
        { this.todoItem.length === 0 && 'Nothing here' }
      </div>
    );
  }
}

export default App;
