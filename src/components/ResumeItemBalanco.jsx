export default function ResumeItemBalanco({ titulo, value }) {
  return (
    <div className="divResumeItem">
      <div className="divResumeItemTitulo ">{titulo}</div>
      <div className={`divResumeItemValue ${value <= 0 ? "despesa" : "lucro"}`}>
        R$ {value}
      </div>
    </div>
  );
}
