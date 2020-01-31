import React from "react";
import ProgressCard from "../Timeline/Components/Cards";
import PhaseItemCard from "./Components/PhaseItemCard";
import CardLoaderPhases from "../../Components/CardLoader";
import SimpleCardLoader from "../../Components/SimpleCardLoader";
import api from "../../ApiCalls/api";
import { InfoContext } from "../../Context/AuthContext";
export default function Phases() {
  const { info } = React.useContext(InfoContext);
  const [showDetails, setShowDetails] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [phaseItemData, setPhaseItemData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const showCardDetails = key => {
    setShowDetails(true);
    console.log(key._id);
    setLoading(true);
    api
      .getPhaseItem(key._id)
      .then(res => {
        setPhaseItemData(res.data.items);
        console.log(res);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  React.useEffect(() => {
    setLoading(true);
    api
      .getPhases(info.userId)
      .then(res => {
        console.log(res);
        setLoading(false);
        setData(res.data.phases);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div class="row position-relative custom-bg-gray89 h-100">
        <div className="main-testing bg-white p-4 overflow-auto col-sm-12">
          <div className="custom-height overflow-scroll">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center align-items-lg-baseline">
              <h3 className="mb-0">
                <span className="custom-text-gold font-weight-bold">
                  {showDetails ? (
                    <i
                      class="fas fa-arrow-left font-30 cursor-pointer text-success"
                      onClick={() => setShowDetails(false)}
                    ></i>
                  ) : (
                    "Phases"
                  )}
                </span>
              </h3>
            </div>
            {showDetails ? (
              <div className="col-sm-12 pt-3 overflow-auto d-flex flex-wrap">
                {loading ? (
                  <SimpleCardLoader />
                ) : (
                  <>
                    {phaseItemData === "No Item Exist in the db." ||
                    phaseItemData === "" ||
                    phaseItemData === [] ||
                    phaseItemData === undefined ? (
                      <h1>no data found</h1>
                    ) : (
                      <>
                        {phaseItemData.map(value => (
                          <PhaseItemCard value={value} />
                        ))}
                      </>
                    )}
                  </>
                )}
              </div>
            ) : (
              <div className="col-sm-12 timeline-cards h-100 pt-3 d-flex flex-row overflow-auto">
                {loading ? (
                  <div className="col-sm-12 d-flex">
                    <CardLoaderPhases />
                  </div>
                ) : (
                  <>
                    {data === "No phase Exist in the db" ? (
                      <h2 className="">no data found</h2>
                    ) : (
                      <>
                        {data.map(value => (
                          <>
                            <ProgressCard
                              key={value._id}
                              value={value}
                              color={value.color}
                              title={value.name}
                              // heading={value.heading}
                              description={value.description}
                              showCardDetails={showCardDetails}
                            />
                          </>
                        ))}
                      </>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
