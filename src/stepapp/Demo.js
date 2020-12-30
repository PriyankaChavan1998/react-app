
import React from 'react'; 
import demo from '../images/demo.png';
import logo1 from '../images/logo1.png';
import { Redirect } from 'react-router-dom'

  
class Demo  extends React.Component { 
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
          return <Redirect to='Topics' />
        }
      }
    render(){
        return(
            <div className="demo">
                 {/*logo*/}
                 <p className="logo">
                <img src={logo1} width="70" height="70"/></p>
                <div class="card mb-3" id="mydemo">
                        <img src={demo} class="card-img-top" id="myimg"/>
                        <div class="card-body">
                            <h3 class="card-title" id="free">Free Demo</h3>
                            <p class="card-text">Play the FREE demo chapters to understand how<div>your speed and accuracy will make you win</div></p>
                            

                        </div>
                </div>
                <div class="card mb-3" id="mydemo1" >
                        {this.renderRedirect()}
                        <div class="card-body1" onClick={this.setRedirect}>
                            <h3 class="card-title" id="free1">Learn Science</h3><br/><br/>
                            <p class="card-text"><b>Light<div>Magnetism</div><div>+6 more Chapters</div></b></p>
                            <p class="card-text1"><b>8 Chapters</b></p>
                            

                        </div>
                </div>
                <div class="card mb-3" id="mydemo2">
                        
                        <div class="card-body2">
                            <h3 class="card-title" id="free2">Learn Maths</h3><br/><br/>
                            <p class="card-text"><b>Playing with numbers<div>Number system,</div><div>+7 more Chapters</div></b></p>
                            <p class="card-text2"><b>9 Chapters</b></p>
                            

                        </div>
                </div>
                <p className="pro9" style={{color:'white'}} >
                    <p>All Right Reserved| STEPAPP 2019</p>
                </p> 

            </div>
        );
    }
}
export default Demo; 