import React from 'react'
import Header from '../../components/header/header'
import { useLocation } from 'react-router-dom'
import './detail.scss';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { Rating } from '@mui/material';
import { useEffect } from 'react';

const Detail = () => {
    const { state } = useLocation();

   
    
    return (
        <div>
            <Header />
            <div className='b-container'>
                <h1>{state.name}</h1>
                <div className='d-flex'>
                    <img className='main-img' src={state.img} alt="" />
                    <div className="right-section">
                        <h1>{state.name}</h1>
                        <b>{state.service}</b>
                        <p className='little'>{state.description}</p>

                        <div>
                            <h3 style={{ color: "#4f4f4f" }}>Bo'limlar</h3>
                            <ul className="mainlist">
                                {Object.keys(state.clinicSection[0]).map((r) => (
                                    <li className="sections">{r}</li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ marginTop: 10 }}>
                            <Rating value={state.rating} />
                        </div>
                        <div className="box">
                            <LocationOnIcon />
                            <p>{state.addres}</p>
                        </div>
                        <div className="box">
                            <CallIcon />
                            <p>{state.tel}</p>
                        </div>
                        <div className="box">
                            <QueryBuilderIcon />
                            <p>{state.workTime}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='images'>
                <div class="angry-grid">
                    {Object.values(state.ClinicRooms[0]).map((item, i) => (
                        <img id={`item-${i}`} src={item} alt="" />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Detail