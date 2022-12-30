# Inventory Management Application CS50

#### Description :

The present project is a web application made with React, JavaScript, HTML and pure (vanilla) CSS for the Front End. The Backend was made using MySQL and Express. 
This project is made entirely by my own. The application is basically a software prototype to control the stock and item flow in a gastronomy business. I was a chef before I started programming and one of the things I found more chaotic in restaurants and different gastronomic businesses is the lack of control and digitalization, specially here in Spain. My idea is to have the storage and item flow in real-time, so storage spaces are always used and stored in the same way. With two-way communication between workers and managers. The manager would be able to see all what's going on in the restaurant with a simple storage layout separated by colors and shapes representing the actual kitchen or restaurant space. The manager can filter all items by category, name or storage space, so with two easy steps he or she can have control of everything. At the same time, workers would be able to update the status of all items with their own application from phones or tablets, so everything would be flowing on real time. Paper is slow and people don't have time almost never to actually write on it, so most financial changes get lost due to the lack of time required to operate on it.


I made the front end first and then the back end, but for understandability purposes I will explain the project in the opposite order. 

## Project Usage:

-- Install with yarn install and start with yarn start. Create tables with MySQL.

## Server Side / Back-End

### MySQL

First, I created the table on MySQL with the following structure: 

```Mysql
        CREATE TABLE `items` (
    `id` int NOT NULL AUTO_INCREMENT,
    `product_name` varchar(45) NOT NULL,
    `in_stock` int NOT NULL,
    `category` varchar(45) NOT NULL,
    `src` varchar(70) NOT NULL,
    `storage` varchar(45) NOT NULL,
    PRIMARY KEY (`id`)
    )

```
With this layout, new items would be created with its own auto-increment Ids, which would be the primary keys used to CRUD them. 

### Index.js (Back End CRUD)

In this file is where all the backend configurations live. I used nodemon to automatically refresh all the changes made to this file, which is acting as the server. I used express to make faster connections. 

Database connection: 

```js   
    const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"inventory_management"

})
```

Root is the default user and password for local connections. 


8800 is the port I am using to take the SQL file. 

```js   

    app.listen(8800, () => {
    console.log('Connected to backend!')
})

```

GET METHOD. This is the part where we take all the data from the table selected, in this case I called the table "items". We are also handling the errors.

```js
    app.get("/items", (req,resp) => {
    const q = "SELECT * FROM items"
    db.query(q, (err, data) => {
        if(err) return resp.json(err)
        return resp.json(data)
    })
})
```

POST METHOD. Specifies how new items are going to be created, for security measures, we are using interrogation marks and variables to bring the values we want from the user. Each value is going to be requested from the user except the image, for this project I decided to use mockup random images instead of file uploading.

```js
    app.post("/items", (req, resp) => {
    const q = "INSERT INTO `inventory_management`.`items` (`product_name`, `in_stock`, `category`, `src`, `storage`) VALUES (?)"

    const values = [
        req.body.product_name,
        req.body.in_stock,
        req.body.category,
        "https://source.unsplash.com/30x30",
        req.body.storage
    ]

    db.query(q, [values], (err,data) => {
        if(err) return resp.json(err)
        return resp.json('Item has been created')
    })
})
```


DELETE METHOD. Items are going to be deleted given their ID, which we will bring to the React components via props. 

```js
    app.delete("/items/:id", (req,resp) => {
    const itemId = req.params.id;
    const q = "DELETE FROM items WHERE id = ?"

    db.query(q,[itemId], (err, data) => {
        if(err) return resp.send(err)
        return resp.json('Item has been deleted')
    })
})

```


PUT METHOD. For this project I only activated the PUT method for one element, which is the stock. User will be able to change the number of items present on the storage via buttons. 

```js
    app.put("/items/:id", (req,resp) => {
    
    const itemId = req.params.id;
    const q = "UPDATE items SET `in_stock` = ? WHERE id = ?";
    // User is able to change the stock amount dinamically on the client
    const values = [req.body.in_stock]

    db.query(q, [...values, itemId], (err, data) => {
        if(err) return resp.send(err)
        return resp.json('Item has updated succesfully')
    })
})
```



## FRONT END


Everything starts with the App component. 

```js 
    export const App = () => {

        return (
        
            <>
            <div className="container">
                <Navigation />
                <div className="appLayout">
                <SectionTitle />  
                <Routes>
                        
                    <Route path="/" element/>
                    <Route path="/Kitchen_Layout" element={<KitchenLayout />}/>
                    
                </Routes>

            </div>
            </div>
            </>
     )
    }
```

