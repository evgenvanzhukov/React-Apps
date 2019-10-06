import React, {Component} from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component {

  // state = {
  //   done: false,
  //   important: false
  // }

  // onLabelClick = () => {
  //     this.setState(({done}) => {
  //       return {
  //         done: !done
  //       }
  //     })
  //   }

  // onImportantClick = () => {
  //   this.setState(({important}) => {
  //     return {
  //       important: !important}
  //   })
  // }
  /*constructor() {
    super();
    this.onLabelClick = () => {
      console.log(`Done: ${this.props.label}`)
    }
  }*/

  render() {
    const {label, onDeleted, onToggleImportant, onToggleDone, important, done} = this.props;
    //const {done, important} = this.state;

    let classname = 'todo-list-item';
    if(done) classname += ' done'; 

    let classlabel = 'todo-list-item-label';
    if(important) classname += ' important';

      return (
        <span className={classname}>
          <span className={classlabel}
              onClick={onToggleDone} >
              {label}
          </span>
          <button
            className="btn btn-outline-danger btn-sm float-right"
            onClick={onDeleted}>
              <i className="fa fa-trash-o"></i>
          </button>
          <button 
            className="btn btn-outline-success btn-sm float-right"
            onClick={onToggleImportant}>
              <i className="fa fa-exclamation"></i>
          </button>
        </span>
      );
  }
}