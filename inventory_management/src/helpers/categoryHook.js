
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
// import { AllItems } from '../components/Kitchen/Table/ddbb';



export const useCategory = () =>{

    // List of the elements currently present on the database

    const [itemList, setItemList] = useState([]);
    
    const [selectedCategory, setSelectedCategory] = useState();


    const fetchAllItems = async() =>{
      try{
          const resp = await axios.get("http://localhost:8800/items")
              // Waits for the api to GET the items, (Which behavior is defined on the backend), then changes the state of the item list.
          setItemList(resp.data)
      
      }catch(err){
          console.log(err)
      }
    }
    
    useEffect(() => {
      // Calls for the api when the element is rendered. (The component where we render this custom hook inherits the useEffect)
      fetchAllItems()
    }, [])
    
    
      // Changes the category state to the one the event picks
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }

    
    const getFilteredList = () => {
      // if there is no selectedCategory, return all the items
        if (!selectedCategory) {
        return itemList;
    }
      // If user selects category, filter them with the category selected
        return itemList.filter((item) => item.category === selectedCategory);
    }

    const filterByStorage = (activeStorage) => {
      // Filter the items depending on the selected storage
        return  itemList.filter((item) => item.storage === activeStorage )
    }

    
   


    const handleSearch = (event) => {

        // If the search input is empty, show all the items

        if (event.target.value === "") {
          const initialList = fetchAllItems()
          setItemList(initialList) 
        }
        const filteredValues = itemList.filter(
          // filter the items depending on what the user is writing
          (item) =>
            item.product_name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        );
        setItemList(filteredValues);
      };

      const filteredList = useMemo(getFilteredList, [selectedCategory, itemList]);


    return{
       
      
        itemList,
        selectedCategory,
        handleCategoryChange,
        getFilteredList,
        filteredList,
        filterByStorage,
        handleSearch
        
        
    }

}
