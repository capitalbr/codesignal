//Given a string s consisting of small English letters, find 
//and return the first instance of a non - repeating character 
//in it. If there is no such character, return '_'.

function firstNotRepeatingCharacter(s) {
  let alpha = {};
  for (let i = 0; i < s.length; i++) {
    if (!alpha[s[i]]) {
      alpha[s[i]] = i + 1;
    } else {
      alpha[s[i]] = "dup";
    }
  }
  let idx = Object.keys(alpha).reduce((acc, ele) => {
    return alpha[ele] !== "dup" ? alpha[ele] - 1 < acc ? alpha[ele] - 1 : acc : acc;
  }, Infinity)
  console.log(idx)
  return idx === Infinity ? "_" : s[idx];
}
