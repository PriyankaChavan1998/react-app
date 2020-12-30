
import React from 'react'; 
import { Redirect } from 'react-router-dom'
import logo1 from '../images/logo1.png';
  
class Select extends React.Component { 
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
          return <Redirect to='Demo' />
        }
      }
    render(){
        return(
            <div className="select">
                 {/*logo*/}
                <p className="logo">
                <img src={logo1} width="70" height="70"/></p>
                <div id="header">
                <b><h1>Select Grade</h1></b>
                </div>

                <div id="grade">
                <table class="table table-bordered" id="tbl">
                
                    <thead>
                        <tr>
                        <th scope="col">Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">5th</th>
                        </tr>
                        <tr>
                        <th scope="row">6th</th>
                        </tr>
                        <tr>
                        <th scope="row">7th</th>
                        </tr>
                        <tr>
                        <th scope="row">8th</th>
                        </tr>
                        <tr>
                        <th scope="row">9th</th>
                        </tr>
                        <tr>
                        <th scope="row">10th</th>
                        </tr>
                        <tr>
                        <th scope="row">11th</th>
                        </tr>
                    </tbody>
                </table>

                
                </div>
                <div >
                    {this.renderRedirect()}
                    <button type="button" class="btn btn-warning btn-lg btn-block" id="mybtn11" onClick={this.setRedirect} ><p class="pro"><b>Proceed</b></p></button>
                    
            </div>
            <span className="pro9" style={{color:'white'}} >
                <p id="last">All Right Reserved| STEPAPP 2019</p>
            </span> 
            </div>
        );
    } 
} 
export default Select; 