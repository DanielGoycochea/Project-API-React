import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



class Author extends Component {

  state={
   author:[]
  }

  getAuthor=()=>{

    //Get Info Author

     const {params} = this.props.match;
     
     //Get Data from API

     fetch(`http://localhost:3000/data?author.name=${params.id}`)
     .then(responseApi =>{
       responseApi.json().then(json =>{
         this.setState({author:json})
       })
     })
    
  }

  componentDidMount(){
    this.getAuthor()
  }

  
  
  render() {
    return (
      <Fragment>
        
         
          {this.state.author.map((theAuthor,index)=>{
            return(

              
               
                  <Card key={theAuthor._id} className="cards">
                    <Card.Body>
                      <Card.Title>{theAuthor.title}</Card.Title>
                      <Card.Text>{theAuthor.description}</Card.Text>
                      <Card.Text>Author: {theAuthor.author.name}</Card.Text>
                    </Card.Body>
                  </Card>
                
              
              
            )
          })} 
          <div className="button">
	
	          <Link to ={'/'}>
	            <Button variant="outline-primary" > Regresar </Button>
	          </Link>
          </div>
         
        
      </Fragment>
    );
  }
}

export default Author;