export default function Panel({ title, children, isActive, onActive }) {
  return (
    <section className="border-red-50">
      <h3>{title}</h3>
      {isActive ? <p>{children} </p> : <button onClick={onActive}>Show</button>}
    </section>
  );
}
