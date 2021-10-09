export default function TabelaItem(item) {
  return (
    <tr>
      <td>...</td>
      <td>{item.categoria}</td>
      <td>{item.titulo}</td>
      <td> R$ {item.value}</td>
    </tr>
  );
}
