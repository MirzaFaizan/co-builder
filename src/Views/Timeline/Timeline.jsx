import React from 'react';
import './timeline.css';
import ProgressCard from './Components/Cards';
import ProgressBar from '../Checklist/Component/Progressbar';
const data=[{color:"#13545B",
title:'Phase 1',
heading:'Site Prep and Foundation',
description:"Construction begins with home site excavation. Your home's position is staked on the lot and prepped for the foundation. For homes with a basement or block wall construction, the concrete footing - the base on which your home's foundation will rest - is poured, and when it's set, gravel fill is placed around the footing or under the basement slab for drainage."
},
{color:"#95A52F",
heading:'Framing & Masonry',
title:'Phase 2',
description:"Framing is the phase where things really start to take shape. Many homeowners think their home is near completion at the end of this stage. Actually, we are still only about one third of the way through the construction process! So while the phases beyond this one may seem much slower in progress, it's because we are getting into the fine details which may not be apparent but are vital to your finished home. In the framing phase, the subfloor, walls, and roof structure are built, and your roof is shingled. Windows, exterior doors and garage doors are installed."
},
{color:"#F99C2B"  ,
heading:'Rough Mechanics',
title:'Phase 3',
description:"'Rough mechanics' is the term used for the mechanical portions of building including heating, air conditioning, plumbing and electric. This construction phase is a swarm of activity as plumbing and indoor sewer pipes, your furnace and ducts, and electric wiring, outlets, and switches are installed. Insulation is installed in the walls, and drywall is staged in each room for future installation. Water, gas and electric utilities are also connected to your home."
},
{color:"#F43323",
heading:'Drywall & Masonry',
title:'Phase 4',
description:"The drywall phase of home construction shows progress rather quickly. Rooms are separated and divided, giving you the visual effect of each space. Drywall is hung and finished, and the ceilings are insulated. Outside brick, stone and siding are installed; and your home site is graded for drainage and to prepare for the driveway, patios, walks, and so on."
},
{color:"#871125" ,
heading:'Interior & Exterior Finishes',
title:'Phase 5',
description:"The interior finishing phase is probably one of the most exciting phases. You'll see many of the cosmetic selections you made come to life. This is when you install kitchen and bath cabinetry, countertops, mirrors, medicine cabinets, interior doors and trim, stair rails, and many other detail features. Next, the visible portions of the rough mechanics such as the plumbing hardware of faucets, showerheads, commodes, and so on, are installed. Switch plates, plug covers, and light fixtures are put into place, as are your thermostat, outdoor air/heat pump unit, and register and return air covers."
},
{color:"black" ,
heading:'Final',
title:'Phase 6',
description:"During this construction phase, kitchen appliances and flooring - vinyl, ceramic, and hardwood - are installed, and both the interior and exterior of your home are painted. Later in this phase, you'll see carpeting and your yard is finish-graded, seeded or sodded. Finishing touches are added, such as cleaning the windows, floors, baths, kitchen, and so on. An internal quality assurance inspection ensures your new home is in accordance with your custom architectural plan. After your Homeowner Orientation and Closing are conducted, you'll be ready to move-in!"
}]



export default function Timeline(){
    return(
        <div className="main-testing bg-white p-4">
             <div>
               
               <div className="d-flex flex-column flex-md-row justify-content-between align-items-center align-items-lg-baseline">
                <h3 className="mb-0"><span className="custom-text-gold font-weight-bold">Timeline</span> </h3> 
                
                <div className="text-center">
                 {/* <button className="btn btn-outline-info btn-round">Edit Checklist</button> */}
                 <button className="btn btn-info btn-round mr-2">Add new</button>
                </div>
               </div>
               <div className="col-sm-12 timeline-cards pt-3 d-flex flex-row overflow-auto">
                   {data.map(value =>(
                       <ProgressCard color={value.color}
                       title={value.title}
                       heading={value.heading}
                       description={value.description}
                       />
                   ))}
               
               </div>
               {/* <div>
               <h4 className="mb-0 mt-1"><span className="custom-text-gold font-weight-bold">Total Days : 500</span> </h4>
               <h4 className="m-0 mt-1"><span className="text-grey">Total days passed: 333</span> </h4>
        <ProgressBar />
        </div> */}
        </div>
        </div>
    )
}