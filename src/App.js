import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Footer from './components/Footer/Footer';
import AuthProvider from './components/context/AuthProvider';
import Doctors from './components/Doctors/Doctors';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetail from './components/ServiceSetail/ServiceDetail';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
