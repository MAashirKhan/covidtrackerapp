import React, { Component } from 'react'

//Importing Components
import Header from './Components/header'
import Cards from './Components/Cards/Cards'
import Chart from './Components/Charts/Charts'
import CountryPicker from './Components/CountryPicker/CountryPicker'
import { fetchData }  from './API/'

class App extends React.Component {
    state = {
        data: {}
    }


      async componentDidMount() {
        const fetchedData = await fetchData();
    
        this.setState({ data: fetchedData });
      }
    
    //   handleCountryChange = async (country) => {
    //     const data = await fetchData(country);
    
    //     this.setState({ data, country: country });
    //   }

    render() {
        const { data } = this.state;
    
    return (
        <div>
            <Header />
            <Cards />
            <CountryPicker />
            <Chart />
        </div>
    );

    }
}

export default App
