import React, { Component } from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './Api/ApiMethod';
import styles from './ChartComponents.css';

//import image from './images/image.png';


class ChartComponent extends Component {

  state = {
    data: {country: "country"},
    country: '',
  }
  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ ...data, country: country });
  }

  
  dashboardHandler = () =>  {
    this.props.history.push("/dashboard");
  
  }

  render() {
    const { data, country } = this.state;

    return (
      <React.Fragment>
        <div onClick={this.dashboardHandler} style={{marginLeft : "30px", cursor:"pointer"}}><h3 className="logo">DASH<span>Board</span></h3></div>
      
      <div className={styles.parent}>
        {/* <img className={styles.image} src={image} alt="COVID-19" /> */}
        <div>
          <Cards data={data} />
        </div>
        <div><CountryPicker handleCountryChange={this.handleCountryChange} /></div>
        <div><Chart className={styles.chartContainer} data={data} country={country} /> </div>
      </div>
      </React.Fragment>
    );
  }
}
 
export default ChartComponent;


// import React, { Component } from 'react';

// class ChartComponent extends Component {
//   state = {  }
//   render() { 
//     return ( <h1>Shubham</h1> );
//   }
// }
 
// export default  ChartComponent;