import { Container } from "react-bootstrap"
import { AuthProvider } from '../context/AuthContext'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Signup from '../components/Signup'
import Home from '../components/Home'
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import Todolist from "./todo"
import BGImage from "../img/bg.jpg"

function App() {
  const sectionStyle = {
    backgroundImage: `url(${BGImage})`,
    
 }
  return (
    <div style={sectionStyle}>
    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }} >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <BrowserRouter>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route path="/todo" component={Todolist} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Container>
    </div>
  )
}

export default App;
