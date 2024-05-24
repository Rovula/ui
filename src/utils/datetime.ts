const resloveTimestamp = (timestamp: number): number => {
  if (String(timestamp).length > 10) return timestamp / 1000;

  return timestamp;
};

// Set the time to the start of the day (00:00:00)
const getStartDateOfDay = (date: Date): Date => {
  const startDate = new Date(date);
  startDate.setHours(0, 0, 0, 0);

  return startDate;
};

// Set the time to the end of the day (23:59:59.999)
const getEndDateOfDay = (date: Date): Date => {
  const startDate = new Date(date);
  startDate.setHours(23, 59, 59, 999);

  return startDate;
};

const getStartEndTimestampOfDay = () => {
  const startTime = getStartDateOfDay(new Date());
  const endTime = getEndDateOfDay(startTime);

  return {
    startTime,
    endTime,
  };
};

const getTimestampUTC = (date: Date) => {
  const dateUtc = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  );

  return resloveTimestamp(dateUtc);
};
export {
  resloveTimestamp,
  getStartDateOfDay,
  getEndDateOfDay,
  getStartEndTimestampOfDay,
  getTimestampUTC,
};
