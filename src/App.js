import './App.css';
import Content from './Components/Content/content'
import ThemeContextProvider from './Context/themecontext';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Content/> 
      </ThemeContextProvider>
     
    </div>
  );
}

export default App;
