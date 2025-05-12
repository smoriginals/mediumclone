import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../App.css'
export default function Signup() {
	const navigate = useNavigate();

	function CreateUser(){
		navigate('/Homepage');	
	}
	return (
		<>
			<div className='home-bg'>
				<div className="card text-center login-dialogue">
					<div className="card-header">
						Create account
					</div>
					<div className="card-body">

						<form className="row">
							<div className="col-md-6">
								<label for="inputEmail4" className="form-label">Email</label>
								<input type="email" className="form-control" id="inputEmail4" placeholder='example@email.com' />
							</div>
							<div className="col-md-6">
								<label for="inputPassword4" className="form-label">Password</label>
								<input type="password" className="form-control" id="inputPassword4" placeholder='Enter Password' />
							</div>
							<div className="col-12">
								<label for="inputAddress" className="form-label">Address</label>
								<input type="text" className="form-control" id="inputAddress" placeholder="East India, V.N.S" />
							</div>

							<div className="col-md-6">
								<label for="inputCity" className="form-label">City</label>
								<input type="text" className="form-control" id="inputCity" />
							</div>
							<div className="col-md-4">
								<label for="inputState" className="form-label">State</label>
								<select id="inputState" className="form-select">
									<option selected>Choose...</option>
									<option>...</option>
								</select>
							</div>
							<div className="col-md-2">
								<label for="inputZip" className="form-label">Zip</label>
								<input type="text" className="form-control" id="inputZip" />
							</div>
							<div className="container mt-2">
								<div className="form-check">
									<label className="form-check-label" for="gridCheck">
										<input className="form-check-input" type="checkbox" id="gridCheck" />
										Remamber me
									</label>
								</div>
							</div>
						
						</form>


						<div className="d-grid gap-2">
							<button className="btn btn-primary mt-4" type="button" onClick={CreateUser}><b>Create</b></button>
						</div>
					</div>
					<div className="card-footer text-body-secondary">
						Already have an account?<Link to='/Homepage' className='create'> Login</Link>
					</div>
				</div>
			</div>

		</>
	)
}