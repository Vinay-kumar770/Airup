import React from "react";

const styles = {
    mainContainer: {
      display: 'flex',
      flexDirection: 'row',
      padding: '10px',
    },
    flexItem: {
      flex: 1, // Equal width for both divs; adjust as needed
      margin: '5px',
      padding: '10px',
      textAlign: 'center',
    },
    aalign:{
      display: 'inline-block',
      padding: '10px 20px',
      fontSize: '16px',
      textAlign: 'center',
      textDecoration: 'none',
      backgroundColor: '#4caf50', 
      color: 'white', 
      border: '1px solid #4caf50',
      borderRadius: '4px', 
      transition: 'background-color 0.3s',
    }
  };
const About = () =>{
    return(
        <section id="about" className="about">
        <div className="container">
          <div className="row" style={styles.mainContainer}>
            <div style={styles.flexItem}>
              <div>
              <img src="https://cdn-icons-png.flaticon.com/512/8991/8991202.png" width={400} height={400}/>
              </div>
              <div style={{textAlign:"center",paddingTop:"10px"}}>
                <a href="/investor" style= {styles.aalign}>I am an Investor </a>
              </div>
            </div>
            <div style={styles.flexItem}>
              <div>
              <img src="https://cdn-icons-png.flaticon.com/512/6553/6553332.png" width={400} height={400}/>
               </div>
               <div  style={{textAlign:"center",paddingTop:"10px"}}>
                <a  href="/entrepreneur" style={styles.aalign}>I am an Entrepreneur</a></div>         
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;