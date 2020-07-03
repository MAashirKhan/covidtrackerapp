import React from 'react'

//Importing Components
import Header from './Components/header'
import Cards from './Components/Cards/Cards'
import Chart from './Components/Charts/Charts'
import CountryPicker from './Components/CountryPicker/CountryPicker'

const App = () => {
    return (
        <div>
            <Header />
            <Cards />
            <CountryPicker />
            <Chart />
        </div>
    )
}

export default App
