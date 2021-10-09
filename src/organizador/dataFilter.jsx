export const getCurrentMonth = () => {
  let now = new Date();

  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list, data) => {
  let newList = [];
  let [year, mouth] = data.split("-");

  for (let i in list) {
    if (
      list[i].data.getFullYear() === parseInt(year) &&
      list[i].data.getMonth() + 1 === parseInt(mouth)
    ) {
      newList.push(list[i]);
    }
  }

  return newList;
};
export const formatDate = (data) => {
  let year = data.getFullYear();
  let month = data.getMonth() + 1;
  let day = data.getDate();

  return `${day < 10 ? "0" + day : day}/${
    month < 10 ? "0" + month : month
  }/${year}`;
};

export const formatCurrentMonth = (currentMonth) => {
  let [year, month] = currentMonth.split("-");
  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return `${months[parseInt(month) - 1]} de ${year}`;
};
