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
			<div style={{padding:"200px 50px 50px 120px", color:"white",fontSize:'15px',position:'relative'}}>
				<div style={{position:'absolute',left:'100px'}}>
					August 2020 – December 2020
				</div>
				<div style={{position:'absolute',fontSize:'20px',marginLeft:'250px'}}>
					TEST ENGINEER, AMS SENSOR <br />SINGAPORE PTE LTD
				</div>
				<div style={{textAlign:'left',position:'absolute',fontSize:'20px',marginLeft:'600px'}}>
					<dl>
						<li>Designed a data structure/model with external manufacturing dataset for 6 products that enable easy data extraction for analysis and reporting which saves ~80% of the time for other test engineers who previously had to manually analyse the data.</li>
						<li>Utilised the data to check for anomaly in machine to ensure that any irregularity is captured quickly to maximise production and reduce downtime.</li>
						<li>Used python for data processing and have experience in storing large data(5000+ CSV files) in MySQL</li>
						<li>Proposed and spearheaded a timesaving tkinter app to reduce ~80% of the time needed to do weekly report that is been done manually previously</li>
					</dl>
				</div>
			</div>
		</div>

		<div className = "academyexperience">
			<div style={{padding:"15px 0px 0px 0px", color:"gold",fontSize:'40px'}}>
				ACADEMIC EXPERIENCE
			</div>
			<div style={{padding:"30px 50px 20px 0px", color:"white",fontSize:'15px'}}>
				My Studies
			</div>
			<div style={{padding:"35px 50px 50px 120px", color:"white",fontSize:'15px',position:'relative'}}>
				<div style={{position:'absolute',left:'100px'}}>
					Aug 2018 - May 2022
				</div>
				<div style={{position:'absolute',fontSize:'20px',marginLeft:'250px'}}>
					BACHELOR OF NANYANG <br />TECHNOLOGICAL UNIVERSITY
				</div>
				<div style={{textAlign:'left',position:'absolute',fontSize:'20px',marginLeft:'600px'}}>
					<dl>
						<li>Bachelor of Material Science and Engineering</li>
						<li>CAP:3.85</li>
						<li>Relevant Modules: Introduction to computational thinking(A+), Introduction to Data Science and Artificial Intelligence(A)</li>
					</dl>
				</div>
			</div>
		</div>


		<div className = "project">
			<div style={{padding:"15px 0px 0px 0px", color:"gold",fontSize:'40px'}}>
				PROJECTS
			</div>
		</div>

		<div className = "python" style={{padding:"15px 0px 0px 0px", color:"gold",fontSize:'40px'}}>
			PYTHON
			<div className = "python2" style={{padding:"15px 0px 0px 0px", color:"gold",fontSize:'15px'}}>
				Maze solver with a customized depth-first-search algorithm.<br />

				Web application (Django + React) with a login page to run a tkinter application<br /> with it.<br />

				Pixelated image processing with tkinter, turtle and cv2<br />
			</div>
		</div>


		<div className = "dsai" style={{padding:"15px 0px 0px 0px", color:"gold",fontSize:'40px'}}>
			DATA SCIENCE AND AI
			<div className = "dsai2" style={{padding:"15px 0px 0px 0px", color:"gold",fontSize:'40px'}}>
				Processed dataset of epilepsy occurrences with AI models such as transfer learning, regression learning, decision tree, logistic regression, support vector machine.
			</div>
		</div>
			
		<div className = "htb" style={{padding:"15px 0px 0px 0px", color:"gold",fontSize:'40px'}}>
			HACKTHEBOX (USERNAME: JOWCJO)
			<div className = "htb2" style={{padding:"15px 0px 0px 0px", color:"gold",fontSize:'40px'}}>
				Managed to successfully root 10 retired machine/hacking systems.
			</div>
		</div>

		<div className = "skill">
			<div>
				SKILLS
			</div>
			<div style={{textAlign:'centre',fontSize:'20px', }}>
					<dl>
						<li>Languages: Proficient in English and Chinese</li>
						<li>Python (Turtle, Cv2, Tkinter)</li>
						<li>MySQL</li>
						<li>Data Science</li>
						<li>AI (transfer learning, regression learning)</li>
						<li>VBA</li>
						<li>Microsoft Office</li>
						<li>Familiar with Kali Linux</li>
						<li>Web application (Django + React)</li>
						<li>Ethical Hacking (Fuzzing, Cracking hash)</li>
						<li>Driving license (Class 3)</li>
					</dl>
			</div>
		</div>


		<div className = 'link'>
			<div>
				email: chuaweicheng@hotmail.com<br />
				84817407(prefer to whatsapp)
			</div>
			<div>
				<a href="https://www.linkedin.com/in/chua-wei-cheng/">click down for linkedin</a>
			</div>
			<div>
				©2020 by Jowcjo. Proudly created with <del>Wix</del>jowcjo.com
			</div>
		</div>


		</>
	);
};

export default UseEffectBasics
