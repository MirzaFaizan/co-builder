import React from "react";
import HomeSketch from "../Assets/HomeSketch.jpg";
import BuildProgress from "./BuildProgress/BuildProgress";
import ChecklistCard from "./DashboadCards/Checklist";
import Charts from "./DashboadCards/Budger";
import SubcontractorsTable from "../../SubContractors/Components/SubContractorsTable";
import QoutesTable from "../../Qoutes/Components/QoutesTable";
import DocumentsTable from "../../Documents/Component/DocumentTable";
import TimeLineCards from "../../Timeline/Components/Cards";
import ProgressPhotos from "../../ProgressPhotos/Components/ProgressPhoto";
import CardsHeading from "./HeadingCards";
const data = [
  {
    color: "#13545B",
    title: "Phase 1",
    heading: "Site Prep and Foundation",
    description:
      "Construction begins with home site excavation. Your home's position is staked on the lot and prepped for the foundation. For homes with a basement or block wall construction, the concrete footing - the base on which your home's foundation will rest - is poured, and when it's set, gravel fill is placed around the footing or under the basement slab for drainage."
  },
  {
    color: "#95A52F",
    heading: "Framing & Masonry",
    title: "Phase 2",
    description:
      "Framing is the phase where things really start to take shape. Many homeowners think their home is near completion at the end of this stage. Actually, we are still only about one third of the way through the construction process! So while the phases beyond this one may seem much slower in progress, it's because we are getting into the fine details which may not be apparent but are vital to your finished home. In the framing phase, the subfloor, walls, and roof structure are built, and your roof is shingled. Windows, exterior doors and garage doors are installed."
  },
  {
    color: "#F99C2B",
    heading: "Rough Mechanics",
    title: "Phase 3",
    description:
      "'Rough mechanics' is the term used for the mechanical portions of building including heating, air conditioning, plumbing and electric. This construction phase is a swarm of activity as plumbing and indoor sewer pipes, your furnace and ducts, and electric wiring, outlets, and switches are installed. Insulation is installed in the walls, and drywall is staged in each room for future installation. Water, gas and electric utilities are also connected to your home."
  },
  {
    color: "#F43323",
    heading: "Drywall & Masonry",
    title: "Phase 4",
    description:
      "The drywall phase of home construction shows progress rather quickly. Rooms are separated and divided, giving you the visual effect of each space. Drywall is hung and finished, and the ceilings are insulated. Outside brick, stone and siding are installed; and your home site is graded for drainage and to prepare for the driveway, patios, walks, and so on."
  },
  {
    color: "#871125",
    heading: "Interior & Exterior Finishes",
    title: "Phase 5",
    description:
      "The interior finishing phase is probably one of the most exciting phases. You'll see many of the cosmetic selections you made come to life. This is when you install kitchen and bath cabinetry, countertops, mirrors, medicine cabinets, interior doors and trim, stair rails, and many other detail features. Next, the visible portions of the rough mechanics such as the plumbing hardware of faucets, showerheads, commodes, and so on, are installed. Switch plates, plug covers, and light fixtures are put into place, as are your thermostat, outdoor air/heat pump unit, and register and return air covers."
  },
  {
    color: "black",
    heading: "Final",
    title: "Phase 6",
    description:
      "During this construction phase, kitchen appliances and flooring - vinyl, ceramic, and hardwood - are installed, and both the interior and exterior of your home are painted. Later in this phase, you'll see carpeting and your yard is finish-graded, seeded or sodded. Finishing touches are added, such as cleaning the windows, floors, baths, kitchen, and so on. An internal quality assurance inspection ensures your new home is in accordance with your custom architectural plan. After your Homeowner Orientation and Closing are conducted, you'll be ready to move-in!"
  }
];

