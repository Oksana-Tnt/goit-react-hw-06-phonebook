import 'bootstrap/dist/css/bootstrap.min.css';
import {useForm} from 'react-hook-form';

const FormContact = ({ addContact }) => {

  const {register, handleSubmit, watch, formState:{errors} } = useForm({defaultValues:{name:"", number:""}});

  const name = watch("name");
  const number = watch("number");
  return (
    
      <form className="row g-3" onSubmit={handleSubmit((data)=>addContact(data))}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            {...register("name", {required:"This is required", minLength:{
              value:6,
              message:"Min length is 6"
            }})}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name"
          />
          <p>{name}</p>
       <p>{errors.name?.message}</p>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Number
          </label>
          <input
            {...register("number", {required:true, minLength:{
              value:6,
              message:"Min length is 6"
            }})}
            type="tel"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="number"
          />    
          <p>{number}</p>
          <p>{errors.number?.message}</p>      
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary mb-3">
            Add Contact
          </button>
        </div>
      </form>
   
  );
};

export default FormContact;