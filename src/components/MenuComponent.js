import React, { Component } from 'react';
import { Media } from 'reactstrap';
import {Container , Row , Columns} from 'reactstrap';


class  Menu extends Component {
     
    constructor(props) {
        super(props);
    this.state={}
    }

    render() 
    {
        const menu= this.props.dishes.map((dish) => 
        {
            return (
                
                <div key={dish.id} className="col-md-12 mt-5">
                <Media >
                    <Media left middle>
                        <Media object src={dish.image} alt={dish.name}/>
                    </Media>
                    <Media body>
                        <Media heading>{dish.name}</Media> 
                        <p>{dish.description}</p>
                    </Media>
                      
                </Media>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                  
                    <Media >
                        {menu}
                    </Media>
                
</div>
            </div>

        );
    }
}
export default Menu;