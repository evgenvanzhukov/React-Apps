import React, {Component} from 'react';
import Appheader from '../app-header/';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFiter from '../item-status-filter/';
import ItemAddForm from '../item-add-form/';

export default class App extends Component {

  maxId=100;

  state = {
    todoData: [
      this.createTodoItem('Drink Tea',false,true),
      this.createTodoItem('Build Awesome App',true),
      this.createTodoItem('Get High'),
    ],
    search: '',
    filterBtn: ''
  }

  createTodoItem(label,important=false,done=false) {
    return {
      label,
      important: important,
      done: done,
      key: this.maxId++
    }
  }

  onSearching = (searchText) => {
    this.setState( () => {
      return {
        search: searchText
      }
    });
  }

  delItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.key === id);
      const newArray = [...todoData.slice(0,idx), ...todoData.slice(idx+1)]

      return {
        todoData: newArray
      }
    })
  }

  addItem = (text) => {
    this.setState(({todoData}) => {
      return {
        todoData: [...todoData, this.createTodoItem(text)]
      }
    }); 
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.key === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, 
      [propName]: !oldItem[propName]};

      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
      ];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
        };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onDoneClick = () => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter(el => el.done)
      }
    });
  };

  setStatusFilter = (statusFilter) => {
    this.setState(({ filterBtn }) => {
      return {
        filterBtn: statusFilter
      }
    }

    )
  }
  render() {
    const { todoData } = this.state;

    let visibleItems = todoData
        .filter((el) => el.label.toLowerCase().indexOf(this.state.search.toLowerCase())>=0);
    

    switch(this.state.filterBtn){
      case 'done':
        visibleItems = visibleItems.filter((el) => el.done);
        break;
      case 'active':
        visibleItems = visibleItems.filter((el) => !el.done);
        break;
      default:
        visibleItems = visibleItems;
        break;
    }

    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div>
        <Appheader todo={todoCount} done={doneCount} />
        <SearchPanel onSearchChange={this.onSearching}/>
        <ItemStatusFiter 
          onSetFilter={this.setStatusFilter}/>
        <TodoList
          todos={visibleItems}
          onDeleted={this.delItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          />
        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    );
  }
}