Here I used React v6 Router to navigate the sections of the SPA, even if only one of them is activated, it's important to make scalable projects that are prepared for the future. <"Navigation"> Is the component where all the different NavLinks will live. <"SectionTitle"> Is The title of the section, which changes dynamically depending on the active route of the moment. <"KitchenLayout"> The main component of this app is being rendered every time we press it's current button, which is defined in <"Navigation">


### Components folder

Here is where we store all of our components, stored by functionality or category. Each one of those components has its own CSS file, so it's easier to change any detail we desire. For this project I decided to use pure CSS, although using any library or framework would be beneficial.

### Nav

This component is responsible for rendering the different sections of our application. In this case we only have one, which is the layout for the Kitchen. Every navigation link has its image, which is rendered via local folder icons. We are changing the background of the selected navigation link via "isActive" prop of Navlink. So the user knows which section he or she selected.

``` js


export const Navigation = () => {

 return (
    <nav> 
        <img className='buttons' src={ backward } alt="" />
        <ul>
        
            <li><NavLink><img src={cart} alt=""/></NavLink></li>
            <li><NavLink><img src={chart} alt="" /></NavLink></li>
            <li><NavLink><img src={shelf} alt="" /></NavLink> </li>
            <li><NavLink className={({ isActive }) => (isActive ? "activated" : "")} to="Kitchen_Layout"><img src={chef} alt="" /></NavLink></li>
        </ul>
        <img className="buttons" src={ settings } alt="" />
    </nav>
   
  )
}
```


### Kitchen Folder.

Inside this folder we have the two main functionalities of the application. The Table part and the Storage part. Each one of these components will share a needed state, the storage that is being selected. The easiest way to share a state between siblings is through their parent, that's why the selectedStorage state is being passed as props to both components. The <"KitchenLayout"> component is responsible for rendering both of those main components. 

```js
    
    <div className='kitchenLayout'>
        <StorageLayout  setSelectedStorage={setSelectedStorage} />
        <TableComponent selectedStorage={selectedStorage} setSelectedStorage={setSelectedStorage}/>
    </div>
```

### Storage Layout. 

<"StorageLayout"> Has two main functions. First, it renders all the divs that conform the layout of the storage, and second, it sets the state of the selected storage. On the CSS side, to add a clicked class when a storage is selected, first we remove that class to every div, so we can "Clean" them.  This happens each time we click a storage, with the allStorage.forEach() function. Each one of the names is corresponding to a specific category. Vegetables, meat, fish, dry food and fruits. For making the visual layout of the kitchen, I used CSS grid because I found it the most convenient. 


### Table Folder

This is the biggest folder of the project and the one that holds the most of the functionality. The main component is <"TableComponent"> Which is responsible for dynamically creating the items inside depending on the category, filter or storage the user selected. This component inherits the selectedStorage prop from its parent. 

### Table Component

The logic and the rendering are separated in this component. All the functions and states are going to be managed in the useCategory custom hook, which is located in the helpers folder, so it's easier to understand. To bring all those functions we use destructuring with JavaScript. Only the function that manages the unselected category is inside the component. 

```js 
  const { handleCategoryChange, filteredList, filterByStorage, handleSearch } = useCategory()
```

First, we have the category div. 

```js
    <div className="categories">
       
       <h3>Filter By Category :</h3>
        <select name="byCategory" id="byCategory" onChange={handleCategoryChange} onClick={handleUnselectedStorage}>
            <option value="">Show All</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Meat">Meat</option>
            <option value="Dry Food">Dry Food</option>
            <option value="Fruit">Fruits</option>
            <option value="Fish">Fish</option>
        </select>
      
      <CreateNew />
      <input onChange={handleSearch} className="searchInput" type="text" name="" id="" placeholder="Search Item"/>
        
    </div>


    const handleUnselectedStorage = () => {
    
    const allStorage = document.querySelectorAll('.clickable')
        
    allStorage.forEach(storage => {
        storage.classList.remove('clicked')
    });
    setSelectedStorage(false)

  }
```

This part of the component is responsible for choosing the category to filter the items the table is rendering. Each time we select a category, we change the state of the selected category. It also unselects the storage section with a click event. Every time we select a category, table will render items of the selected category.

```js

        const [selectedCategory, setSelectedCategory] = useState();

        // Changes the category state to the one the event picks
        
        const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
         }


```

The search input filters the table render depending on what the user wrote. If the input is empty, table renders all items. It relays on the handleSearch function, which listens to the user input, changes it to lower case, so it becomes case-insensitive, and then filters the list of items with the product name.

```js
    <input onChange={handleSearch} className="searchInput" type="text" name="" id="" placeholder="Search Item"/>


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
```

JSX Conditional. This conditional chooses what is going to be rendered on the table. If there is a selected storage, the table will render all the items that matches the name of the storage. If there is a search active, the table will render what is being written by the user, and if not, the table will filter all items. We are using the map method and keys because JSX needs unique keys to render child. Each individual table item is being processed by its own component.

