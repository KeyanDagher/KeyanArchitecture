import React from 'react';

function One()
{
    return(
        <React.Fragment>
        <div id="oneh">
        <h1>To make visions <br/> Become reality, <br/> <div className="text-warning">Choose Keyans <br/> Architecture</div> </h1>
        </div>
        <p style={{paddingTop:"20px"}}>Sta-Lok is a UK manufacturer specialising in the<br/>design, manufacture and supply of high-quality<br/>products and solutions for stainless steel wire<br/>ropes and tension rod systems.
        <br/>
        <br/>
        Sta-Lok Products are designed and engineered<br/>to complement the most beautiful boats,<br/>buildings and architecture.</p>

        <div className="card-deck">
        <div id="cone" className="card">
        <div className="card-body">
        <img src="https://www.stalok.com/wp-content/uploads/2020/04/Marine.png" height="160px;" width="160px;"/>
        <p>Marine</p>
        </div>
        </div> 
        <div id="ctwo" className="card">
        <div className="card-body">
        <img src="https://www.stalok.com/wp-content/uploads/2020/04/Architectural-and-Structural-Systems.png" height="160px;" width="160px;"/>
        <p>Tension rod solutions</p>
        </div>
        </div> 
        <div id="cthree" className="card">
        <div className="card-body">
        <img src="https://www.stalok.com/wp-content/uploads/2020/04/Cable-Assemblies.png" height="160px;" width="160px;"/>
        <p>Cable solutions</p>
        </div>
        </div> 

        <br/>
        <br/>

        <div className="card-deck">
        <div id="cfour" className="card">
        <div className="card-body">
        <img src="https://www.stalok.com/wp-content/uploads/2020/04/Height-Safety_Sta-Lok-Icon-copy.png" height="160px;" width="160px;"/>
        <p>height access</p>
        </div>
        </div> 
        <div id="cfive" className="card">
        <div className="card-body">
        <img src="https://www.stalok.com/wp-content/uploads/2020/04/Tensile-Fabric-Structures.png" height="160px;" width="160px;"/>
        <p>Tensile fabric structures</p>
        </div>
        </div> 
        <div id="csix" className="card">
        <div className="card-body">
        <img src="https://www.stalok.com/wp-content/uploads/2020/04/Wire-Rope.png" height="160px;" width="160px;"/>
        <p>Wire rope</p>
        </div>
        </div>
        </div>
        </div>
        </React.Fragment>
    );
}

export default One;