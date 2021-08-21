import { ThemeProvider } from 'styled-components';
import Main from './components/Main';
import * as themes from './theme/schema.json';
import { GlobalStyles } from './theme/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={themes.default.data.light}>
      <GlobalStyles />
      <div>
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
