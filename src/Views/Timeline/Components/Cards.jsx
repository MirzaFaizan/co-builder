import React from 'react';
export default function Card(){
    return(
<div class="col-sm-3 pl-0 pr-0 mb-4 progressCard shadow">
{/* <!-- Post--> */}
<div class="post-module">
  {/* <!-- Thumbnail--> */}
  <div class="thumbnail">
    <img src={"https://s3-us-west-1.amazonaws.com/cdn.tiptopvacation.com/offers/hotels/beach-resortcabana-bay-beach-resortorlandofl.png"} />
  </div>
  {/* <!-- Post Content--> */}
  <div class="post-content">
  <div class="category">Dirt Work</div>
<h1 class="title">Dirt work 14 feb</h1>
    <h2 class="sub_title text-truncate">
    It usually begins with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.
      </h2>
    <p class="description">
    It usually begins with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.
      </p>
  </div>
</div>
</div>
    )
}
