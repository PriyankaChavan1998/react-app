import React from 'react'; 
import logo1 from '../images/logo1.png';
import stepapp from '../images/stepapp.png';




class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        firstname : " "
       

        
        
    }
    this.nameEl = React.createRef();
    this.password = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    
    
  }
  handleSubmit(e) {
    {/*sessionStorage.user = JSON.stringify({name:this.nameEl.current.value });*/}
    sessionStorage.setItem("name",JSON.stringify({user:this.nameEl.current.value })); 
    {/*sessionStorage.getItem("name");*/}
    {/*let user = JSON.parse( sessionStorage.user );*/}
    e.preventDefault();
    if(this.nameEl.current.value == '')
    {
      alert('please enter name');
    }
    else if(this.password.current.value == ''){
      alert('please enter password');
    }
    
    else{
      {this.setRedirect() }
    }
  }
  

  state = {
    redirect: false
  }
  setRedirect = () => {
    {/*this.setState({
      redirect: true
    })*/}
    this.props.history.push("/Select");
  }
  renderRedirect = () => {
    {/*if (this.state.redirect) {
      return <Redirect to='Topics' />
    }*/}
  }
  render(){
    return(
      <div  className="login1">
           <form onSubmit={this.handleSubmit}>  
          {/*logo*/}
          <p className="logo">
          <img src={logo1} width="70" height="70"/></p>
          
          <img src={stepapp}   class="centre" id="myimg"/>
          {/*<b><p>welcome  {this.props.name}</p></b>*/}
         
          {/*<p>{sessionStorage.user}</p>*/}
          <p id="login2">Sign in to your account to continue</p>
          <div class="input-group mb-3" >
            
                      <input type="text" class="form-control"  name="username"   ref={this.nameEl} 
                      placeholder="First Name" id="mybtn"/>
                        {/* <Select name={this.state.name}></Select>*/}
                       
                        
             
          </div>
        
          <div class="input-group mb-3">
              
              <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" id="mybtn1"  ref={this.password}/>
              </div>
              
              {/*<input type="submit" value="Submit" />*/}
              
          
          <p id="login3">Don't have an account? <a href="url" id="href"> Sign up</a></p>
          <div >
                  {/*{this.renderRedirect()}*/}
                  <button type="button" value="submit" class="btn btn-warning btn-lg btn-block" id="mybtn11" onClick={this.handleSubmit }><p class="pro"><b>Sign In</b></p> </button>
                  
          </div>
                  <p className="pro9" style={{color:'white'}} >
                      <p>All Right Reserved| STEPAPP 2019</p>
                  </p>    
         
       </form>
       </div>

      
    );
  }
}
export default Login; 
