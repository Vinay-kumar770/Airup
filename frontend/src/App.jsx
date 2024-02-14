import React from 'react';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import AirUP from "./open/airup";
import Entre from './entre/entre';
import Inves from './inves/inves';
import SubmissionForm from './entre/pages/submission';
import EntrepreneurRegister from './entre/pages/signin/sign';
import InvestorRegister from './inves/pages/sign';
import InvestorDashboard from './inves/pages/dashboard';
import EntrepreneurDashboard from './entre/pages/Dashboard';

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
         <Route path="/entrepreneur" element={<Entre/>}/>
         <Route  path="/investor" element={<Inves/>}/>
         <Route path="/entrepreneurRegistration" element={<EntrepreneurRegister/>}/>
         <Route path="/investorRegistration" element={<InvestorRegister/>}/>
         <Route path="/investor/:userId" element={<InvestorDashboard/>}/>
         <Route path="/investor/:userId/profile" element={<InvestorDashboard/>}/>
         <Route path="/investor/:userId/listIdeas" element={<InvestorDashboard/>}/>
         <Route path="/investor/:userId/:ideaId" element={<InvestorDashboard/>}/>
         <Route path="/investor/:userId/myBids" element={<InvestorDashboard/>}/>
         <Route path="/entrepreneur/:userId" element={<EntrepreneurDashboard/>}/>
         <Route path="/entrepreneur/:userId/submission" element ={<SubmissionForm/>}/>

      </Routes>

      </Router>
      </Auth0Provider>
    );
  }
}

export default App;





