// 1. Poll variable ko Map object se initialize karein
const poll = new Map();

// 2. Naya option add karne ka function
function addOption(option) {
  if (!option || option.trim() === "") {
    return "Option cannot be empty.";
  }
  
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }
  
  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

// 3. Vote karne ka function
function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  
  const voters = poll.get(option);
  
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }
  
  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

// 4. Results display karne ka function
function displayResults() {
  let result = "Poll Results:";
  
  for (const [option, voters] of poll.entries()) {
    result += `\n${option}: ${voters.size} votes`;
  }
  
  return result;
}

// 5 & 6. Test pass karne ke liye kam se kam 3 options aur 3 votes add karein
addOption("Turkey");
addOption("Morocco");
addOption("Spain");

vote("Turkey", "voter1");
vote("Turkey", "voter2");
vote("Morocco", "voter3");
