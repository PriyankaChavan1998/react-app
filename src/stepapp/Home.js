import React from 'react'; 
import { Redirect } from 'react-router-dom'
import stepapp from '../images/stepapp.png';
import Vector from '../images/Vector.png';
import stepapp2 from '../images/stepapp2.png';
import stepapp3 from '../images/stepapp3.png';
import imagelast from '../images/imagelast.png';
import imagelast1 from '../images/imagelast1.png';
import imagelast2 from '../images/imagelast2.png';
import logo1 from '../images/logo1.png';

import Login from './Login';
import $ from 'jquery';



  
class Home extends React.Component  { 

  
   /* new code*/
   constructor(props){
    super(props);
    this.state = {
        schools : [],
        isLoaded:false,
        value:" ",
        
    }
   
  
}



componentDidMount(){
  fetch('https://reqres.in/api/users?page=2')
  .then(res => res.json())
  .then(json => {
      this.setState({
          isLoaded:true,
          schools : json,
      })

  });
}
   

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
          return <Redirect to='Login' />
        }
      }
    render(){
      var{ isLoaded,schools }=this.state;
      if(!isLoaded){
        return <div>Loading.....</div>;
       

    }
    
    else{
    return (
            
        
        <div className="home">
           
            {/*<div className="name">
            <p id="namedisplaycorner">welcome    {schools.data[0].first_name}</p>
            </div>*/}
            {/*logo*/}
            <div className="main">
            <p className="logo">
            <img src={logo1} width="70" height="70"/></p>
            </div>
          
          
            {/*1st part*/}
           <p className="root2" style={{color:'white'}}>
            <p id="belowlogo" >
              <div className="firsttext" >
                Students from class 5th to 11th ,Here is Your Dream <div>Opportunity!</div>
              </div></p>
            <div></div>
            <p></p><br/>
                <h1 id="secondtext">
            <div>{"Play,Learn & Build Your"}</div> 
            <div>{"Own Future"}</div>
            </h1>
            
            </p>
            {/* 2nd part*/}
            <p className="root3"  >
                <div id="imagestepapp">
                <img src={stepapp} width="100"  height="72"  class="centre"/>
                </div>
                
                <h4><p style={{ textAlign:'center',fontSize:'30px',color:'white',paddingTop:'30px'}}>Select School</p></h4>
                
                
                
                  


                    {/* dropdown*/}
                    <div class="dropdown">
                            <div>
                            <select class="form-control" id="inputGroupSelect04" data-toggle="dropdown" name="sname" onClick={this.check} >
                                      
                                              <option selected>School Name</option>
                                              {/*<option value="1">St.Francis Highschool</option>
                                              <option value="2">New Era Highschool</option>
                                                <option value="3">Maratha Highschool</option>*/}
                                                        {
                                                schools.data.map( data =>(
                                                  <option key={data.id} value={data.first_name}>
                                                      {data.first_name + data.last_name}
                                                  </option>
                                                  
                                                )) }
                                      
                            </select>
                               {/* <Login name={schools.data[0].first_name}/>*/ }                              
                               
                                
                                                 
                            </div>
                        
                    </div>
                    
                    
                    
                    

                <div class="row">
                {this.renderRedirect()}
                    <button type="button" class="btn btn-warning btn-lg btn-block" id="mybtn" onClick={this.setRedirect} ><p class="pro"><b>Proceed</b></p></button>
                    
                </div>
                
            </p>
            {/* 3rd part*/}
            <div id="page-wrap">
                <div id="header">
                
                <img src={Vector} width="100"  height="100" class="centre1"/><br/><br/>
                <b>Adaptive Learning</b>
                <p>Learning is made fun and easy for kids<div>through STEPAPP's engaging gamified</div>
                <div>platform</div></p>
                
                </div>

                <div id="main-content">
                
                <img src={stepapp3} width="100"  height="100" class="centre1"/><br/><br/>
                <b>Rewards and Scholarships</b>
                <p> STEPapp scholarships will award 10,000<div> students of each grade(5th-11th)</div></p>
                </div>


                <div id="clear:both;">
                
                <img src={stepapp2} width="100"  height="100" class="centre1"/><br/><br/>
                <b>Mapped To School Curriculam</b>
                <p>STEPapp Concepts is mapped to the <div>curriculam of school boards(CBSE,</div>
                <div>ICSE)</div></p>
                </div>
            </div>
            {/* 4th part */}
            <div className="pro4">
                <h1 id="text">What Students Say</h1>
                <p> Semaj Africa is an online education platform that delivers video courses ,programs and
                <div>resorces for individual ,Advertising & Media Specialist</div>
                </p>
            </div>
            {/* 5th part*/}
            <div className="pro5">
                    <div class="row">
                        
                          
                          <div class="column">
                            
                            <div class="card">
                              
                              <br/><br/>
                              <p>Without a doubt the biggest impact of using 
                                <div>'Evidence for learning' is on staff time and</div>
                                <div>organisation of imformation.The product's</div>
                                <div>price in comparison to hours saved</div>
                                <div>represents great value</div>
                              </p>
                                <h4><b>Arthur Broklyn</b></h4>
                                <p>Grade:5th</p>
                            
                            </div>
                        </div>
                        
                          
                          <div class="column">
                            <div class="card">
                              <br/><br/>
                              <p>Without a doubt the biggest impact of using 
                                <div>'Evidence for learning' is on staff time and</div>
                                <div>organisation of imformation.The product's</div>
                                <div>price in comparison to hours saved</div>
                                <div>represents great value</div>
                              </p>
                                <h4><b>Arthur Broklyn</b></h4>
                                <p>Grade:5th</p>
                            
                            </div>
                          </div>

                          <div class="column">
                            <div class="card">

                              <br/><br/>
                              <p>Without a doubt the biggest impact of using 
                                <div>'Evidence for learning' is on staff time and</div>
                                <div>organisation of imformation.The product's</div>
                                <div>price in comparison to hours saved</div>
                                <div>represents great value</div>
                              </p>
                                <h4><b>Arthur Broklyn</b></h4>
                                <p>Grade:5th</p>
                            
                            </div>
                          </div>

                          <div class="column">
                            <div class="card">
                              <br/><br/>
                              <p>Without a doubt the biggest impact of using 
                                <div>'Evidence for learning' is on staff time and</div>
                                <div>organisation of imformation.The product's</div>
                                <div>price in comparison to hours saved</div>
                                <div>represents great value</div>
                              </p>
                                <h4><b>Arthur Broklyn</b></h4>
                                <p>Grade:5th</p>
                            
                            </div>
                          </div>

                  </div>
                    
            </div>
            {/* 6th part */}
            <p className="pro7" style={{color:'white'}}>
                <img src={imagelast} width="100" height="100" id="last"/>
                <img src={imagelast1} width="100" height="100" id="last1"/>
                <img src={imagelast2} width="100" height="100" id="last2" />
                <h3><p id="rect">2,679</p></h3>
                <h3><p id="rect1">10,000</p></h3>
                <h3><p id="rect2">#10</p></h3>
                <p id="content1">Student has been helped <div>to achieve their dreams</div> </p>
                <p id="content2">More than 10,000 people <div>visits our site monthly</div> </p>
                <p id="content3">Ranked among the top 10 growing <div>online learning startups in west Africa</div> </p>
        
            </p>
            {/* 7th part */}
            <p className="pro9" style={{color:'white'}} >
                <p>All Right Reserved| STEPAPP 2019</p>
            </p>    



                  <div>
                 
                    </div>
            

        </div> 
    
    
    );
              }//else
    }
} 

export default Home; 
