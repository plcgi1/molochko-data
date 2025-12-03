import moment from 'moment';

export const getMonthFromDate = (dateString: string) => {
  const result = moment().diff(dateString, 'months');
  return result;
};

/* преобразование строки 251201 в дату*/
export function datestrToDate(dateStr: string): Date {
  const year = '20' + dateStr.substring(0, 2); // 2022
  const month = dateStr.substring(2, 4); // 12
  const day = dateStr.substring(4, 6); // 02

  // Создаем дату (месяцы в JS: 0-11)
  const date = new Date(`${year}-${month}-${day}`);
  return date;
}
