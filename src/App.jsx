import Stack from "@mui/material/Stack"
import Menu from "./components/Menu"
import Content from "./components/Content"
import RightBar from "./components/RightBar"
import Navbar from "./components/Navbar"
import Container from "@mui/material/Container"
import { Box, createTheme } from "@mui/material"
import { useState } from "react"
import { ThemeProvider } from "@emotion/react"


const App = () => {

  const [theme, setTheme] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: theme
    },
    typography: {
      fontFamily: "Poppins",
      fontWeightLight: 400,
      fontWeightMedium: 600,
      fontWeightRegular: 500,
      fontWeightBold: 500
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Container maxWidth="xl">
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Menu />
            <Content />
            <RightBar />
          </Stack>
        </Container>
      </Box >
    </ThemeProvider>
  )
}

export default App