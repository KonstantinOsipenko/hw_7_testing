///exercise 1
function maxDepth() {
  let count = 0;
  let depth = 1;
  function getFiniteValue(object) {
    for (let key in object) {
      if (witcher != null && typeof object[key] == 'object') {
        let value = object[key];
        if (value != null && typeof value == "object") {
          count++
          getFiniteValue(value);
          if (depth <= count) {
            depth = count;
          }
          count = 0;
        }
      }
    } return depth;
  }
  const witcher = {
    name: 'Geralt',
    profession: 'witcher',
    schoollAndSword: {
      area: {
        Kaedven: 'Kaer Morhen',
        schoolName: 'school of the wolf',
      },
      mentor: 'Vesemir',
      students: 'Cirilla',
      swords: {
        silverSword: 'for monster',
        steelSword: 'for human,and some monsters'
      },
    },
  };
  console.log(getFiniteValue(witcher));
  return depth

}
maxDepth()

//exrecise 2
function comparsionKey() {
  let counter = 0;
  function noСoincidence(object1, object2) {
    for (let key in object1) {
      if (object1[key] != null && typeof object1[key] == 'object') {
        noСoincidence(object1[key], object2[key])
      } else if (object1[key] !== object2[key]) {
        counter++
      };
    };
  }
  const witcher2 = {
    name: 'Vesemir',
    profession: 'witcher',
    schoollAndSword: {
      area: {
        Kaedven: 'Kaer Morhen',
        schoolName: 'school of the wolf',
      },
      mentor: 'unknows',
      students: 'Geralt,Eskel',
      swords: {
        silverSword: 'for monster',
        steelSword: 'for human,and some monsters'
      },
    },
  };
  const witcher = {
    name: 'Geralt',
    profession: 'witcher',
    schoollAndSword: {
      area: {
        Kaedven: 'Kaer Morhen',
        schoolName: 'school of the wolf',
      },
      mentor: 'Vesemir',
      students: 'Cirilla',
      swords: {
        silverSword: 'for monster',
        steelSword: 'for human,and some monsters'
      },
    },
  };
  noСoincidence(witcher, witcher2);
  console.log(counter);
  return counter;
}
comparsionKey();