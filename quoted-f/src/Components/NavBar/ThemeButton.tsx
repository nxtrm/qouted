import { IconButton, useColorMode } from "@chakra-ui/react"
import { FaRegMoon,FaSun } from "react-icons/fa";

function ThemeButton() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
          <IconButton aria-label="Toggle Theme" onClick={toggleColorMode} icon={colorMode === 'light' ? <FaSun />: <FaRegMoon/>}/>
      </header>
    )
  }

  export default ThemeButton