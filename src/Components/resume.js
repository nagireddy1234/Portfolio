import React,{Component} from 'react';
import {Grid,Cell,ProgressBar} from 'react-mdl';

class Resume extends Component{
render(){
  return(
    <div className="Resume-page">
     <Grid className="Resume-page-grid">
        <Cell col={4} className="Resume-page-grid-1">
        <img src="https://yt3.ggpht.com/a-/AN66SAwBRJx2eUUyZvfkx8N4fK9M3Xn9vm-5Ow2Phg=s900-mo-c-c0xffffffff-rj-k-no" className="avatar-img" alt="avatar" ></img>
        <h2> Nagi reddy </h2>
        <h3>Software Programmer</h3>
        <hr/>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <hr/>
        <h4>Address</h4> 
        <p>Wilcza 42, Warsaw-05789, POland</p>
        <h4>Phone</h4> 
        <p>ph:(48) 579162125 <br/> What's app:(47) 40563717 </p>
        <h4>Email</h4> 
        <p>Nagireddy.panditi@gmail.com</p>
        <h4>Web</h4> 
        <p>Myportfolio.com</p>
        <hr/>
        </Cell>

        <Cell col={8} className="Resume-page-grid-2">
         <h1 style={{paddingLeft:"0.5em"}}>Education</h1>

         <Grid className="Education-grid">

        <Cell col={4} className="Education-grid-1">
        <h6 style={{marginTop:"0px", paddingLeft:"1em"}}>2007-2011</h6>
        </Cell>

        <Cell col={8} className="Education-grid-2">
        <h3 style={{marginTop:"0px"}}>Acharya Nagarjuna University</h3>
        <p style={{textAlign: "justify", width:"85%"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        </Cell>
         </Grid>
         <Grid className="Education-grid">
             
        <Cell col={4} className="Education-grid-1">
        <h6>2011-2013</h6>
        </Cell>

        <Cell col={8} className="Education-grid-2">
        <h3>Tallinn Tech University</h3>
        <p style={{textAlign: "justify", width:"85%"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        </Cell>
         </Grid>
         <hr/>
         
         <h1 style={{paddingLeft:"0.5em"}}>Experience</h1>
            <Grid className="Education-grid">

        <Cell col={4} className="Education-grid-1">
        <h6>2007-2011</h6>
        </Cell>

        <Cell col={8} className="Education-grid-2">
        <h3>Acharya Nagarjuna University</h3>
        <p style={{textAlign: "justify", width:"85%"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        </Cell>
         </Grid>
         <Grid className="Education-grid">
             
        <Cell col={4} className="Education-grid-1">
        <h6>2011-2013</h6>
        </Cell>

        <Cell col={8} className="Education-grid-2">
        <h3>Tallinn Tech University</h3>
        <p style={{textAlign: "justify", width:"85%"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        </Cell>
         </Grid>
         <hr/>
         <h1 style={{paddingLeft:"0.5em"}}>Skills</h1>
         <Grid className="demo-grid-1">
        <Cell col={3}>
        <h6>JavaScript</h6>
        </Cell>
        <Cell col={9}>
        <ProgressBar progress={45} />
        </Cell>  
    </Grid>
    <Grid className="demo-grid-1">
        <Cell col={3}>
        <h6>HTML/CSS</h6>
        </Cell>
        <Cell col={9}>
        <ProgressBar progress={45} />
        </Cell>  
    </Grid>
    <Grid className="demo-grid-1">
        <Cell col={3}>
        <h6>NodeJS</h6>
        </Cell>
        <Cell col={9}>
        <ProgressBar progress={45} />
        </Cell>  
    </Grid>
    <Grid className="demo-grid-1">
        <Cell col={3}>
        <h6>React</h6>
        </Cell>
        <Cell col={9}>
        <ProgressBar progress={45} />
        </Cell>  
    </Grid> 

        </Cell>  
          
    </Grid>
    

    
    
    </div>
    
  );
}
}
export default Resume;