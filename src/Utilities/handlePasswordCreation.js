exports.handlePasswordCreation = (
  length,
  lowercase,
  uppercase,
  numbers,
  symbols,
  start
) => {
  if (!lowercase && !uppercase && !numbers && !symbols && !start)
    return "Please select some options";

  let password = "";

  let pool = "";

  let text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (lowercase) pool += "abcdefghijklmnopqrstuvwxyz";

  if (uppercase) pool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (numbers) pool += "0123456789";

  if (symbols) pool += "!;#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  while (password.length < length) {
    let char;

    password.length === 0 && start
      ? (char = text[Math.floor(Math.random() * text.length)])
      : (char = pool[Math.floor(Math.random() * pool.length)]);

    password += char;
  }

  console.log(password.length);

  return password;
};
