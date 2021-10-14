import { useState } from "react";

export default function InputArea({ Add }) {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState();

  const handAddEvent = () => {
    if (isNaN(new Date(dateField).getTime())) {
      return alert("preencha a data corretamente");
    } else if ((categoryField !== "comida") | "mensalidade" | "renda") {
      return alert("preencha categoria corretamente");
    } else if (titleField == "") {
      return alert("preencha o titulo corretamente");
    } else if (valueField <= 0) {
      return alert("preencha o valor corretamente");
    }

    Add({
      data: new Date(dateField),
      categoria: categoryField,
      titulo: titleField,
      value: valueField,
    });
    clearFields();
  };

  const clearFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };

  return (
    <div className="divInputArea">
      <div className="labelInputArea">
        <label className="tituloInputArea">Data</label>
        <input
          required
          className="inputInputArea"
          type="date"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </div>
      <div className="labelInputArea">
        <label className="tituloInputArea">Categoria</label>

        <select
          required
          className="selectInputArea"
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          <option></option>
          <>
            <option value="comida">comida</option>
            <option value="mensalidade">mensalidade</option>
            <option value="renda">renda</option>
          </>
        </select>
      </div>

      <div className="labelInputArea">
        <label className="tituloInputArea">Titulo</label>
        <input
          required
          className="inputInputArea"
          type="text"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        />
      </div>
      <div className="labelInputArea">
        <label className="tituloInputArea">Valor</label>
        <input
          required
          className="inputInputArea"
          type="number"
          value={valueField}
          onChange={(e) => setValueField(parseFloat(e.target.value))}
        />
      </div>
      <div className="labelInputArea">
        <label className="gambiarra">.</label>
        <button className="buttonInputArea" onClick={handAddEvent}>
          Adicionar
        </button>
      </div>
    </div>
  );
}
