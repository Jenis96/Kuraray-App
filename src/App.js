import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={result:""};
  }

// callApi(){
//   fetch("http://localhost:9000/testApi")
//  // .then(res=> res.text())
//   .then(res=>{console.log(res.json())})
//   .then(res=> this.setState({apiResponse: res}));
// }

// componentWillMount(){
//   this.callApi();
// }

async componentDidMount() {
  await axios.get("http://localhost:9000/testApi")
            .then(result => {
              console.log(result.data)
              this.setState({
                 Contacts: result.data 
                });
  })
  // .then((result)=>{
  //   this.setState({
  //     contacts: result.data,
  //     totalContacts:result.data.length,
  //   })
  // }
  }

render(){
  const { Contacts } = this.state;
   return th+(Contacts) // this should return a table
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <p>{this.state.result}</p> */}
      <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Mobile No</th>  
            </tr>
          </thead>
          </table>
    </div>
  );
}
}

export default App;
