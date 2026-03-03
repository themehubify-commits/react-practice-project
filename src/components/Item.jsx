export default function Item({ name, isPacked }) {
//     if (isPacked) {
//     return <li className="item">{name} </li>;
//   }
let itemContent = ""
  return <li className="item">{isPacked ? itemContent + "✅" : name }</li>;
}
