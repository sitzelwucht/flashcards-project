
import Header from './components/Header'
import CardContainer from './components/CardContainer'
import { CardProvider } from './contexts/CardProvider'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { orange, amber,deepOrange } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: orange,
    error: deepOrange
  },
})


function App() {
  return (
    <ThemeProvider theme={theme}>
    <CardProvider>
      <div className="App">
        <Header />
        <CardContainer />
      </div>
      </CardProvider>
    </ThemeProvider>
  );
}

export default App;
