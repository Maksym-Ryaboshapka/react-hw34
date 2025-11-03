import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import { getContacts } from "../../redux/contacts/thunk";

const ContactsList = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
      <ul>
        { items.map((contact) => {
          if (contact.name.toLowerCase().includes(filter)) {
            return <ContactItem key={ contact.id } contact={ contact }/>;
          }

          return null;
        }) }
      </ul>
  );
};

export default ContactsList;