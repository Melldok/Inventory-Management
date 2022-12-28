import axios from "axios"
import { useState } from "react"




// export const AllItems = async() =>{
//     try{
//         const resp = await axios.get("http://localhost:8800/items")
//         const items = []
//         items.push(resp.data)
//         return items[0]
//     }catch(err){
//         console.log(err)
//     }
// }


 







 export const AllItems = [
    { product_name: "Green Apple", in_stock : 23, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage: "V1" },
    { product_name: "Red Apple", in_stock : 30, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage: "V1"  },
    { product_name: "Eggplant", in_stock : 10, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage: "V1"  },
    { product_name: "Asparagus", in_stock : 13, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage:  "V1" },
    { product_name: "Beet", in_stock : 56, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage:  "V1" },
    { product_name: "Bok Choy", in_stock : 3, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage:  "V1" },
    { product_name: "Broccoli", in_stock : 15, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage: "V1"   },
    { product_name: "Brussels Sprouts", in_stock : 44, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage: "V1"   },
    { product_name: "Purple Cabagge", in_stock : 12, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage: "V1"   },
    { product_name: "Carrots", in_stock : 60, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage: "V2" },
    { product_name: "Cauliflower", in_stock : 11, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage: "V2"  },
    { product_name: "Celery", in_stock : 30, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage: "V2"  },
    { product_name: "Celeriac", in_stock : 33, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage:  "V2" },
    { product_name: "Chard", in_stock : 10, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage:  "V2" },
    { product_name: "Chicory", in_stock : 3, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage:  "V2" },
    { product_name: "Corn", in_stock : 12, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage: "V2"   },
    { product_name: "Cress", in_stock : 34, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage: "V2"   },
    { product_name: "Cucumbers", in_stock : 70, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage: "V2"   },
    { product_name: "Daikon", in_stock : 10, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage: "V3" },
    { product_name: "Garlic", in_stock : 41, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage: "V3"  },
    { product_name: "Green Beans", in_stock : 12, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage: "V3"  },
    { product_name: "Greens", in_stock : 23, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage:  "V3" },
    { product_name: "Collard Greens", in_stock : 36, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage:  "V3" },
    { product_name: "Mustard Greens", in_stock : 43, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage:  "V3" },
    { product_name: "Gourds", in_stock : 60, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage: "V3"   },
    { product_name: "Jicama", in_stock : 32, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage: "V3"   },
    { product_name: "Kale", in_stock : 11, category : "Vegetables", img: "https://source.unsplash.com/30x30",storage: "V3"   },

    { product_name: "Chicken Breasts", in_stock : 33, category : "Meat", img: "https://source.unsplash.com/30x30",storage: "M1"  },
    { product_name: "Chicken ", in_stock : 43, category : "Meat", img: "https://source.unsplash.com/30x30",storage: "M1"  },
    { product_name: "meat 3", in_stock : 13, category : "Meat", img: "https://source.unsplash.com/30x30",storage: "M1"  },
    { product_name: "meat 4", in_stock : 25, category : "Meat", img: "https://source.unsplash.com/30x30",storage: "M1"  },
    { product_name: "meat 5", in_stock : 78, category : "Meat", img: "https://source.unsplash.com/30x30",storage: "M1"  },
    { product_name: "meat 6", in_stock : 21, category : "Meat", img: "https://source.unsplash.com/30x30",storage: "M1"  },
    { product_name: "meat 7", in_stock : 34, category : "Meat", img: "https://source.unsplash.com/30x30",storage: "M2"  },
    { product_name: "meat 1", in_stock : 5, category : "Meat", img: "https://source.unsplash.com/30x30",storage: "M2"  },
    { product_name: "meat 2", in_stock : 12, category : "Meat", img: "https://source.unsplash.com/30x30",storage: "M2"  },
    { product_name: "meat 3", in_stock : 15, category : "Meat", img: "https://source.unsplash.com/30x30",storage: "M2"  },
    { product_name: "meat 4", in_stock : 7, category : "Meat", img: "https://source.unsplash.com/30x30",storage: "M2"  },
    { product_name: "meat 5", in_stock : 21, category : "Meat", img: "https://source.unsplash.com/30x30",storage: "M2"  },
    { product_name: "meat 6", in_stock : 30, category : "Meat", img: "https://source.unsplash.com/30x30",storage: "M3"  },
    { product_name: "meat 7", in_stock : 78, category : "Meat", img: "https://source.unsplash.com/30x30",storage: "M3"  },
    { product_name: "meat 1", in_stock : 32, category : "Meat", img: "https://source.unsplash.com/30x30",storage: "M3"  },
    { product_name: "meat 2", in_stock : 24, category : "Meat", img: "https://source.unsplash.com/30x30",storage: "M3"  },
    { product_name: "meat 3", in_stock : 15, category : "Meat", img: "https://source.unsplash.com/30x30",storage: "M3"  },
    { product_name: "meat 4", in_stock : 12, category : "Meat", img: "https://source.unsplash.com/30x30",storage: "M3"  },
    { product_name: "meat 5", in_stock : 19, category : "Meat", img: "https://source.unsplash.com/30x30",storage: "M3"  },
    { product_name: "meat 6", in_stock : 13, category : "Meat", img: "https://source.unsplash.com/30x30",storage: "M3"  },
    { product_name: "meat 7", in_stock : 21, category : "Meat", img: "https://source.unsplash.com/30x30",storage: "M3"  },

    { product_name: "Fish 1", in_stock : 23, category : "Fish", img: "https://source.unsplash.com/30x30",storage: "F1"  },
    { product_name: "Fish 2", in_stock : 23, category : "Fish", img: "https://source.unsplash.com/30x30",storage: "F1"  },
    { product_name: "Fish 3", in_stock : 23, category : "Fish", img: "https://source.unsplash.com/30x30",storage: "F1"  },
    { product_name: "Fish 4", in_stock : 23, category : "Fish", img: "https://source.unsplash.com/30x30",storage: "F1"  },
    { product_name: "Fish 5", in_stock : 23, category : "Fish", img: "https://source.unsplash.com/30x30",storage: "F1"  },
    { product_name: "Fish 6", in_stock : 23, category : "Fish", img: "https://source.unsplash.com/30x30",storage: "F1"  },
    { product_name: "Fish 7", in_stock : 23, category : "Fish", img: "https://source.unsplash.com/30x30",storage: "F1"  },
    { product_name: "Fish 8", in_stock : 23, category : "Fish", img: "https://source.unsplash.com/30x30",storage: "F1"  },
    { product_name: "Fish 9", in_stock : 23, category : "Fish", img: "https://source.unsplash.com/30x30",storage: "F1"  },
    { product_name: "Fish 1", in_stock : 23, category : "Fish", img: "https://source.unsplash.com/30x30",storage: "F2"  },
    { product_name: "Fish 2", in_stock : 23, category : "Fish", img: "https://source.unsplash.com/30x30",storage: "F2"  },
    { product_name: "Fish 3", in_stock : 23, category : "Fish", img: "https://source.unsplash.com/30x30",storage: "F2"  },
    { product_name: "Fish 4", in_stock : 23, category : "Fish", img: "https://source.unsplash.com/30x30",storage: "F2"  },
    { product_name: "Fish 5", in_stock : 23, category : "Fish", img: "https://source.unsplash.com/30x30",storage: "F2"  },
    { product_name: "Fish 6", in_stock : 23, category : "Fish", img: "https://source.unsplash.com/30x30",storage: "F2"  },
    { product_name: "Fish 7", in_stock : 23, category : "Fish", img: "https://source.unsplash.com/30x30",storage: "F2"  },
    { product_name: "Fish 8", in_stock : 23, category : "Fish", img: "https://source.unsplash.com/30x30",storage: "F2"  },
    { product_name: "Fish 9", in_stock : 23, category : "Fish", img: "https://source.unsplash.com/30x30",storage: "F2"  },

    { product_name: "Dry Food 1", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D1"   },
    { product_name: "Dry Food 2", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D1"   },
    { product_name: "Dry Food 3", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D1"   },
    { product_name: "Dry Food 4", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D1"   },
    { product_name: "Dry Food 5", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D1"   },
    { product_name: "Dry Food 6", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D2"   },
    { product_name: "Dry Food 7", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D2"   },
    { product_name: "Dry Food 8", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D2"   },
    { product_name: "Dry Food 9", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D2"   },
    { product_name: "Dry Food 10", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D2"   },
    { product_name: "Dry Food 1", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D2"   },
    { product_name: "Dry Food 2", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D2"   },
    { product_name: "Dry Food 3", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D3"   },
    { product_name: "Dry Food 4", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D3"   },
    { product_name: "Dry Food 5", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D3"   },
    { product_name: "Dry Food 6", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D3"   },
    { product_name: "Dry Food 7", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D3"   },
    { product_name: "Dry Food 8", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D3"   },
    { product_name: "Dry Food 9", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D3"   },
    { product_name: "Dry Food 10", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D4"   },
    { product_name: "Dry Food 1", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D4"   },
    { product_name: "Dry Food 2", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D4"   },
    { product_name: "Dry Food 3", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D4"   },
    { product_name: "Dry Food 4", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D4"   },
    { product_name: "Dry Food 5", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D4"   },
    { product_name: "Dry Food 6", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D4"   },
    { product_name: "Dry Food 7", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D4"   },
    { product_name: "Dry Food 8", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D4"   },
    { product_name: "Dry Food 9", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D4"   },
    { product_name: "Dry Food 10", in_stock : 23, category : "Dry Food", img: "https://source.unsplash.com/30x30",storage: "D4"   },

    { product_name: "Fruit 1", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR1"   },
    { product_name: "Fruit 2", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR1"   },
    { product_name: "Fruit 3", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR1"   },
    { product_name: "Fruit 4", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR1"   },
    { product_name: "Fruit 5", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR1"   },
    { product_name: "Fruit 6", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR1"   },
    { product_name: "Fruit 1", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR1"   },
    { product_name: "Fruit 2", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR1"   },
    { product_name: "Fruit 3", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR2"   },
    { product_name: "Fruit 4", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR2"   },
    { product_name: "Fruit 5", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR2"   },
    { product_name: "Fruit 6", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR2"   },
    { product_name: "Fruit 1", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR2"   },
    { product_name: "Fruit 2", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR2"   },
    { product_name: "Fruit 3", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR2"   },
    { product_name: "Fruit 4", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR2"   },
    { product_name: "Fruit 5", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR2"   },
    { product_name: "Fruit 6", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR2"   },
    { product_name: "Fruit 1", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR3"   },
    { product_name: "Fruit 2", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR3"   },
    { product_name: "Fruit 3", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR3"   },
    { product_name: "Fruit 4", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR3"   },
    { product_name: "Fruit 5", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR3"   },
    { product_name: "Fruit 6", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR3"   },
    { product_name: "Fruit 1", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR3"   },
    { product_name: "Fruit 2", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR3"   },
    { product_name: "Fruit 3", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR3"   },
    { product_name: "Fruit 4", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR3"   },
    { product_name: "Fruit 5", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR3"   },
    { product_name: "Fruit 6", in_stock : 23, category : "Fruit", img: "https://source.unsplash.com/30x30",storage: "FR3"   },

  
]

