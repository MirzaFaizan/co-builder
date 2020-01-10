import React from 'react';
export default function Documents(){
    return(
        <div className="col-sm-12 bg-white p-2">
        <div className="col-sm-12 pt-3">
          <div className="col-sm-12 pt-2 d-flex justify-content-between">
            <div className="col-sm-8">
              <h3 className="font-weight-bold mb-3 custom-text-gold ">Documents</h3>
              <div class=" col-sm-5 p-1 mt-2 mt-md-0 p-2 text-capitalize border">
              <form class="d-flex align-items-center">
  <input class="form-control border-0 form-control-sm mr-3 w-100" type="text" placeholder="Search"
    aria-label="Search" />
  <i class="fas fa-search" aria-hidden="true"></i>
</form>
              </div>
            </div>
            <div className="col-sm-4 p-0 d-flex flex-row-reverse">
              <div className="col-sm-6 p-0">
                <button class="btn btn-info btn-round m-0">Add New</button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 m-3">
            {/* <QoutesTable /> */}
          </div>
        </div>
      </div>
    )
}



{/* <embed src= "https://arxiv.org/pdf/quant-ph/0410100.pdf" style={{width:'100%', height:'100%'}} /> */}