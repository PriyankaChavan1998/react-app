
import React from 'react'; 
  
class demoapi  extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            schools : [],
            isLoaded:false,
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
    render(){

            var{ isLoaded,schools }=this.state;
            if(!isLoaded){
                return <div>Loading.....</div>;
            }
            else{

        return(
            <div>
                <h2> API values....new</h2>
                <ul>
                    {
                        schools.data.map(data => (
                                <li key={data.id}>
                                        {data.first_name}
                                        {data.last_name}
                                </li>
                        ))}
                </ul>
            </div>
        );
            }//else
    }
} 
export default demoapi; 








  
