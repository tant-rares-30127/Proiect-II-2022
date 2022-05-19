const phoneNumberRegex =
  /(?<!.)((\+?(?<prefix>\d{3}))?(?<=\d{3})[ -]?)?(?<part1>\d{4})[ -]?(?<part2>\d{3})[ -]?(?<part3>\d{3})(?!.)/;

const emailRegex =
  /(?<!.)(\w|\.|!){5,15}@(gmail|yahoo|student.utcluj|).(com|org|ro|en)(?!.)/;

const usernameRegex = /(?<!.)([a-zA-Z]){5,20}(([0-9]){1,4})?(?!.)/;

const passwordRegex = /(?<!.)([\w]|[0-9]|!|@|#|\$|%|\^|&|\*){8,20}(?!.)/;

module.exports = { phoneNumberRegex, emailRegex, usernameRegex, passwordRegex };
