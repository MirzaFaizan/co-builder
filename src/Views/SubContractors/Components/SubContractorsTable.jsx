import React from 'react';
export default function Table(){
    return(
        <table class="sub-contractors-section__table table table-hover mb-0 border text-capitalize text-black-50">
          <thead class="thead-light text-center">
            <tr>
              <th scope="col" class="text-black-50 font-weight-normal">
                Contact name
              </th>
              <th scope="col" class="text-black-50 font-weight-normal">
                company
              </th>
              <th scope="col" class="text-black-50 font-weight-normal">
                email
              </th>
              <th scope="col" class="text-black-50 font-weight-normal">
                phone
              </th>
              <th scope="col" class="text-black-50 font-weight-normal">
                quoted job
              </th>
              <th scope="col" class="text-black-50 font-weight-normal">
                rating
              </th>
              <th scope="col" class="text-black-50 font-weight-normal">
                scheduled date
              </th>
              <th scope="col" class="text-black-50 font-weight-normal"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-bottom text-center">
              <td>cabinets-javier</td>
              <td></td>
              <td>javier@gmail.com</td>
              <td>office:+9243423455</td>
              <td>
                <span class="form-check pl-4">
                  <label class="form-check-label">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      checked=""
                    />
                    <span class="form-check-sign custom-bg-gold sub-contractors-section__form-check-sign"></span>
                  </label>
                </span>
              </td>
              <td>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
              </td>
              <td class="text-center"> 2/1/2020 </td>
              {/* <td>
                <span>
                  <button
                    type="button"
                    class="btn btn-link m-0 p-0 custom-btn"
                  >
                    <i class="fas fa-ellipsis-h fa-2x"></i>
                  </button>
                </span>
              </td> */}
            </tr>
            
            
           
          </tbody>
        </table>
    )
}