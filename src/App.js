import React, { Component } from 'react';
import MessageForm from "./lib/components/message-form/message-form";
import createBrowserHistory from 'history/createBrowserHistory';
import {BrowserRouter, Link} from "react-router-dom";
import Route from "react-router/es/Route";
import './App.css'


const history  = createBrowserHistory();

const Chats = ({match}) => {
    let chats= [];
    for (let i = 0; i < 15; i++) {
        chats.push(<li className="chatLi"><Link to={`${match.url}/chatId=${i}`}>chat{i}</Link></li>)
    }
    return (

            <div className="ListChats">
                {chats}
            </div>

    );
}

const  Li = () => (
    <div className='Auth'>
        <h2>Authorization</h2>

    </div>
)

class Menu extends Component {
    constructor(props){
        super(props);
        this.toggle=this.toggle.bind(this);
        this.state = {
            opacity: false
        }
    }
    toggle() {
        this.setState({
            opacity: !this.state.opacity
        })
    }


    render() {
        const style = {

            opacity: +this.state.opacity,
        }


        return <div className="head" >
            <div className="MenuZone" onClick={this.toggle}  >
                <i id="3" className="material-icons">reorder</i>
            </div>

            <div className="chooseMenu" style={style}>

                <ul className="subMenu">
                    <li><Link to="/" className="item">Li</Link></li>
                    <li><Link to="/list_chats" className="item">Chats</Link></li>

                </ul>
            </div>

            <Route exact path="/list_chats" render={() => <div className="Dialogs"><b>Диалоги</b></div>}/>
        </div>
    }
}

class App extends Component {
  render() {
      return <BrowserRouter history={history}>
          <div className="Main">
              <Menu>

              </Menu>
              <hr className="line" size="4" color="black"/>

              <Route exact path="/" component={Li}/>
              <Route exact path="/list_chats" component={Chats}/>
              <Route path='/list_chats/chatId=1' component={() => <MessageForm id = "1"/>} />
              <Route path='/list_chats/chatId=2' component={() => <MessageForm id = "2"/>} />
              <Route path='/list_chats/chatId=3' component={() => <MessageForm id = "3"/>} />
              <Route path='/list_chats/chatId=4' component={() => <MessageForm id = "4"/>} />
              <Route path='/list_chats/chatId=5' component={() => <MessageForm id = "5"/>} />
              <Route path='/list_chats/chatId=0' component={() => <MessageForm id = "0"/>} />


          </div>

      </BrowserRouter>


  }
}

export default App;
