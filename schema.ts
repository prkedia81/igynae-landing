const userSchema = {
  name: "as",
  age: 16,
  _id: "abc_987",
  clerk_id: "clerk_124",
  periodStarted: "no", // Current Period's ID -> xyz_123
  noFlow: false, // true
};

const periodSchema = {
  _id: "xyz_123",
  user_id: "abc_987", // user id
  timestamp: "17-May-24",
  firstDayTimestamp: 12314,
  lastDayTimestamp: 12455,
  data_input: [
    {
      isFirstDay: "Yes", // optional; asked only once to capture start of period
      timestamp: 12524635, // In EPOCH timestamp
      PMSPain: "Medium", // optional; asked only if isFirstDay is Yes
      Flow: "Heavy", // mandatory
      Clot: "Light", // mandatory
      isLastDay: "No", // derived; equals Yes if Flow value is No Flow for 2 consecutive days
    },
    {
      isFirstDay: "No", // optional; asked only once to capture start of period
      timestamp: 12524635, // In EPOCH timestamp
      Flow: "Heavy", // mandatory
      Clot: "Light", // mandatory
      isLastDay: "No", // derived; equals Yes if Flow value is No Flow for 2 consecutive days
    },
    {
      isFirstDay: "No", // optional; asked only once to capture start of period
      timestamp: 12455, // In EPOCH timestamp
      Flow: "No", // mandatory
      Clot: "No", // mandatory
      isLastDay: "Yes", // derived; equals Yes if Flow value is No Flow for 2 consecutive days
    },
  ],
};

const healthOutputSchema = {
  _id: "hos_123",
  user_id: "abc_987",
  menstrualScore: 123,
  timestamp: 1245,
};
