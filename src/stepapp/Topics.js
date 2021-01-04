
import React from 'react'; 
import logo1 from '../images/logo1.png';
  
class Topics extends React.Component  { 
    
    render(){
        return(
            <div className="topics">
                {/*logo*/}
                <p className="logo">
                <img src={logo1} width="70" height="70"/></p>
                
                <div class="card mb-3" id="mydemo1">
                        
                        <div class="card-body1">
                            <h3 class="card-title" id="free1">LIGHT</h3><br/><br/>
                            <p class="card-text">Introduction to Light,<div>Tranparent,Transculent and opaque materials,</div><br/><b><div>7 islands - 28 Concepts</div></b></p>
                            <button type="button" class="btn btn-warning btn-lg btn-block" id="mybtn1" ><p class="pro"><b>Play</b></p></button>
                            

                        </div>
                </div>
                <div class="card mb-3" id="mydemo2">
                        
                        <div class="card-body2">
                            <h3 class="card-title" id="free2">Magnetism</h3><br/><br/>
                            <p class="card-text">World of magnets,Poles of magnet,<div>+6 more</div><br/><b><div>8 islands - 32 Concepts</div></b></p>
                            <button type="button" class="btn btn-warning btn-lg btn-block" id="mybtn2" ><p class="pro"><b>Unlock</b></p></button>
                            

                        </div>
                </div>
                <div class="card mb-3" id="mydemo3">
                        
                        <div class="card-body3">
                            <h3 class="card-title" id="free3">Habitat & Adaptations</h3><br/><br/>
                            <p class="card-text">Introduction to Light,<div>Tranparent,Transculent and opaque materials,</div><br/><b><div>7 islands - 28 Concepts</div></b></p>
                            <button type="button" class="btn btn-warning btn-lg btn-block" id="mybtn3" ><p class="pro"><b>Unlock</b></p></button>
                            

                        </div>
                </div>
                <div class="card mb-3" id="mydemo4">
                        
                        <div class="card-body4">
                            <h3 class="card-title" id="free4">Water</h3><br/><br/>
                            <p class="card-text">Water: A Natural Gift,<div>Sources of water,+10 more islands</div><br/><b><div>12 islands - 48 Concepts</div></b></p>
                            <button type="button" class="btn btn-warning btn-lg btn-block" id="mybtn4" ><p class="pro"><b>Unlock</b></p></button>
                            

                        </div>
                </div>
                <div class="card mb-3" id="mydemo5">
                        
                        <div class="card-body5">
                            <h3 class="card-title" id="free5">The Leaf</h3><br/><br/>
                            <p class="card-text">Introduction to the Plant System,<div>Root Systems,+9 more</div><br/><b><div>11 islands - 44 Concepts</div></b></p>
                            <button type="button" class="btn btn-warning btn-lg btn-block" id="mybtn5" ><p class="pro"><b>Unlock</b></p></button>
                            

                        </div>
                </div>
                <div class="card mb-3" id="mydemo6">
                        
                        <div class="card-body6">
                            <h3 class="card-title" id="free6">The Flower</h3><br/><br/>
                            <p class="card-text">Flowers,Whorls of a Flower<div>+7 more islands</div><br/><b><div>9 islands - 36 Concepts</div></b></p>
                            <button type="button" class="btn btn-warning btn-lg btn-block" id="mybtn6" ><p class="pro"><b>Unlock</b></p></button>
                            

                        </div>
                </div>
                <p className="pro9" style={{color:'white'}} >
                    <p>All Right Reserved| STEPAPP 2019</p>
                </p> 
            </div>
            
        );
    }
} 
export default Topics; 
