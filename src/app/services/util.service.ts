export function getTimes(): string[] {
  const allTimes: string[] = [];

  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedHour = String(hour).padStart(2, '0');
      const formattedMinute = String(minute).padStart(2, '0');
      const formattedTime = `${formattedHour}:${formattedMinute}`;
      allTimes.push(formattedTime);
    }
  }
  return allTimes;
}
