class Trie {
  constructor() {
    this.root = [false, {}]
  }

  insert(word) {
    let i = 0;
    let currentLevel = this.root;
    while (i < word.length) {
      if (!currentLevel[1][word[i]]) {
        currentLevel[1][word[i]] = [false, {}]
      }
      currentLevel = currentLevel[1][word[i]]
      i++
    }
    currentLevel[0] = true
  }

  delete(word) {
    let currentLevel = this.root
    let nodes = [currentLevel]
    let i = 0;
    while (i < word.length) {
      if (currentLevel[1][word[i]]) {
        currentLevel = currentLevel[1][word[i]]
        nodes.push(currentLevel)
        i++
      } else {
        return ['Word does not exist']
      }
    }

    if (Object.keys(nodes[i][1]).length > 0) {
      return
    }
    nodes.pop()
    i--
    while (i > 0) {
      if (Object.keys(nodes[i][1]).length === 1 && !nodes[i][0]) {
        nodes.pop()
        i--
      } else {
        delete nodes[i][1][word[i]]
        i = -1
      }
    }
  }

  search(word) {
    let i = 0;
    let currentLevel = this.root;
    while (i < word.length) {
      if (currentLevel[1][word[i]]) {
        currentLevel = currentLevel[1][word[i]]
        i++
      } else {
        return ['Word does not exist']
      }
    }
    return currentLevel
  }
}

const trie = new Trie()
trie.insert('test')
trie.insert('tests')
trie.insert('testing')
trie.insert('testszzzzzz')
console.log(trie.search('test')[0])
console.log(trie.search('tests')[0])
console.log(trie.search('testing')[0])
console.log(trie.search('testingzzz')[0])
console.log(trie.root[1].t[1].e[1].s[1].t[1]);
trie.delete('testing')
console.log(trie.root[1].t[1].e[1].s[1].t[1]);
console.log('-----------------');
trie.delete('tests')
