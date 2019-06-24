import React, { Component, Fragment } from 'react';
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination'

import {Link} from 'react-router-dom'




class List extends Component {
  state={
    list:[],
    currentPage: 1,
    ListPerPage: 10

    
  }
  
 //Listening to event number pages
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
    
  }
//Logic Sort
  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

//Listening Sort
  handleSort(key){

    let arrayCopy = [...this.state.list];
    arrayCopy.sort(this.compareBy(key));

    this.setState({list: arrayCopy});
  }

  //Get Data from API

  getAllList= () =>{
    fetch("http://localhost:3000/data?_sort=date&_order=desc")
    .then(responseFromApi => {
      responseFromApi.json().then(json => {
          this.setState({list:json})
      });
  });
    
  }
  componentDidMount(){
    this.getAllList()
  }


  render() {
   
    const { list, currentPage, ListPerPage } = this.state;


    const indexOfLastList = currentPage * ListPerPage;
    const indexOfFirstList = indexOfLastList- ListPerPage;
    const currentList = list.slice(indexOfFirstList, indexOfLastList);

   

    const renderList = currentList.map((theList, index) => {
      return (
        
        	<tr key={theList._id}>
                  <td width="20%">{theList.title}</td>
                  <td width="55%">{theList.description}</td>
                  <td width="10%">{theList.date.split('').splice(0,10)}</td>
                  <td width="20%"><Link to={`/author/${theList.author.name}`}>{theList.author.name}</Link></td>
                  <td width="5%">{theList.author.mail}</td>
                </tr>
        );
    });

    
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(list.length / ListPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <Pagination.Item
          key={number}
          id={number}
          onClick={(e)=>this.handleClick(e)}
        >
          {number}
        </Pagination.Item>
      );
    });

    return (
      <Fragment>
        <Table >
            <thead align="center">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Date  <i onClick={(e)=>this.handleSort('date')} className="material-icons">sort</i></th>
                <th>Author</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
             {renderList}
            </tbody>  
        </Table> 
       
        <div className="pagination">
          <Pagination size="md">
            {renderPageNumbers}
          </Pagination>
        </div>
      </Fragment>
    );
  }
}

export default List;