```js
        { 
            
            selectedStorage ? 
            
            filteredByStorage.map((element, index) => (
              <TableItem {...element} key={index} />
            )) 

            : handleSearch ?

            filteredList.map((element, index) => (
              <TableItem {...element} key={index} />
            )) 
            
            : 
            
            filteredList.map((element, index) => (
              <TableItem {...element} key={index} />
            ))
             
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
```


Fetch all the items. To bring all the items from the database to the front-end, we are using axios and async JS. Then we are setting the state of the list to the fetched items.  We are using useEffect to tell the app to fetch the items when the component is rendered.

```js
    
    // List of the elements currently present on the database

    const [itemList, setItemList] = useState([]);

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
    

```



### Table item component. 

This component is responsible for the render of all the individual items from the table. 

```js

      return (
    <tr category={category}>
        <td className='productName'><p>{product_name}</p></td>
        <td><img src={src} alt="" /></td>
        <td className='flex'>
          <button className='addition' onClick={incrementStock}><img className='imageAdd' src={add}/></button>
            <p>{stock}</p>
          <button className='addition' onClick={decrementStock}><img className='imageAdd' src={substract}/></button>
          </td>
        <td>{storage}</td>
        <td className='flex'>
          <button className='actionButtons' onClick={handleUpdate}>Update</button>
          <button className='actionButtons' onClick={handleDelete}>Delete</button>
        </td>
    </tr>
  )

```

Each one of the elements of the table have a Product Name, an image (Which we randomly give as a mockup), two buttons to increment or decrement the stock of the product. These buttons change the state of the stock number in the front, and send it to the back via the update button, so that our application doesn't make hundreds of petitions to the db for second. The Stock Number and the action buttons, update and delete. Props of this component are inherited by the parent, which is inherited by the db call of the custom hook. 

Increment, decrement and Stock state. (Stock can't go below 0)

```js
    
    const [stock, setStock] = useState(in_stock)

    const incrementStock = () => {
    setStock(stock + 1)
    }

    const decrementStock = () => {
    if(stock > 0){
      setStock(stock - 1)
    }
  
  }
```


Handle Update. As we defined on the backend, we are making a put petition to our localhost port with an ID variable (Inherited). Each time we press the update button, the application will send the stock state to the server with the unique ID of the table item, so the back-end will know what element to update. When it finishes, it reloads the window we are using.


```js
    const handleUpdate = async ($id) => {
        try {
        console.log("Update has been called")
        await axios.put(`http://localhost:8800/items/${id}`, {
            in_stock: stock
        });
        window.location.reload()
        } catch (err) {
        console.log(err);
        }
  };
```

Handle Delete. Its behavior is basically the same as the update method. It deletes an element depending on the ID it has whenever we press the delete button

```js

    const handleDelete = async ($id) => {
        try {
        await axios.delete(`http://localhost:8800/items/${id}`);
        window.location.reload()
        } catch (err) {
        console.log(err);
        }
    };

```


### Modal Folder

In this folder I grouped two components that are codependent, the modal and the creation one. 

### Create New component

This component is responsible for two things. Rendering a button that calls for a modal, and passing a function that handles the modal opening to the modal component. 

```js

    export const CreateNew = () => {

    
    const handleOpenning = () => {
   // Handles the behavior of the modal window
    const modal = document.querySelector(".modal")
    modal.classList.toggle("show")
    }
    
    return (
    <>
       <button onClick={handleOpenning}>Create New Item</button>
       <Modal handleOpenning={handleOpenning}/>

    </>
  )
}


```


### Modal component


From this component we are able to create new items and add them to the table. First, we determine a state that will be the future item created. We initialize the state with the same props the item from the db have, remember that we don't need the img src because we are using a mockup.


```js 

    // Handles items sent to the database with a useState hook

    const [item, setItem] = useState({
      product_name: "",
      in_stock : "", 
      category : "", 
      storage: ""

    })
```

After that, we listen to the inputs the user changes, so we change the state with them. We don't need to write all the inputs, so we just use the spread operator with prev.

```js
    
    // setItem will set the state of item to the value the user writes on the inputs
    
    const handleChange = (e) => {
      setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
```

Once submitted, we send the information to the backend, so we can insert the item to the table. 


```js
    
    // When the user clicks submit, we send the petition to the database

    const handleClick = async (e) => {
      const modal = document.querySelector('.modal')
      e.preventDefault();
      try {
        await axios.post("http://localhost:8800/items", item);
        window.location.reload()
      } catch (err) {
        console.log(err);
        setError(true)
      }
    };
```





