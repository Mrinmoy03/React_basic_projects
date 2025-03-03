import React from 'react'
import { useForm } from 'react-hook-form'
useForm

export const From = () => {
 const{register, handleSubmit, formState:{errors, isSubmitting}}=useForm()
 const onSubmit = (data)=>{
    console.log(data)
 }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id='name' {...register('name', {required : "name is required"})} />

            {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}
           
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" {...register('email', {required : "email is required",
                pattern:{
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid Email Address",
                    }
                    
                }
            })} id='email' placeholder='Email here' />
             {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
            
          </div>
          <div>
            <input type="password"  id="password" {...register('password', {
                minLength:{
                    value:8,
                    message: 'password must be 8 characters long'
                }
            })}  placeholder='password'/>
             {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
             <button disabled = {isSubmitting}>{isSubmitting ? 'loading..' : "submit"}</button>
          </div>

           

    </form>
  )
}
