import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
 

class Addcar extends Component {
    constructor(props){
        super(props);
        this.state = {brand:'', model:'', color:'', year:'', fuel:'', price:''}
        this.addModal = React.createRef();
    }

    handleChange =(event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    saveCar =() => {
        const car = {brand: this.state.brand, model: this.state.model, color: this.state.color, 
        year: this.state.year, fuel: this.state.fuel, price:this.state.price};
        this.props.saveCar(car);
        this.setState({brand: '', model:'', color:'', year:'', fuel:'', price:''});
        this.addModal.current.hide();
    }

    render() {
        const addDialog ={
            width: '20%',
            height: '300px',
            marginLeft: '-10%',
        };

        return (
            <div>
                <Button style={{margin: 10}} variant="contained" color="primary" onClick={() => this.addModal.current.show()}>New Car <AddIcon /></Button>
                <SkyLight dialogStyles={addDialog} hideOnOverlayClicked ref={this.addModal} title="New Car">
                <TextField placeholder="brand" name="brand" onChange={this.handleChange} value={this.state.brand} /> <br />
                <TextField placeholder="model" name="model" onChange={this.handleChange} value={this.state.model} /> <br />              
                <TextField placeholder="color" name="color" onChange={this.handleChange} value={this.state.color} /> <br />              
                <TextField placeholder="year" name="year" onChange={this.handleChange} value={this.state.year} />   <br />            
                <TextField placeholder="fuel" name="fuel" onChange={this.handleChange} value={this.state.fuel} /> <br />              
                <TextField placeholder="price" name="price" onChange={this.handleChange} value={this.state.price} />  <br /> 
                <Button style={{margin:10}} variant ="contained" color="primary"  onClick={this.saveCar}>Save Car<SaveIcon /></Button>            
                </SkyLight>
                
            </div>
        );
    }
}

export default Addcar;