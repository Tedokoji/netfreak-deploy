import React from 'react'
import RenderViews from './ReuseComps/RenderViews'
import ListsofMovies from'./ReuseComps/ListsofMoives'
import evanv from './ReuseComps/shinji dance.webm'
import evanlogo from './ReuseComps/static files/evanlogo.png'
function TVShows() {
    return (
        <>
        <RenderViews vid={evanv} pic={evanlogo} des="He's depressed for driving a goddamn mech
        now he's dancin XDD"/>
        <ListsofMovies/>
        <ListsofMovies/>
        <ListsofMovies/>
        <ListsofMovies/>
        <ListsofMovies/>
        <ListsofMovies/>

    </>
    )
}

export default TVShows
