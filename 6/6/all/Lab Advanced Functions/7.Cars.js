function solve(input) {
  const data = {};

  const commandsMap = {
    create: (name, inheritance, parentName) => {
      data[name] = inheritance ? Object.create(data[parentName]) : {};
    },
    set: (name, k, v) => {
      data[name][k] = v;
    },
    print: (name) => {
      let entries = [];
      for (let line in data[name]) {
        entries.push(`${line}:${data[name][line]}`);
      }
      console.log(entries.join(","));
    },
  };

  input.forEach((x) => {
    const [command, name, k, v] = x.split(" ");
    commandsMap[command](name, k, v);
  });
}

solve([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
