import React from 'react';
import className from 'classnames';
import './TodoItem.css';

class TodoItem extends React.Component {
  render() {
    const {item, onClick} = this.props;

    return (
      <div 
        onClick={ onClick } 
        className={ className('TodoItem', {
        'TodoItem-complete': item.isComplete
      }) }>
        <p>{item.title}</p>
      </div>
    );
  }
}

export default TodoItem;

