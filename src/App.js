import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from '../src/Components/Home'
import NotFound from '../src/Components/not-found'
import StudentDetails from '../src/Containers/student-details'
import {applyMiddleware,createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './Reducers'
const createStoreWithMW=applyMiddleware()(createStore)
const App=()=> {
  return (
    <Provider store={createStoreWithMW(reducers)}>
    <BrowserRouter>
    <div className="container">
      <div className="row">
        <div className="col">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/students/:id" component={StudentDetails}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </div>
      </div>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
