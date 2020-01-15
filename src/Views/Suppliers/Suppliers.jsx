import React from "react";
import Table from '../SubContractors/Components/SubContractorsTable';
export default function ContractorsView() {
  return (
    <section class="sub-contractors-section bg-white h-100 col">
      <div class="col-sm-12 d-flex justify-content-between align-items-center text-capitalize my-2">
        <div class="text-primary custom-heading mb-2">
          Suppliers
        </div>
        {/* <button class="btn btn-info btn-round text-capitalize" type="button">
          add new
        </button> */}
      </div>
      <div class="table-responsive overflow-auto">
        <Table />
      </div>
    </section>
  );
}
