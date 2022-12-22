
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

    


    const filteredList = useMemo(getFilteredList, [selectedCategory, itemList]);


    return{
        itemList,
        selectedCategory,
        defaultItems,
        handleCategoryChange,
        getFilteredList,
        filteredList,
        filterByStorage,
        
    }

}
