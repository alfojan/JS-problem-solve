// Problem 2: Bangladesh Weekend Machine
function getDayType(day) {
  const normalizedDay = String(day).toLowerCase();

  switch (normalizedDay) {
    case "friday":
    case "saturday":
      return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
}
