import React from 'react';
import { NewsLetter } from './Newsletter';

export class SubscribeForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			email: ''
		}

		this.onChange=this.onChange.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e){
		e.preventDefault();
		console.log(this.state);
		alert('Form has been submitted successfully');
	}	

  render(){
  	return (
  		<div>
  			<div className="subscribe">
	  			<p>Enter your email address and we will do the rest.<br />
	  			You will recieve your first newsletters in the next 24 hours.</p>
	  		  	<form onSubmit={this.onSubmit} className="form-inline">
		  		  	<div className="form-group col-md-offset-4">
		  				<input 
		  					type="email" 
		  					name="email" 
		  					value={this.state.email} 
		  					onChange={this.onChange}
		  					className="form-control" 
		  					placeholder="Enter your email address" required="required"/>
		  			</div>
	  				<button className="btn btn-s btn-default-transparent">
	  					Submit
	  				</button>
	  			</form>		
  			</div>
  			<footer>
  				<div className="row">
  					<div className="col-md-6">
	  					<p className="footer-bottom-left">&copy; 2016 Open road integrated media</p>
	  				</div>
	  				<div className="col-md-6">
		  				<div className="footer-bottom-rights">
			  				<p>Terms of Use</p> 
			  				<p>Privacy Policy</p>
			  			</div>
		  			</div>
	  			</div>
  			</footer>
  		</div>
  		)
    }
}