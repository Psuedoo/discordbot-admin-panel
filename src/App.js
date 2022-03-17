import React from 'react'
import GuildSelection from './GuildSelection'
import GuildConfig from './GuildConfig'
import './App.css'
import { Link } from 'react-router-dom'


export default function App() {
    return (
        <div className='container'>
                {/* <Link to="/invoices">Invoices</Link> |{" "} */}
                {/* <Link to="/GuildSelection">Guild Selection</Link> */}
            <GuildSelection />
            {/* <GuildConfig /> */}
        </div>
    )
}