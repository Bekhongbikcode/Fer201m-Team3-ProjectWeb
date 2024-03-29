
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpaceShuttle, faUserShield, faSquareParking, faFileInvoiceDollar, faUsers, faPersonShelter, faMoneyBill1Wave, faBuildingUser, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import './Resident.css';
import HistoryResidentInvoiceManagement from "./HistoryResidentInvoiceManagement";
import ExpiredInvoiceManagement from "./ExpiredInvoiceManagement";
import InformationResidentManagement from "./InformationResidentManagement";
import UserHeader from "../Complement/HeaderUser";



const ResidentPage = () => {
    const [logined, setLogined] = useState(localStorage.getItem("username"));
    const [role, setRole] = useState(localStorage.getItem('role'));
    const usenavigate = useNavigate();


    const [select, setSelect] = useState('Customers');

    const handleItemClick = (item) => {
        setSelect(item);
    };

    useEffect(() => {
        const navItems = document.querySelectorAll('.navbar-nav li');

        navItems.forEach(navItem => {
            navItem.addEventListener('click', () => {
                // Remove the active class from all li elements
                navItems.forEach(item => {
                    item.classList.remove('active');
                });

                // Add the active class to the clicked li element
                navItem.classList.add('active');

                // Call the handleItemClick function with the appropriate argument
                handleItemClick(navItem.innerText);
            });
        });

    })

    return (
        <div>
            <UserHeader></UserHeader>
            <div className="admin-homepage-body" style={{ marginBottom: '150px' }}>

                <div class="nav admin-nav-custom flex-column ">
                    <div className="admin-nav-custom-title">
                        <p className='nav-link' style={{ fontSize: '10px', paddingTop: '20px', color: 'white' }} href="#"><FontAwesomeIcon style={{ paddingRight: '10px', paddingLeft: '6%' }} icon={faSpaceShuttle}></FontAwesomeIcon>Your profile</p>
                    </div>
                    <label></label>
                    <ul className="navbar-nav" >

                        <li tabindex="0" class="nav-item " onClick={() => handleItemClick('Your-Information')}>
                            <a className="nav-link active " href="#"><FontAwesomeIcon style={{ paddingRight: '30px' }} icon={faUsers} />Your Information</a>
                        </li>
                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Your-Invoice-History')}>
                            <a className="nav-link active" href="#"><FontAwesomeIcon style={{ paddingRight: '30px' }} icon={faPersonShelter} />Your Invoice History</a>
                        </li>
                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Expired-Invoices')}>
                            <a className="nav-link active" href="#"><FontAwesomeIcon style={{ paddingRight: '30px' }} icon={faFileInvoiceDollar} />Expired Invoices</a>
                        </li>
                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Slots')}>
                            <a className="nav-link active" href="#"><FontAwesomeIcon style={{ paddingRight: '30px' }} icon={faSquareParking}></FontAwesomeIcon>Slots</a>
                        </li>



                    </ul>

                </div>
                {select === 'Your-Information' ? <InformationResidentManagement></InformationResidentManagement>
                    : select === 'Your-Invoice-History' ? <HistoryResidentInvoiceManagement></HistoryResidentInvoiceManagement>
                        : select === 'Expired-Invoices' ? <ExpiredInvoiceManagement></ExpiredInvoiceManagement>
                            : <HistoryResidentInvoiceManagement></HistoryResidentInvoiceManagement>

                }





            </div>

        </div>
    );
}

export default ResidentPage;