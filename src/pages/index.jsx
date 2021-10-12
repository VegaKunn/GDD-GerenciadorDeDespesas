import { items } from "../data/items";
import { categories } from "../data/categories";
import { filterListByMonth, getCurrentMonth } from "../organizador/dataFilter";
import { useEffect, useState } from "react";
import { TableArea } from "../components/tabela/TableArea";
import InfoArea from "../components/InfoArea";
import InputArea from "../components/InputArea";
import Teste from "../components/tabela/teste";

export default function Gdd() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState([]);
  const [currentMonth, setCurrendtMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].categoria].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const trocaMes = (newMonth) => {
    setCurrendtMonth(newMonth);
  };

  const handleAddItem = (items) => {
    let newList = [...list];
    newList.push(items);
    setList(newList);
    var add = handleAddItem;
  };

  return (
    <main className="Corpo">
      <header>
        <h1>Sistema Financeiro</h1>
      </header>
      <section>
        <InfoArea
          currentMonth={currentMonth}
          trocaMes={trocaMes}
          income={income}
          expense={expense}
        />
        <InputArea Add={handleAddItem} />
        {filteredList && <TableArea list={filteredList} />}
      </section>
    </main>
  );
}
