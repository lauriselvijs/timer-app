// changes hh:mm:ss time string to total amount of seconds
export function convertDurationToSeconds(duration) {
  const [hours, minutes, seconds] = duration.split(":");
  return Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
}
