import React, { Component } from 'react';
import {Container , Row , Columns} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle} from 'reactstrap';

class  Menu extends Component {
     
    constructor(props) {
        super(props);
    this.state={
        selectedDish: null
         
    }
    }

    onSelection(dish){
        this.setState({selectedDish:dish})
    }
    renderDish(dish)
    {
        if(dish!=null){
        return(
        <div className="col-md-12 mt-5" >
        <Card>
            <CardBody>
              <CardImg src={dish.image} alt={dish.name}/>
              <CardTitle>{dish.name}</CardTitle> 
              <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        </div>
        )}
        else
        {
        return( 
         <div></div>
     )}
         

    }
    render() 
    {
        const menu= this.props.dishes.map((dish) => 
        {
            return (
                
                <div className="col-md-12 mt-5" >
                <Card key={dish.id} onClick={()=>this.onSelection(dish)}>
                    <CardBody>
                        <CardImg src={dish.image} alt={dish.name}/> 
                    </CardBody>
                </Card>
                
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                  <CardBody>
                    {menu}
                  </CardBody>
                </div>
                <div className="row">
                <div className="col-md-12 mt-5" >
                    {this.renderDish(this.state.selectedDish)}
                </div>
                </div>
            </div>
        );
    }
}
export default Menu;