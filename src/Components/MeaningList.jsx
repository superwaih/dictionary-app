import React, { useContext, useEffect, useState } from 'react'
import { InputContext } from '../App'
import axios from 'axios'
import Definition from './Definition';
import { WordUse } from './WordUse';
import randomWords from 'random-words'

axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en';
const MeaningList = () => {
        const{inputValue} =useContext(InputContext);
        const[data, setData] = useState(null);
        const[error, setError] = useState("");
        const[loading, setLoading] = useState(false);
        const[randowWord, setRandowWord] = useState("");


        const fetchData = async (param) => {
            try{
                setLoading(true)
                const res = await axios.get(`/${param}`);
                setData(res.data)
                setError(null)

            }catch(err){
                setError(err)
            }finally{
                setLoading(false)
            }
        }

        useEffect(() => {
            if(inputValue.length){
                fetchData(inputValue);
            }
        },[inputValue])

        const fetchRandowWord = () => {
                fetch('https://random-words-api.vercel.app/word')
                .then(response => response.json())
                .then(result => 
                    setRandowWord(result.word)
                    )       
             }


        useEffect(() => {
            //fetchRandowWord()
          //  console.log(randomWords())
           // if(randowWord){
                console.log(randowWord)
              fetchData(randomWords());
           // }
            
          
           
               
            
        },[])



        if(loading) {
            return (
              <div className="flex flex-col space-y-3 animate-pulse p-4 container mx-auto max-w-2xl">
                <div className="h-6 bg-gray-300 mt-5 rounded-md"></div>
                <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
                <div className="h-8 bg-gray-300 mt-5 rounded-md"></div>
                <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
              </div>
            )
          }
        
          if(error) {
            return <h3 className="text-center mt-10 font-semibold text-gray-500">No Definitions Found 😥</h3>
          }
        
          return (
            <div className="container mx-auto p-4 max-w-2xl">
             {data && (
                <div>
                  <h3 className="text-2xl font-bold mt-4">Meaning & Definitions:</h3>
                  <Definition mean={data} />
                  <h3 className="text-2xl font-bold mt-4">Example:</h3>
                  <WordUse mean={data} />
                </div>
             )}
            </div>
  )
}

export default MeaningList