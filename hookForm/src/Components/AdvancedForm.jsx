import React from 'react'
import "../style.css";
import { useForm } from 'react-hook-form';
useForm

const onSubmit =(data) => console.log(data)

export const AdvancedForm = () => {
    const {register, handleSubmit,formState: {errors}} = useForm();
    
  return (
    <div className="form-container">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' {...register("firstName", {required:"First Name is requrired"})} />
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' {...register("lastName", {required:"Last Name is requrired"})} />
            {errors.lastName && <p>{errors.lastName.message}</p>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' {...register("email", {required:"emial is requrired",
                       pattern:{
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid Email Address",
                        }
                        
                    }

            })} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" id='city' {...register("city", {required:"City is requrired"})} />
            {errors.city && <p>{errors.city.message}</p>}
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input type="text" id='state' {...register("state", {required:"City is requrired"})} />
            {errors.state && <p>{errors.state.message}</p>}
          </div>
          <div>
            <label htmlFor="zipCode">Zip Code</label>
            <input type="number" id='zipCode' {...register("zipCode", {required:"Zip Code is requrired"})} />
            {errors.zipCode && <p>{errors.zipCode.message}</p>}
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input type="text" id='country' {...register("country", {required:"Country is requrired"})} />
            {errors.country && <p>{errors.country.message}</p>}
          </div>
          <div>
            <label htmlFor="address">Complete Address</label>
            <input type="text" id='address' {...register("address", {required:"Complete Address is requrired"})} />
            {errors.address && <p>{errors.address.message}</p>}
          </div>
          <button>Submit</button>


        </form>
    </div>
  )
}
