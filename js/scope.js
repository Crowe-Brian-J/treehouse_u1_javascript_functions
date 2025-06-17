let person = 'Lee'

function greeting() {
  let person = 'Meg'
  //person = 'Meg' --> used to show that person is stored to Meg across scope.js
  alert(`Hi, ${person}!`)
}

function greeting2() {
  let person = 'Robert'
  alert(`Good morning, ${person}!`)
}

greeting()
alert(`Hi, ${person}!`)
greeting2()

// ^ Done to show that functions use variable declared inside function
