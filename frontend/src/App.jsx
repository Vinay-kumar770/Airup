import React from 'react';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import AirUP from "./open/airup";
import Entre from './entre/entre';
import Inves from './inves/inves';
import SubmissionForm from './entre/pages/submission';
import Register from './entre/pages/signin/sign';
import Auction from './inves/pages/auction';
import InvesRegister from './inves/pages/sign';

class App extends React.Component { // Use React.Component for class-based components
  render() {
    return (
      <Auth0Provider
       domain="dev-6v8a5c4rwm63g5rb.us.auth0.com"
       clientId="fjXOSxQ6esRgC6u8bswYrtdyDkszJcuC"
        authorizationParams={{
      redirect_uri: window.location.origin
     }}>
      <Router>
        <Routes>
         <Route  path="/" element={<AirUP />} />
         <Route path="/entre" element={<Entre/>}/>
         <Route  path="/inves" element={<Inves/>}/>
         <Route path="/sub" element ={<SubmissionForm/>}/>
         <Route path="/entrereg" element={<Register/>}/>
         <Route path="/invesreg" element={<InvesRegister/>}/>
         <Route path="/auction" element={<Auction/>}/>
      </Routes>

      </Router>
      </Auth0Provider>
    );
  }
}

export default App;





