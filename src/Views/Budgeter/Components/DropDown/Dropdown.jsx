import React, {useState} from 'react'
import './dropdown.css';
export default function DropDown(){
    const [open, setOpen] = useState(false);
    
    const openDropDown = () =>{
        setOpen(!open);
    }
    return(
        <div class={`wrapper-dropdown-3 ${open ? 'active' : ''}`} tabindex="1" onClick={openDropDown}>
						<div className="d-flex col-sm-12 p-0 justify-content-between">
                        <span>Transport</span>
                        <span className="justify-content-center">
                        <i class="fas fa-paint-brush"></i>
                        </span>
                        </div>
						<ul class="dropdown">
							<li><a ><i class="icon-envelope icon-large"></i>Classic mail</a></li>
							<li><a ><i class="icon-truck icon-large"></i>UPS Delivery</a></li>
							<li><a ><i class="icon-plane icon-large"></i>Private jet</a></li>
						</ul>
					</div>
    )
}