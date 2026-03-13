import { useState } from "react";
import Contact5List from "./ContactList";
import Chat from "./Chat";

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <>
      <div>
        <Contact5List
          contacts={contacts}
          selectedContact={to}
          onSelect={(contact) => setTo(contact)}
        />
        <Chat key={to.id} contact={to} />
      </div>
    </>
  );
}
