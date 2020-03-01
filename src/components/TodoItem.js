import React from 'react';
import className from 'classnames';
import './TodoItem.css';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';

class TodoItem extends React.Component {
  render() {
    const {item, onClick} = this.props;
    return (
      <div className={className('TodoItem', {
        'TodoItem-complete': item.isComplete
        })}>
        <img 
          onClick={onClick} 
          src={item.isComplete ? checkImg : checkCompleteImg} 
          alt='checking'
          width='32'
          height='32'
        />
        <p>{item.title}</p>
      </div>
    );
  }
}

export default TodoItem;

