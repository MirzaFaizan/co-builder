import React from "react";
export default function Model({ openModel, setOpenModel }) {
  const [Right, setRight] = React.useState("-45%");
  if (openModel === true) {
    if (Right === "-45%")
      setTimeout(() => {
        setRight("0px");
      }, 100);
  }

  return (
    <>
      {openModel ? (
        <>
          <div className="container demo model-swipe documment-model">
            <div className="modal right fade" aria-labelledby="myModalLabel2">
              <div
                className="model-dialog-custom document"
                style={{ right: Right }}
              >
                <div className="modal-content">
                  <div className="modal-header bg-white">
                    <button
                      type="button"
                      className="close"
                      onClick={() => {
                        setRight("-45%");
                        setOpenModel(false);
                      }}
                      style={{ zIndex: "9999" }}
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div className="modal-body col-sm-12 col-lg-12 d-flex pdf-preview-area">
                    <div className="col-sm-12 col-lg-7 h-100">
                      {/* <embed src= "https://arxiv.org/pdf/quant-ph/0410100.pdf" className="h-100 w-100" />
                       */}
                      <object
                        data="https://arxiv.org/pdf/quant-ph/0410100.pdf"
                        type="application/pdf"
                        width="100%"
                        height="100%"
                      ></object>
                    </div>
                    <div className="col-sm-12 col-lg-5">
                      <h3 className="text-black font-weight-bold text-orange">
                        Electronics
                      </h3>
                      <div className="d-flex col-sm-12 flex-wrap overflow-auto">
                        <div className="col-sm-5 m-3 p-2 document-preview document-preview-border">
                          <img src="https://volcafespecialty.com/wp-content/uploads/2017/09/PDF-Placeholder-240x300.png" />
                          <div className="font-weight-bold text-truncate">
                            Document 1
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container d-flex flex-row-reverse text-right">
                    <div className="col-sm-5 d-flex justify-content-around">
                      <button
                        type="button"
                        class="btn btn-primary button-round"
                        onClick={() => {
                          setRight("-45%");
                          setOpenModel(false);
                        }}
                      >
                        Add new
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary button-round"
                        onClick={() => {
                          setRight("-45%");
                          setOpenModel(false);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
