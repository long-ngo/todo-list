import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title:'Đỏ: bị phạt 30 điểm', isComplete: false },
        { title:'Đen: bị phạt 25 điểm', isComplete: false }
      ]
    }
  }
  onItemClicked(item, index) {
    return () => {
      const {todoItems} = this.state;
      // todoItems[index].isComplete = !item.isComplete;
      // this.setState({
      //   TodoItem: todoItems
      // });
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item, isComplete: !item.isComplete
          },
          ...todoItems.slice(index + 1)
        ]
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
