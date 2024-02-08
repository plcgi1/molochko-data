import moment from "moment";

export const getMonthFromDate = (dateString: string) => {
  const result = moment().diff(dateString, "months");
  return result;
};
