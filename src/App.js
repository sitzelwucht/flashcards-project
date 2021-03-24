import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import CardContainer from './components/CardContainer'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { orange, teal } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: orange,
  },
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <CardContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
