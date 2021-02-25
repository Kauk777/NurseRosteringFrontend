import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './components/Header';
import CreateNurseData from './components/CreateNurseData';
import Footer from './components/Footer';
import ListNurse from './components/ListNurse';
import ViewNurse from './components/ViewNurse';

function App() {
  return (
      <div >
        <Router>
          
          <Header/>
            <div className="container">
              <Switch> 
                <Route path="/" exact component={ListNurse}></Route>
                <Route path="/nurses" component={ListNurse}></Route>
                <Route path="/add-nurse/:id" component={CreateNurseData}></Route>
                <Route path="/view-nurse/:id" component={ViewNurse}></Route>
                {/* <Route path="/view-nurse-on-particular-day/:id" component={ViewNurseOnParticularDayComponent}></Route> */}
              </Switch>
            
            </div>
          {/* <Footer/> */}
        
        </Router>
      </div>
  );
}

export default App;
