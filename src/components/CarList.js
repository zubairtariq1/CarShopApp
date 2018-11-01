import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Addcar from './Addcar.js';

class Carlist extends Component {

    constructor(params) {
        super(params);
        this.state = {cars: [], showSnack: false, msg:''};
    }

    componentDidMount() {
        this.listCars();
    }

    updateCar = (car, link) => {
        fetch(link,
        {method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(car)
        })
        .then(response => {
            this.setState({showSnack: true, msg:'Car Saved'})
            this.listCars();
        })
    }
    renderEditable =(cellInfo) => {
        return (
          <div
            style={{ backgroundColor: "#fafafa" }}
            contentEditable
            suppressContentEditableWarning
            onBlur={e => {
              const data = [...this.state.cars];
              data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
              this.setState({ cars: data });
            }}
            dangerouslySetInnerHTML={{
              __html: this.state.cars[cellInfo.index][cellInfo.column.id]
            }}
          />
        );
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
            this.setState({showSnack: true, msg: 'Car Deleted'});
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
        .catch(err => {
            console.error(err);
            this.setState({showSnack: true, msg: 'Error in Saving'})
        })
    }

    render() {
        const columns = [{
            Header: 'Brand',
            accessor: 'brand',
            Cell: this.renderEditable
        }, {
            Header: 'Model',
            accessor: 'model',
            Cell: this.renderEditable
            
        }, {
            Header: 'Year',
            accessor: 'year',
            Cell: this.renderEditable
            
        }, {
            Header: 'Color',
            accessor: 'color',
            Cell: this.renderEditable
            
        }, {
            Header: 'Fuel',
            accessor: 'fuel',
            Cell: this.renderEditable
            
        }, {
            Header: 'Price €',
            accessor: 'price',
            Cell: this.renderEditable
            
        }, {
            Header: '',
            accessor: '_links.self.href',
            filterable: false,
            sortable: false,
            Cell: ({row, value}) => (
                <div><Button size="small" color="default" onClick={() => this.updateCar(row, value)}><SaveIcon /></Button><Button size="small" color="default" onClick={() => this.deleteCar(value)}><DeleteIcon /></Button>
                </div>
                ),
            
            }, 
        ]
        
         
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
                    message={this.state.msg}
                />
          </div>
        );
    }
}

export default Carlist;