const windowWidth = window.innerWidth;
export default function Dashboard() {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className="container-fluid row m-0 pr-0 pl-0">
      <main
        class="dashboard col ml-0 mr-lg-3 d-lg-block rounded-lg collapse show multi-collapse"
        style={{ display: toggle && windowWidth <= 1000 ? "none" : "block" }}
      >
        <div class="row dashboard-section">
          <div class="col">
            <div class="row flex-column">
              <div class="bg-light rounded-lg col pt-3 pb-2 pr-4">
                <div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="my-0 custom-heading-small custom-light-pink-text">
                      Welcome Back, Heather
                    </div>
                    {windowWidth <= 1000 ? (
                      <button
                        class="btn btn-primary btn-icon btn-round"
                        type="button"
                        onClick={() => setToggle(!toggle)}
                      >
                        <i class="fas fa-arrow-right"></i>
                      </button>
                    ) : null}
                  </div>
                  <div class="my-0 custom-heading">
                    <span class="custom-text-gold font-weight-bold">427</span>
                    Days until your project is complete!
                    <i class="fas fa-share-alt font-30 ml-2 text-success"></i>
                  </div>
                  {/* <div class="text-center text-sm-right mb-2 mb-sm-0">
                                      <button class="btn btn-info btn-round" type="button">Update</button>
                                  </div> */}
                </div>
                <div class="shadow-sm">
                  <img src={HomeSketch} alt="Sketch" />
                </div>

                <div class="d-flex justify-content-between flex-column flex-sm-row align-items-center pt-4 py-2">
                  <div class="d-flex align-items-center mb-2 mb-sm-0">
                    <div class="custom-svg-icon__small d-inline-block mr-1">
                      <i class="fas fa-map-marker-alt font-30"></i>
                    </div>
                    <div class="text-black-50">Greenville, Tx</div>
                  </div>

                  <div class="d-flex align-items-baseline">
                    <div class="custom-svg-icon__small d-inline-block mr-4">
                      {/* <!-- Svg-icon --> */}
                      <i class="fas fa-calendar-alt font-30"></i>
                      {/* <!-- Svg-icon-end --> */}
                    </div>

                    <div class="row">
                      <div class="datepicker-container">
                        <div class="form-group">
                          <span className="mr-2 font-weight-bold">
                            feb 22, 2019
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Checklist card --> */}

              <ChecklistCard />
              <div className="col-sm-12 bg-light mt-3">
                <CardsHeading heading="Budgeter" route="/budgeter" />
                <Charts />
              </div>
              <div className="col-sm-12 bg-light mt-3 overflow-auto">
                <CardsHeading heading="Your Timline" route="/timeline" />
                <div className="col-sm-12 timeline-cards pt-3 d-flex flex-row overflow-auto">
                  {data.map(value => (
                    <TimeLineCards
                      color={value.color}
                      title={value.title}
                      heading={value.heading}
                      description={value.description}
                    />
                  ))}
                </div>
              </div>
              <div className="col-sm-12 bg-light mt-3 overflow-auto">
                <CardsHeading
                  heading="Subcontractors"
                  route="/sub-contractors"
                />
                <SubcontractorsTable />
              </div>
              {/* <div className="col-sm-12 bg-light mt-3 overflow-auto">
              <CardsHeading
              heading="Qoutes"
              route="/qoutes"
              />
                <QoutesTable />
              </div> */}
              <div className="col-sm-12 bg-light mt-3 overflow-auto">
                <CardsHeading heading="Documents" route="/documents" />
                {/* <DocumentsTable /> */}
              </div>
              <div className="col-sm-12 bg-light mt-3 overflow-auto">
                <CardsHeading
                  heading="Progress Photos"
                  route="/progress-photos"
                />
                <div className="col-sm-12 timeline-cards pt-3 d-flex overflow-auto">
                  {data.map(value => (
                    <ProgressPhotos value={value} />
                  ))}
                </div>
              </div>
              <div className="col-sm-12 bg-light mt-3 overflow-auto">
                <CardsHeading heading="Suppliers" route="/suppliers" />
                <SubcontractorsTable />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Dashboard-Section-End --> */}
      </main>
      <BuildProgress toggle={toggle} setToggle={setToggle} />
    </div>
  );
}
