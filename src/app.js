

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us", ".io"];

let domains = [];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      let Link = pronoun[i] + adj[j] + noun[k];
      for (let l = 0; l < extensions.length; l++) {
        domains.push(Link + extensions[l]);
        if (extensions[l] === ".es") {
          domains.push(Link.slice(0, -1) + extensions[l]);
        }
      }
    }
  }
}

console.log(domains);
