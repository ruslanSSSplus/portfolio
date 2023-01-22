

import { useTheme } from './Hooks/use-theme'

import './App.css'
import {NavBar} from "./components/NavBar/NavBar";
import {Contacts} from "./Pages/Contacts/Contacts";
import {Works} from "./Pages/Works/Works";
import {Info} from "./Pages/Info/Info";
import {useCoordinates} from "./Hooks/use-coordinates";


function App() {
  const { theme, setTheme } = useTheme()
  const { x, y } = useCoordinates()


  const handleLightThemeClick = () => {
    setTheme('light')
  }
  const handleDarkThemeClick = () => {
    setTheme('dark')
  }




  return (
    <div className='App' id={'App'} >


    <NavBar handleDarkThemeClick={ handleDarkThemeClick} handleLightThemeClick={handleLightThemeClick}/>

      <Info theme={theme} x={x} y={y} />
      <Works />
      <Contacts />



    </div>
  );
}

export default App;
