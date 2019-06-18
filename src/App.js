import React from 'react';
import Todos from './components/Todos'

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Clean Room',
        completed: false
      },
      {
        id: 2,
        title: 'Study GRE',
        completed: true
      },
      {
        id: 3,
        title: 'Practice React',
        completed: false
      }
    ]
  }
  render(){
    return (
      <div>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
