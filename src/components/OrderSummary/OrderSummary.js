 import React, {Component} from 'react';
 import Aux from '../../hoc/Auxillary/Auxillary';
 import Button from '../UI/Button/Button';

 class OrderSummary extends Component {

  //This could be an functional component doesn,t have to be a class

   render(){
      const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igkey =>{
        return (<li key = {igkey}>
          <span style= {{textTransform: 'capitalize'}} >{igkey}</span> :{this.props.ingredients[igkey]}
        </li>)
      }); 

     return(
      <Aux>
      <h3>Your Order</h3>
      <p>A delecious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total price:</strong> {this.props.price.toFixed(2)}</p>
      <p>Continue to checkout?</p>
      <Button btnType = "Success" clicked = {this.props.purchaseContinued}>CONTINUE</Button>
      <Button btnType = "Danger" clicked = {this.props.purchaseCancelled}>CANCEL</Button>
    </Aux>
     );
   }   
  }
 export default OrderSummary;
