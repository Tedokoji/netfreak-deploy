import RenderViews from './ReuseComps/RenderViews'
import ListsofMovies from './ReuseComps/ListsofMoives'
import pun from './ReuseComps/static files/rolll.mp4'
import pub from './ReuseComps/static files/pub.png'
function Movies() {
    return (
        <>            
            <RenderViews vid={pun} troll={true}
            pic={pub} des="HaHa, rickroll funny haha"/>
            <ListsofMovies/>
            <ListsofMovies/>
           

        
        </>
    )
}

export default Movies
