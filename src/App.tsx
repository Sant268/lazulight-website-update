import { Route, Switch } from 'wouter'
import { PageWrapper } from './components/PageWrapper'
import Home from './pages/Home'
import Elira from './pages/Elira'
import Finana from './pages/Finana'
import Pomu from './pages/Pomu'
import Fnf from './pages/FNF'
import DiamondCityLights from './pages/DiamondCityLights'
import VisualNovel from './pages/VisualNovel'
import Art from './pages/Art'
import Messages from './pages/Messages'
import About from './pages/About'

export default function App (): JSX.Element {
  return (
    <div>
      {/* Notes: (Brandon)
        This file switches the route and passes the name of the page to PageWrapper
        Doing this allows everything in PageWrapper to dynamically change based on the value of 'page'
        Because for some reason it wouldn't dynamically change based on 'location.pathname'

        Content of PageWrapper: header, footer, background
      */}
      <Switch>
        <Route path='/elira'><PageWrapper page='elira'><Elira /></PageWrapper></Route>
        <Route path='/finana'><PageWrapper page='finana'><Finana /></PageWrapper></Route>
        <Route path='/pomu'><PageWrapper page='pomu'><Pomu /></PageWrapper></Route>

        <Route path='/project-fnf'><PageWrapper page='fnf'><Fnf page='fnf' /></PageWrapper></Route>
        <Route path='/project-dcl'><PageWrapper page='dcl'><DiamondCityLights page='dcl' /></PageWrapper></Route>
        <Route path='/project-vn'><PageWrapper page='vn'><VisualNovel page='vn' /></PageWrapper></Route>

        {/* (Brandon) I intentionally give the following pages the incorrect 'page' variable - It's only used for styling */}
        <Route path='/all-art'><PageWrapper page='finana'><Art page='finana' /></PageWrapper></Route>
        <Route path='/all-messages'><PageWrapper page='elira'><Messages page='elira' /></PageWrapper></Route>
        <Route path='/about'><PageWrapper page='pomu'><About page='pomu' /></PageWrapper></Route>
        <Route>
          <PageWrapper page='home'><Home /></PageWrapper>
        </Route>
      </Switch>
    </div>
  )
}
