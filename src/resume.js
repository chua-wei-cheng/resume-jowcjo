//import React, {useState, useEffect} from 'react';

//import App from './App';
import React from 'react';
import  './App.css';


//by default runs after every re-render
// cleanup function
// second parameter 

const UseEffectBasics = () => {
	return(
		<>
		<h1>Hello World </h1>
		<div className="image1">
			<div className="image2">
				Chua Wei Cheng<br />
				<div style={{fontSize:'40px'}}>
					Hello
				</div>
			</div>
		</div>
		<div className = "gettoknowme">
			<div style={{padding:"15px 0px 0px 0px", color:"gold",fontSize:'40px'}}>
				GET TO KNOW YOU!!
			</div>
			<div style={{padding:"30px 50px 20px 0px", color:"white",fontSize:'15px'}}>
				My Background
			</div>
			<div style={{padding:"5px 30px 50px 0px", color:"white",fontSize:'15px',position:'absolute',right:'0px',left:'0px',bottom:'0px'}}>

Currently a year 4 student from National Technological University, very deeply interested in the world of <br />computing and coding related stuff. I am looking for an internship to hopefully be able to enhance my skills in  <br /> programming especially in data science and web developing
			</div>
		</div>
		<div className = "professionalhistory">
			<div style={{padding:"10px 50px 20px 0px",color:"white",fontSize:'40px'}}>
				PROFESSIONAL HISTORY
			</div>
			<div style={{padding:"0px 50px 20px 0px", color:"white",fontSize:'15px'}}>
				My Qualifications
			</div>
			<div style={{padding:"35px 50px 50px 120px", color:"white",fontSize:'15px',position:'relative'}}>
				<div style={{position:'absolute',left:'100px'}}>
					April 2018 – June 2018
				</div>
				<div style={{position:'absolute',fontSize:'20px',marginLeft:'250px'}}>
					SERVER, RITZ CARLTON
				</div>
				<div style={{textAlign:'left',position:'absolute',fontSize:'20px',marginLeft:'600px'}}>
					<dl>
						<li>Exceptional interpersonal and team building skills with an aptitude for building rapport with a diverse range of customers, managers, and colleagues.</li>
						<li>Dedicated to ensuring customer satisfaction by remaining accessible and friendly.</li>
						<li>Success multitasking while remaining professional and courteous in fast-paced environments.</li>
						<li>Collaborated with a team to assure food is served timely and maintain customer satisfaction.</li>
					</dl>
				</div>
			</div>
			<div style={{padding:"35px 50px 50px 120px", color:"white",fontSize:'15px',position:'relative'}}>
				<div style={{position:'absolute',left:'100px'}}>
					April 2018 – June 2018
				</div>
				<div style={{position:'absolute',fontSize:'20px',marginLeft:'250px'}}>
					SERVER, RITZ CARLTON
				</div>
				<div style={{textAlign:'left',position:'absolute',fontSize:'20px',marginLeft:'600px'}}>
					<dl>
						<li>Exceptional interpersonal and team building skills with an aptitude for building rapport with a diverse range of customers, managers, and colleagues.</li>
						<li>Dedicated to ensuring customer satisfaction by remaining accessible and friendly.</li>
						<li>Success multitasking while remaining professional and courteous in fast-paced environments.</li>
						<li>Collaborated with a team to assure food is served timely and maintain customer satisfaction.</li>
					</dl>
				</div>
			</div>

		</div>

		</>
	);
};

export default UseEffectBasics
