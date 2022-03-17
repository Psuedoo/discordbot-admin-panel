import React from "react";
import './App.css'

// TODO: Load data on page load?

function ConfigItem(props) {
    return (
        <div className="config-item">
            {/* <p>{ props.configName } { props.configValue }</p> */}
            <h3>{ props.name }</h3>
            <input type="text" placeholder={ props.value }></input>
            <input type="button" value="Submit"></input>
        </div>
    )
}

function Command(props) {
    return (
        <li>
            <h3>{ props.name }</h3>
            <p>{ props.response }</p>
        </li>
    )

}

function Commands() {

    // API Call

    return (
        <div>
            <ul>
                <Command name="testcommand" response="testresponse"/>
            </ul>
        </div>
    )
}

function Role(props) {
    return (
        <li>
            <h3>{ props.name }</h3>
            <p>{ props.emoji }</p>
        </li>
    )
}

function Roles() {
    return (
        <div>
            <ul>
                <Role name="role1" emoji="snake emoji"/>
            </ul>
        </div>
    )
}

export default function GuildConfig() {
    return (
        <div>
            <ConfigItem name="Prefix" value="!"/>
            <ConfigItem name="Nickname" value="PsuBot"/>
            <Commands />
            <Roles />
        </div>
    )
}