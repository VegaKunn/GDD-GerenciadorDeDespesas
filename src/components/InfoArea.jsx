import { formatCurrentMonth } from "../organizador/dataFilter";
import ResumeItem from "./ResumeItem";
import ResumeItemBalanco from "./ResumeItemBalanco";

export default function InfoArea({ currentMonth, trocaMes, income, expense }) {
  const voltarMes = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    trocaMes(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`);
  };
  const passarMes = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    trocaMes(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`);
  };

  return (
    <div className="divInfoArea">
      <div className="mesArea">
        <div className="arrowArea" onClick={voltarMes}>
          ⬅️
        </div>
        <div className="tituloMes">{formatCurrentMonth(currentMonth)}</div>
        <div className="arrowArea" onClick={passarMes}>
          ➡️
        </div>
      </div>
      <div className="resumeArea">
        <ResumeItem titulo="Receitas" value={income} />
        <ResumeItem titulo="Despesas" value={expense} />
        <ResumeItemBalanco titulo="Balanço" value={income - expense} />
      </div>
    </div>
  );
}
