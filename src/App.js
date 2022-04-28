import { createContext, useState } from "react";
import Header from "./Components/Header";
import MeaningList from "./Components/MeaningList";
import randomWords from 'random-words'


// Create context
export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");
  const word = randomWords();

  const value = {
    inputValue, setInputValue
  }

  return (
    <InputContext.Provider value={value}>
      <div className="App">
       <Header word={word} />
       <MeaningList word={word} />
        
      </div>
    </InputContext.Provider>
  );
}

export default App;