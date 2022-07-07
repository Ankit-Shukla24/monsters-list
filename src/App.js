// import logo from './logo.svg';
import './App.css';
import './card-list.style.css';
import React,{Component} from 'react';
import { CardList } from './component/card-list/card-list.components';
import { SearchBox} from './component/search-box/search-box.component';
class App extends Component
{
  constructor(){
    super();

    this.state={
      monsters:[],
      searchField:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => this.setState({monsters:data}));
  }

  onSearchChange = event => {
 
    console.log(event);
    this.setState({searchField:event.target.value});
  };

  render()
  {

  const {monsters,searchField} = this.state;

  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));

    return (
      <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox onSearchChange = {this.onSearchChange}/>
<CardList monsters = {filteredMonsters}></CardList>
    </div>
    );
  }

}

export default App;
