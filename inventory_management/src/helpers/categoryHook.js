
import { useEffect, useMemo, useState } from 'react';
import { AllItems } from '../components/Kitchen/Table/ddbb';


export const useCategory = (initialValue) =>{

  


    const [itemList, setItemList] = useState([]);
    
    const [selectedCategory, setSelectedCategory] = useState();

    
    

    const defaultItems = AllItems;


    useEffect(() => {
        setItemList(defaultItems);
    }, []);


    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }

   
    const getFilteredList = () => {
        if (!selectedCategory) {
        return itemList;
    }
        return itemList.filter((item) => item.category === selectedCategory);
    }

    const filterByStorage = (activeStorage) => {
        return  itemList.filter((item) => item.storage === activeStorage )
    }

  


      const handleSearch = (event) => {

        if (event.target.value === "") {
          setItemList(AllItems);
          return;
        }
        const filteredValues = itemList.filter(
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
