import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Addcar from './Addcar.js';

class Carlist extends Component {

    constructor(params) {
        super(params);
        this.state = {cars: [], showSnack: false};
    }

    componentDidMount() {
        this.listCars();
    }

    handleClose = () => {
        this.setState({showSnack: false});
    };

    listCars() {
        fetch('https://carstockrest.herokuapp.com/cars')
        .then(response => response.json())
        .then(responseData => {
            this.setState({cars: responseData._embedded.cars})
        })
    }

    deleteCar = (link) => {
        fetch(link, {method: 'DELETE'})
        .then(response => {
            this.listCars();
            this.setState({showSnack: true});
        })
    }

    saveCar = (car) => {
        fetch('https://carstockrest.herokuapp.com/cars',
        {method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(car)
        })
        .then(response => {
            this.listCars();
        })
    }

    render() {
        const columns = [{
            Header: 'Brand',
            accessor: 'brand'
        }, {
            Header: 'Model',
            accessor: 'model',
            
        }, {
            Header: 'Year',
            accessor: 'year',
            
        }, {
            Header: 'Color',
            accessor: 'color',
            
        }, {
            Header: 'Fuel',
            accessor: 'fuel',
            
        }, {
            Header: 'Price €',
            accessor: 'price',
            
        }, {
            accessor: '_links.self.href',
            filterable: false,
            sortable: false,
            Cell: ({value}) => {
            return <div>
                <IconButton
                    aria-label="Delete"
                    onClick={() => this.deleteCar(value)}>
                    <DeleteIcon />
                </IconButton>
            </div>;
            }
        }];
        return (
            <div>
                <Addcar saveCar={this.saveCar} />
                <ReactTable
                    filterable={true}
                    defaultPageSize={10}
                    data={this.state.cars}
                    columns={columns}
                />
                <Snackbar
                    autoHideDuration={3000}
                    open={this.state.showSnack}
                    onClose={this.handleClose}
                    TransitionComponent={Fade}
                    message={<span id="message-id">Car deleted!</span>}
                />
          </div>
        );
    }
}

export default Carlist;