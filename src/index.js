import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from 'styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/react-homework-template">
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </BrowserRouter>
);
