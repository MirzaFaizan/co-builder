import React from 'react';
import {Link} from 'react-router-dom';
export default function Heading({route, heading}){
    return(
    <div class="d-flex mt-2 align-items-center justify-content-between flex-column flex-sm-row">
    <div class="my-0 custom-heading custom-text-gold">{heading}</div>
    <Link to={route} class="btn btn-info btn-round">
      See All
    </Link>
  </div>
    )
}