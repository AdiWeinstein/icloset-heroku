import React, {useCallback,useState} from 'react';



export const ViewAllContext = React.createContext({
    items: [],//Before fetching the array is empty 
    setItems: () => [],
    getItems: ()=> []
});


export default function ViewAllProvider({children}) {
const [items, setItems] = useState([]);//At the begining we have an empty array of products
const [combination, setCombination] = useState([])


const getItems = useCallback(()=> {//What is written inside this function is going to be executed when the component is rendered
    
    fetch('/api/viewAll')
    .then(response =>response.json())//After fetching take the response (that came as a stirng) json() will convert the string in-to an array of objects.
    .then(itemssArr => setItems(itemssArr))//Takes the items array of objects, that we got above and replaces the empty 'items' array with the one we got from fetch()
    
  }, []);

  const combinationsList = useCallback(()=> { //fetch all liked items(combination) 
    fetch('/api/likedItems')
    .then(response =>response.json())//After fetching take the response (that came as a stirng) json() will convert the string in-to an array of objects.
    .then(c => setCombination(c))//Takes the items array of objects, that we got above and replaces the empty 'items' array with the one we got from fetch()  
  }, []);


  

    return (
        <ViewAllContext.Provider value={{
            items,
            setItems,
            getItems,
            combination,
            setCombination,
            combinationsList
        }}>
            {children}    
        </ViewAllContext.Provider>
       
    );
    }    
    