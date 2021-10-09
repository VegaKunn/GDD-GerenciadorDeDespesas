import { formatDate } from "../../organizador/dataFilter";
import { categories } from "../../data/categories";
export const TableArea = ({ list }) => {
  console.log(categories.mensalidade.cor);
  return (
    <table className="tabela">
      <thead>
        <tr>
          <th className="thAll th1">Data</th>
          <th className="thAll th2">Categoria</th>
          <th className="thAll th3">Titulo</th>
          <th className="thAll th4">Valor</th>
        </tr>
      </thead>

      <tbody>
        {list.map((item, index) => (
          <tr key={index}>
            <td>{formatDate(item.data)}</td>
            <td>
              <div className={`divCategoria ${categories[item.categoria].cor}`}>
                {categories[item.categoria].titulo}
              </div>
            </td>
            <td>{item.titulo}</td>
            <div
              className={`${
                categories[item.categoria].expense ? "despesa" : "lucro"
              }`}
            >
              <td> R$ {item.value}</td>
            </div>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
