/* Проверяем на длину строки*/
function checkString(someString, maxLenght) {
  return someString.lenght <= maxLenght;
}

checkString('Черепа', 6);

/* Проверка строки на палиндром*/
function checkPalindrome (strEntry) {
  strEntry = strEntry.replaceAll(' ', '') && strEntry.toLowerCase();
  let strRevers = '';
  for (let i = strEntry.length - 1; i >= 0; i--) {
    strRevers += strEntry[i];
  }
  return strEntry === strRevers;
}

checkPalindrome('А роза упала на лапу Азора');

