// Problem 1: Describe the value
function describeValue(value) {
  if (typeof value === "string") {
    return "string | truthy";
  } else if (typeof value === "number") {
    return "number | truthy";
  } else if (typeof value === "boolean") {
    return "boolean | truthy";
  } else if (value === null) {
    return "object | falsy";
  } else if (value === undefined) {
    return "undefined | falsy";
  }
  return "string | falsy";
}

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

// Problem 3: Username Gatekeeper
function validateUsername(username) {
  if (username.length < 4) {
    return "Too Short";
  }

  if (username.includes(" ")) {
    return "No Space Allowed";
  }

  const lowerUsername = username.toLowerCase();
  if (lowerUsername.includes("admin")) {
    return "Reserved Word";
  }

  return "Available";
}

// Problem 4: CNG Fare Calculator
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50;

  if (distance > 2) {
    fare += (distance - 2) * 15;
  }

  fare += waitingMinutes * 2;

  if (isNight) {
    fare *= 1.2;
  }

  return fare;
}

// Problem 5: Cricket Chase Verdict
const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return "Won";
  }

  if (ballsLeft <= 0) {
    return "Lost";
  }

  const requiredRate = (runsNeeded / ballsLeft) * 6;

  let verdict;
  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
