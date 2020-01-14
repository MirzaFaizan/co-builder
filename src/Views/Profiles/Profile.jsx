import React from 'react';
import './profile.css';
export default function Profile({openProfile, setOpenProfile}){
    return(
//   <!-- Modal -->
<div class="modal fade" id="exampleModalScrollable">
  <div class="modal-dialog my-0 mr-0" role="document">
    <div class="modal-content vh-100">
      <div class="modal-header">
        <div class="modal-title w-100 text-center text-primary"><i class="far fa-user-circle fa-4x"></i></div>
        <button type="button" class="close" onClick={()=>setOpenProfile(false)}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="form-row text-capitalize">
              <div class="form-group col">
                <label >Personal Details</label >
                <input type="Name" placeholder="Name" class="form-control" />
                <input type="password" placeholder="Password" class="form-control my-3" />
                <input type="text" placeholder="Registration Date" class="form-control mb-3" /> 
                <input type="email" placeholder="Email" class="form-control" /> 
              </div>
              <div class="form-group col">
                <label >property address</label>
                <input type="text" placeholder="House/Plot Number" class="form-control" />
                <input type="text" placeholder="Street" class="form-control my-3" />
                <input type="text" placeholder="State" class="form-control mb-3" />
                <input type="text" placeholder="Post Code" class="form-control" />
              </div>
          </div>
          
          <div class="d-flex justify-content-center">
              <button type="button" class="btn btn-primary btn-round">Save changes</button>
            </div>

      </div>
    
    </div>
  </div>
</div>

    )
}