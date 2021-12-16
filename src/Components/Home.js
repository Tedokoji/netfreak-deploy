import './home.scss'
import RenderViews from './ReuseComps/RenderViews'
import ListsofMovies from'./ReuseComps/ListsofMoives'
import rick from './ReuseComps/shibaken.mp4'
import bblogo from './ReuseComps/logobb.png'

function Home() {
    
    return (
        <>
            <RenderViews vid={rick} pic={bblogo} des="Real Doraemon LiveAction!!!lmao, 
                  Stupid Shibaken wants a walk,
                   A squid ink chocolate, 
                   what will Shibaken do in this situation?"/>
            <ListsofMovies/>
            <ListsofMovies/>
           

        </>
    )
}

export default Home
