declare const resloveTimestamp: (timestamp: number) => number;
declare const getStartDateOfDay: (date: Date) => Date;
declare const getEndDateOfDay: (date: Date) => Date;
declare const getStartEndTimestampOfDay: () => {
    startTime: Date;
    endTime: Date;
};
declare const getTimestampUTC: (date: Date) => number;
export { resloveTimestamp, getStartDateOfDay, getEndDateOfDay, getStartEndTimestampOfDay, getTimestampUTC, };
