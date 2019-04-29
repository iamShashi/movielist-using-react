import React from 'react';
import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faUserSecret} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../node_modules/font-awesome/css/font-awesome.css';




library.add(fab, faUserSecret, faCheckSquare);



function App() {
  return (
    <div className="content">
  <div className="container">
      <div className="col-md-6 col-md-4 ml-auto mr-auto">
        <form className="form login-form" method="POST"  noValidate autoComplete="off">
          <div className="card card-login">
            <div className="card-header text-center">
              <label className="form-label">
              LOGIN
              </label>
            </div>
            <div className="card-body">
              <div className="form-group" style={{marginTop: '2%'}}>
                <label className="form-label">User ID:</label>
                <div className="row form-input-row" tabIndex="1">
                  <div className="col-md-1 no-padding text-center">
                    <i className="fa fas fa-user-secret" style={{paddingTop: '40%'}}></i>
                  </div>
                  <div className="col-md-11 no-padding">
                    <input type="text" className="form-control no-border no-padding" required />
                    <div>
                      <div>
                      <i className="fa fas fa-frown-o"></i>
                      <label className="form-error">Password is required!</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group" style={{marginTop: '6%'}}>
                <label className="form-label" >Password:</label>
                <div className="row form-input-row" tabIndex="1">
                  <div className="col-md-1 no-padding text-center">
                    <i className="fa fas fa-key" style={{paddingTop: '40%'}}></i>
                  </div>
                  <div className="col-md-10 no-padding">
                    <input className="form-control no-border no-padding" formControlName="pass" required />
                    
                    <div>
                      <div>
                      <i className="fa fas fa-frown-o pt-3"></i>
                      <label className="form-error">Password is required!</label>
                    </div>
                    </div>
                  </div>
                  <div className="col-md-1 no-padding">
                    <button  type="button" className="btn float-right no-padding" style={{width: '100%',height: '100%'}}>
                    <i className="fa fa-eye"></i>
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button  type="button" className="btn btn-primary float-left">Forgot Password</button>
              <button type="submit" className="btn btn-primary float-right">Login</button>
            </div>
          </div>
        </form>
      </div> 
  </div>
</div>
  );
}

export default App;
