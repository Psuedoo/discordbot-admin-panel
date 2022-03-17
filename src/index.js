import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import GuildSelection from './GuildSelection'
import GuildConfig from './GuildConfig'


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<App />} /> */}
            <Route path="/" element={<GuildSelection />} />
            <Route path="/guild" element={<GuildConfig />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
)