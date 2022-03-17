import React, { useEffect, useState } from 'react'
import './App.css'

function NavBar() {
    return (
        <div className="nav-bar">
            <ul className="nav-items">
                <li>Discord Admin Panel</li>
            </ul>
        </div>
    )
}

function ScreenTitle() {
    return (
        <div className='screen-title'>
            <h1>Guilds</h1>
        </div>
    )
}

// function GetGuilds() {
    
//     return (<div><Guilds data={data}/></div>)
    
// }

function Guilds() {
    const [data, setData] = useState([])


    useEffect(() => {
        fetch("http://192.168.2.10:8090/guilds/")
        .then(res => res.json())
        .then(json => setData(json.guilds))
        .catch(err => console.log(err))
    }, [])

    console.log(data)

    const guilds = data.map(x => <li key={x.id}><GuildTile name={x.name} info={x.id}/></li>)

    return(
        <div className='guilds'>
            <ul>{guilds}</ul>
        </div>
    )
}

function GuildTile(props) {
    return (
        <div className='guild-tile'>
            <div className='guild-icon'></div>
            <h2>{props.name}</h2>
            <p>{props.info}</p>
        </div>
    )
}

export default function GuildSelection() {
    return (
        <div className='guild-selection-container'>
            <NavBar />
            <ScreenTitle />
            <ul><Guilds /></ul>
        </div>
    )
}