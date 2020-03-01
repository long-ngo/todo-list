import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todoItems: [
        { title:'Đi đá bóng', isComplete: false }, 
        { title:'Đi đổ xăng', isComplete: false }, 
        { title:'Đi chơi', isComplete: false }
      ]
    }
  }

  onItemClicked(item, index) {
    return () => {
      const {todoItems} = this.state;
      todoItems[index].isComplete = !item.isComplete;
      this.setState({
        TodoItem: todoItems
      });
    }
  }

  render() {
    const {todoItems} = this.state;
    return (
      <div className="App">
        {
          todoItems.length > 0 && todoItems.map((item, index) => 
          <TodoItem 
            key={index} 
            item={item}
            onClick={this.onItemClicked(item, index)}
          />)
        }
        { todoItems.length === 0 && 'Nothing here' }
      </div>
    );
  }
}

export default App;
