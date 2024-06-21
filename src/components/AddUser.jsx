import axios from "axios";
import { useForm } from "react-hook-form";

export const AddUser = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleAdd = (data) => {
    axios.post("http://localhost:3004/users", data).then((res) => {
      onAdd(res.data);
      reset();
    });
  };

  return (
    <div>
      <h1>AddUser</h1>
      <form onSubmit={handleSubmit(handleAdd)}>
        {errors.name && <p style={{ color: "red" }}>Please enter a name</p>}
        <label>Name</label>
        <input {...register("name", { required: true })} />
        {errors.surname && (
          <p style={{ color: "red" }}>Please enter a surname</p>
        )}

        <label>Surname</label>
        <input {...register("surname", { required: true, minLength: 6 })} />
        {errors.salary && <p style={{ color: "red" }}>Please enter a salary</p>}

        <label>Salary</label>
        <input {...register("salary", { required: true })} />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};
