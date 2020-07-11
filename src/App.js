import React from 'react'
//Importing Components
import Header from './Components/header'
import Footer from './Components/footer'
import Cards from './Components/Cards/Cards'
import Chart from './Components/Charts/Charts'
import CountryPicker from './Components/CountryPicker/CountryPicker'
import { fetchData }  from './API/'

class App extends React.Component{
    state = {
        data: {},
        country: '',
    }
    
      async componentDidMount() {
        const fetchedData = await fetchData();
    
        this.setState({ data: fetchedData });
      }
    
      handleCountryChange = async (country) => {
        const data = await fetchData(country);
    
        this.setState({ data, country: country });
      }

    render() {
        const { data, country } = this.state;
    
    return (
        <div>
            <Header />
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country}/>
            <Footer />
        </div>
    );

    }
}

export default App
