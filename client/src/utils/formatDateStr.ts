/**
 * @param {Date} date date string
 */
const formatAMPM = (date: Date): string => {
  let h = date.getHours();
  let m = date.getMinutes().toString();
  const prefix = h >= 12 ? "pm." : "am.";
  h = h % 12; // set hour max to 12
  h = h ? h : 12; // hour 0 should be 12
  m = ("0" + m).slice(-2); // minute always has 2 digits, except < 10, so add '0'
  return h + ":" + m + " " + prefix;
};

export { formatAMPM };
