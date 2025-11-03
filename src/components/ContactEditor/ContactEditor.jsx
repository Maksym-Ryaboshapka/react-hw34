import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/thunk";

const ContactEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;

    form.reset();

    dispatch(addContact({ name, phone }));
  };

  return (
      <form onSubmit={ handleSubmit }>
        <input type="text" placeholder="Name" name="name" required/>
        <input type="text" placeholder="Number" name="number" required/>
        <button type="submit">Add</button>
      </form>
  );
};

export default ContactEditor;