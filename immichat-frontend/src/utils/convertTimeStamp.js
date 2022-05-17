export default function parseToDate(timestamp) {
  const string = timestamp.split("T");
  let result = "";
  const date = string[0].split("-");
  const time = string[1].split(":");
  const hour = time[0];
  const minute = time[1];
  if (hour < 12) {
    result += `${hour[1]}:${minute} AM`;
  } else if (parseInt(hour) === 12) {
    result += `${hour}:${minute} PM`;
  } else {
    result += `${hour - 12}:${minute} PM`;
  }
  result += ` - ${date[1]}/${date[2]}/${date[0]}`;
  return result;
}
