


import './StorageLayout.css'

export const StorageLayout = ({ setSelectedStorage}) => {

  
    const handleSelectedStorage = (event) => {

        const allStorage = document.querySelectorAll('.clickable')
        
        allStorage.forEach(storage => {
            storage.classList.remove('clicked')
        });

        setSelectedStorage(event.target.textContent)
        event.currentTarget.classList.add('clicked')
        

    }

  
  
    return (
    <div className="storageLayout">
        <div className="Veggies">
            <div className="Box1">
            <div className="Veggies1 clickable" onClick={handleSelectedStorage}><p>V1</p></div>
            </div>
            <div className="Veggies2 clickable" onClick={handleSelectedStorage}><p>V2</p></div>
            <div className="Veggies3 clickable" onClick={handleSelectedStorage}><p>V3</p></div>
        </div>
        <div className="Meat">
            <div className="Meat3 clickable" onClick={handleSelectedStorage}><p>M3</p></div>
            <div className="Meat2 clickable" onClick={handleSelectedStorage}><p>M2</p></div>
            <div className="Meat1 clickable" onClick={handleSelectedStorage}><p>M1</p></div>
        </div>
        <div className="Fish">
            <div className="Fish1 clickable" onClick={handleSelectedStorage}><p>F1</p></div>
            <div className="Fish2 clickable" onClick={handleSelectedStorage}><p>F2</p></div>
        </div>
        <div className="Dry-food">
            <div className="Dry1 clickable" onClick={handleSelectedStorage}><p>D1</p></div>
            <div className="Dry2 clickable" onClick={handleSelectedStorage}><p>D2</p></div>
            <div className="Dry3 clickable" onClick={handleSelectedStorage}><p>D3</p></div>
            <div className="Dry4 clickable" onClick={handleSelectedStorage}><p>D4</p></div>
        </div>
        <div className="Trash-Section">
            <div className="Trash3 clickable" onClick={handleSelectedStorage}><p>T3</p></div>
            <div className="Trash2 clickable" onClick={handleSelectedStorage}><p>T2</p></div>
            <div className="Trash1 clickable" onClick={handleSelectedStorage}><p>T1</p></div>
        </div>
        <div className="Fruits">
            <div className="Fruit1 clickable" onClick={handleSelectedStorage}><p>F1</p></div>
            <div className="Fruit2 clickable" onClick={handleSelectedStorage}><p>F2</p></div>
            <div className="Fruit3 clickable" onClick={handleSelectedStorage}><p>F3</p></div>
        </div>
</div>
  )
}
