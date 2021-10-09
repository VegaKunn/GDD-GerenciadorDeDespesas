export default function ResumeItem({ titulo, value }) {
  return (
    <div className="divResumeItem">
      <div className="divResumeItemTitulo ">{titulo}</div>
      <div className="divResumeItemValue ">R$ {value}</div>
    </div>
  );
}
