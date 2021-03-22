import React from 'react';
import House from './components/House';
import { NewHouseForm } from './components/NewHouseForm';
import { housesApi } from './rest/HousesApi.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          houses: [],
        };

        this.creatHouse = this.creatHouse.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
        this.updateHouse = this.updateHouse.bind(this);
    }

    fetchHouses = async () => {
      const houses = await housesApi.get();
      this.setState({ houses });
   };

    componentDidMount() {
        this.fetchHouses();
    }

    creatHouse = async (house) => {
        await housesApi.create(house);
        this.fetchHouses();
    };

    deleteHouse = async (id) => {
      await housesApi.delete(id);
      this.fetchHouses();
    };

    updateHouse = async (house) => {
        await housesApi.update(house);
        this.fetchHouses();
    };

    render() {
        let houses = this.state.houses.map((house) => {
            return (
                <House
                  {...house}
                  key={house._id}
                  deleteHouse={this.deleteHouse}
                  updateHouse={this.updateHouse}
                /> 
            );
        });

        return (
            <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="card">
                      <div className="card-header">
                        <h4>Add House</h4>
                     </div>
                     <div className="card-body">
                       <NewHouseForm creatHouse={this.creatHouse} />
                     </div>
                   </div>
                 </div>
                 <div className="col-md-2"></div>
                   <div className="col">
                    <div className="row">
                      <div className="container">
                      {houses}
                    <br />
                 </div>
               </div>
              </div>
            </div>
          </div>

        );
    }

    
}