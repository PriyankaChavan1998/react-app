import React from 'react'; 
import { Redirect } from 'react-router-dom'
import stepapp from '../images/stepapp.png';
import logo1 from '../images/logo1.png';

  
class Login extends React.Component { 
    state = {
        redirect: false
      }
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='Select' />
        }
      }
    render(){
    return (
        
        <div  className="login1">
            
            {/*logo*/}
            <p className="logo">
            <img src={logo1} width="70" height="70"/></p>
            
           <img src={stepapp}   class="centre" id="myimg"/>
           {/*<b><p>welcome  {this.props.name}</p></b>*/}
           <p id="login2">Sign in to your account to continue</p>
           <div class="input-group mb-3">
                
                <input type="text" class="form-control" placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1" id="mybtn"/>
            </div>
            <div class="input-group mb-3">
                
                <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" id="mybtn1"/>
            </div>
           
            <p id="login3">Don't have an account? <a href="url" id="href"> Sign up</a></p>
            <div >
                    {this.renderRedirect()}
                    <button type="button" class="btn btn-warning btn-lg btn-block" id="mybtn11" onClick={this.setRedirect}><p class="pro"><b>Sign In</b></p></button>
                    
            </div>
            <p className="pro9" style={{color:'white'}} >
                <p>All Right Reserved| STEPAPP 2019</p>
            </p>    

        </div>
    );
    }
} 
export default Login; 
