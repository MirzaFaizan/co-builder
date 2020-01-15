import React from 'react';
export default function ChecklistCard(){
    return(
        <div class="text-capitalize bg-light mt-3 py-3 pr-4 rounded-lg col">
        <div class="d-flex align-items-center justify-content-between flex-column flex-sm-row">
            <div class="my-0 custom-heading custom-color-green">next on your checklist</div>
            <button class="btn btn-info btn-round" type="button">See All</button>
        </div>

        <div>

            <div class="dashboard-form-check form-check ml-3 pb-4 border-bottom">
                <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" checked="" />
                    <span class="form-check-sign custom-bg-gold"></span>
                    <h5 class="m-1">Permitting</h5>
                </label>
            </div>

            <div class="dashboard-form-check form-check ml-3 pb-4">
                <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" />
                    <span class="form-check-sign custom-bg-gold"></span>
                    <h5 class="m-1">Schedule soil test</h5>
                </label>
            </div>

        </div>

    </div>
    )
}