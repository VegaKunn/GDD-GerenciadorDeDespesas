import { useState } from "react";

export default function Teste() {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);

  return (
    <div>
      <div>
        <label>Data</label>
        <input
          type="date"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </div>
      <div>
        <label>Categoria</label>
        <input type="text" />
        <select
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>
                {categories[key].title}
              </option>
            ))}
          </>
        </select>
      </div>

      <div>
        <label>Titulo</label>
        <input
          type="text"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        />
      </div>
      <div>
        <label>Valor</label>
        <input
          type="number"
          value={valueField}
          onChange={(e) => setValueField(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <button onClick={handleAddEvent}>Adicionar</button>
      </div>
    </div>
  );
}
