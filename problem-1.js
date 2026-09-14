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
