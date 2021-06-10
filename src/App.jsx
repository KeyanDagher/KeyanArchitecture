import React from 'react';
import Navigationbar from './Navigationbar'
import One from './One'
import Two from './Two'
import Three from './Three'
import Four from './Four'
import Five from './Five'

function App()
{
  return(
    <>
    <div className="container-fluid" id="top">
    <nav className="navbar navbar-expand-sm fixed-top">
    <Navigationbar/>
    </nav>
    <br/><br/><br/><br/>
    <h1 style={{paddingTop:"250px",paddingLeft:"100px"}} className="display-4">Stainless Steel Rigging Solutions for Beautiful Boats, Buildings and Architecture</h1>
    </div>
    <div style={{paddingTop:"100px",paddingLeft:"100px"}}>
    <One/>
    </div>
    <Two/>
    <br/>
    <div style={{paddingTop:"100px",paddingLeft:"100px"}}>
    <Three/>
    </div>
    <Four/>
    <br/>
    <Five/>
    </>
  );
}

export default App;
