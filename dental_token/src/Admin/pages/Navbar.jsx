import React from 'react';
import { Link } from 'react-router-dom';
import img from '../img/logo.png';
import './../css/nav.css';



const Nav = () => {
    return (
        <nav style={{background:"white",margin:0}}>
           <ul>
            <div className='container'>
                <div className='main'>
                        <img src={img} alt="image" />

                       <div className='inner'>
                            <div className='each-nav' >
                                <div style={{fontSize:"30px"}}>
                                    <i class="fa-solid fa-house-circle-check"></i>                               
                                </div>
                                <li>
                                    <Link style={{ color: 'Black',textDecoration:'none'}} exact to="/Dashboard">Dashboard</Link>
                                </li>
                            </div>
                            <div className='each-nav'>
                                <div style={{fontSize:"30px"}}>
                                    <i class="fa-solid fa-user-check"></i>                                </div>
                                <li>
                                    <Link style={{ color: 'Black',textDecoration:'none'}} to="/users">Users</Link>
                                </li>
                            </div>
                            <div className='each-nav'>
                                <div style={{fontSize:"30px"}}>
                                    <i class="fa-regular fa-comment-dots"></i>                                </div>
                                <li>
                                    <Link style={{ color: 'Black',textDecoration:'none'}} to="/feedbacks">Feedback</Link>
                                </li>
                            </div>
                                
                        </div>
                     </div>

                    <div className='logout'>
                        <button style={{ background:"#373C3E",height:"47px",width:"141px",borderRadius:"10px"}}>
                            <Link style={{ color: 'white',textDecoration:'none'}} to="/">Logout</Link>
                        </button>
                    </div>

            </div>
           </ul>
        </nav>
    );
};

export default Nav;
