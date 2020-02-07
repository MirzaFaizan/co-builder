import React, { useState, useEffect, useContext } from "react";
import ImagesLayout from "./ImagesLayout";
import { InfoContext } from "../../../Context/AuthContext";
import Api from "../../../ApiCalls/api";
export default function PintrestView() {
  const { info, setInfo } = useContext(InfoContext);
  const [loading, setLoading] = useState(false);
  const [pinterestUserName, setPinterestUserName] = useState("");
  const [pinterestBoardName, setPinterestBoardName] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (info.pinterestFirstTime) {
      getData();
    }
  }, [info.pinterestFirstTime]);
  const getData = () => {
    fetch(
      `https://api.pinterest.com/v1/boards/irtazailogics/houses/pins/?access_token=ApJkLvaPSyBi1kMUnc1WNb7G-Y9-FeNSlXCROZtGaJZbK4CslQR6ADAAAjNkRmiX3axApRMAAAAA&fields=id%2Cnote%2Cimage`
    )
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(err => {
        setError(true);
        console.log(err);
      });
  };

  const pintrestGo = () => {
    setLoading(true);
    let body = {
      pinterestUserName: pinterestUserName,
      pinterestBoardName: pinterestBoardName
    };
    Api.postPintrest(info.userId, body)
      .then(res => {
        setLoading(false);
        console.log(res);
        setInfo({
          pinterestFirstTime: true,
          pinterestUserName: pinterestUserName,
          pinterestBoardName
        });
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <section class="pinterest-boards-section pl-2 h-100 bg-white mt-2 ml-2 pt-3 overflow-auto">
      {info.pinterestFirstTime ? (
        <>
          <div class="d-flex align-items-center">
            <div class="d-flex w-100 pr-4 mb-3 mb-md-0">
              <div class="d-none d-sm-flex text-danger mr-4">
                <i class="fab fa-pinterest fa-3x"></i>
              </div>

              <div class="d-flex w-100">
                <div class="input-group mb-0">
                  <div class="input-group-prepend">
                    <span class="input-group-text rounded-0 text-black-50">
                      <i class="fas fa-search"></i>
                    </span>
                  </div>
                  <input
                    type="search"
                    class="form-control border-left-0 rounded-0 font-weight-bold"
                    placeholder="tree house designs"
                  />
                </div>

                <div class="input-group-append">
                  <button
                    class="input-group-text border rounded-0 p-2 h6 text-capitalize"
                    onClick={() => setInfo({ pinterestFirstTime: false })}
                  >
                    Edit
                    {/* <i class="fas fa-chevron-down ml-3"></i> */}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 py-2">
            <ImagesLayout data={data} error={error} />
          </div>
        </>
      ) : (
        <div className="main signIn_signUp pintrest">
          <section className="signup shadow">
            <div className="container">
              <div className="signup-content">
                <form className="signup-form">
                  <h2 className="form-title">Pinterest</h2>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter your pintrest board"
                      onChange={e => setPinterestUserName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter your board name"
                      onChange={e => setPinterestBoardName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="button"
                      name="submit"
                      className="form-submit"
                      onClick={pintrestGo}
                      disabled={loading ? true : false}
                    >
                      {loading ? (
                        <div class="spinner-border text-light" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      ) : (
                        "Let's go"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
