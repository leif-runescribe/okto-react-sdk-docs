const crypto = require("crypto");
const readline = require('readline');

const red = "\x1b[31m";
const green = "\x1b[32m";
const reset = "\x1b[0m";
const black = "\x1b[30m";

const yellow = "\x1b[33m";
const blue = "\x1b[34m";
const magenta = "\x1b[35m";
const cyan = "\x1b[36m";
const white = "\x1b[37m";

const colors = [
  "\x1b[31m",
  "\x1b[31m",
  "\x1b[33m",
  "\x1b[31m",
  "\x1b[31m",
  "\x1b[31m",
  "\x1b[33m",
];

function randcolor() {
  clr = colors[Math.floor(Math.random() * colors.length)];
  return clr;
}
function generateRandomAddress() {
  const chars = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  let result = "0x";
  for (let i = 0; i < 40; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function randchain() {
  const chains = ["ETH", "SOL", "BTC", "XRP", "BNB"];
  ch = chains[Math.floor(Math.random() * chains.length)];
  return ch;
}

function randchain() {
    const chains = ["ETH", "SOL", "BTC", "XRP", "BNB"];
    ch = chains[Math.floor(Math.random() * chains.length)];
    return ch;
  }

function randcountry() {
  const country = [
    "UKR",
    "JPN",
    "KOR",
    "RUS",
    "MEX",
    "RUS",
    "USA",
    "GER",
    "GBR",
    "ISR",
    "SGP",
    "RUS",
    "POL",
  ];
  c = country[Math.floor(Math.random() * country.length)];
  return c;
}

const amt = [
  "$15,465",
  "$709,583",
  "$129,688",
  "$317,732",
  "$398,802",
  "$9,087",
];

function generateRiskScore() {
    return Math.floor(Math.random() * 101); 
}

function generateTags() {
    const allTags = [
        'Exchange', 'Mixer', 'Whale', 'High-risk', 'VIP',
        'DeFi', 'ICO', 'Staking', 'Mining'
    ];
    return allTags[Math.floor(Math.random() * allTags.length)];
}

function generateActivityStatus() {
    const statuses = ['Active', 'Dormant', 'Suspicious', 'High-Volume', 'New', 'Banned'];
    return statuses[Math.floor(Math.random() * statuses.length)];
}

function createLoadingAnimation() {
    const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    let i = 0;

    return setInterval(() => {
        readline.clearLine(process.stdout, 0);
        readline.cursorTo(process.stdout, 0);
        process.stdout.write(`${cyan}Loading ${frames[i]} ${reset}`);
        i = (i + 1) % frames.length;
    }, 80);
}

async function runScan() {
  const totalAddresses = Math.floor(Math.random() * 10 + 180);

  console.log(`${cyan}Initiating wallet scan...\n`);

  const loadingAnimation = createLoadingAnimation();


  await new Promise(resolve => setTimeout(resolve, 3000));

  clearInterval(loadingAnimation);
  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0);

  console.log(`${cyan}Scan initialized. Proceeding with FYNDR wallet analysis...${reset}\n`);
  await new Promise(resolve => setTimeout(resolve, 4000));


  setTimeout(() => {
    console.log(
      `${yellow}!!! malicious txn history at ethscan, multichain portfolio amt to ${amt[0]}`
    );
  }, 128000);

  setTimeout(() => {
    console.log(
      `${yellow}!!! malicious txn history at ethscan, multichain portfolio amt to ${amt[1]}`
    );
  }, 9000);

  setTimeout(() => {
    console.log(
      `${yellow}!!! malicious txn history at ethscan, multichain portfolio amt to ${amt[2]}`
    );
  }, 43000);
  setTimeout(() => {
    console.log(
      `${yellow}!!! malicious txn history at ethscan, multichain portfolio amt to ${amt[3]}`
    );
  }, 6400);
  setTimeout(() => {
    console.log(
      `${yellow}!!! malicious txn history at ethscan, multichain portfolio amt to ${amt[4]}`
    );
  }, 9800);

  setTimeout(() => {
    console.log(
      `${yellow}!!! malicious txn history at ethscan, multichain portfolio amt to ${amt[5]}`
    );
  }, 6700);

  for (let i = 0; i < totalAddresses; i++) {
    const address = generateRandomAddress();

    const c = randchain();
    const country = randcountry();
    const risk = generateRiskScore()
    const tags = generateTags()
    const act = generateActivityStatus()
    console.log(
      `${red}Scanning:  ${reset}${address}${reset}       ${red}${c}${reset}        ${country}           ${red}${risk}${reset}              ${blue}${tags}${reset}              ${red}${act}${reset}`
    );
    await new Promise((resolve) => setTimeout(resolve, 40));
  }

  const btcAmount = (Math.random() * 0.04).toFixed(4);
  const foundAddress = generateRandomAddress();

  console.log(
    `\n${green}Spotted yield amt : ${btcAmount} BTC in wallet: ${foundAddress}${reset}`
  );
  console.log("Initiating transfer to your Metamask wallet 0xEE4...");
}

runScan();
