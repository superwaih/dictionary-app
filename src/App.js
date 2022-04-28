import { createContext, useState } from "react";
import Header from "./Components/Header";
import MeaningList from "./Components/MeaningList";



// Create context
export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");

  const value = {
    inputValue, setInputValue
  }

  return (
    <InputContext.Provider value={value}>
      <div className="App">
       <Header />
       <MeaningList />
        
      </div>
    </InputContext.Provider>
  );
}

export default App;