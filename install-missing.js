const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const externalPackages = new Set();

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split("\n");
  lines.forEach(line => {
    const match = line.match(/(?:import|require).*['"]([^.'"]+)['"]/);
    if (match) {
      externalPackages.add(match[1]);
    }
  });
}

function walkDir(dirPath) {
  fs.readdirSync(dirPath).forEach(entry => {
    const fullPath = path.join(dirPath, entry);
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      walkDir(fullPath);
    } else if (/\.(js|jsx|ts|tsx)$/.test(entry)) {
      scanFile(fullPath);
    }
  });
}

walkDir(".");

if (externalPackages.size === 0) {
  console.log("No external imports found.");
  process.exit(0);
}

console.log("Detected packages:");
console.log([...externalPackages].join("\n"));

externalPackages.forEach(pkg => {
  try {
    console.log(`Installing ${pkg}...`);
    execSync(`npm install ${pkg}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to install ${pkg}`);
  }
});