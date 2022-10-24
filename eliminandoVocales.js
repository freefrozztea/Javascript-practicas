function disemvowel(str) {
  vowels = ['a', 'e', 'i', 'o', 'u']
  return str.split('').filter(letter => !vowels.includes(letter.toLowerCase())).join('');
}

console.log(disemvowel("This website is for losers LOL!"));