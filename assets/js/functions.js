/*! Created by: Aimee Ramirez */

  const methodNumber1 = $('.fruitButton').on('click', function() {
    //these are two arrays to see in this scope to joined/merged.
    const reBasket = [
      basketOne = ['pineapples', 'pears', 'tomatoes'],
      basketTwo = ['apples', 'peaches', 'bananas']
    ]
    console.log('this is rebasket 1', basketOne)
    console.log('this is rebasket 2', basketTwo)
    //or you can call it this way...
    console.log('this is rebasket list one', reBasket[0])
    console.log('this is rebasket list two', reBasket[1])
    const newBasket1 = reBasket[0].concat(reBasket[1]);
    //this is a way to call the props for call(check below)
    const newBasket = basketOne.concat(basketTwo);
    console.log('this is the new basket', newBasket);
    let space = '<br/>'
    let children = [space, newBasket[0], space, newBasket[1], space, newBasket[2], space, newBasket[3], space, newBasket[4], space, newBasket[5]];
    $('#3').append(children);
    this.innerHTML(methodNumber1);

  })
// Here is another example in a way of calling.
  const methodNumber2 = $('.fruitButton1').on('click', function() {
    const reBasket2 = [
      basketOne = ['pineapples', 'pears', 'tomatoes'],
      basketTwo = ['apples', 'peaches', 'bananas']
    ]
    console.log('this is rebasket 1', basketOne)
    console.log('this is rebasket 2', basketTwo)
    //or you can call it this way...
    console.log('this is rebasket list one', reBasket2[0])
    console.log('this is rebasket list two', reBasket2[1])
    //this is a way to call the props for call(check below)
    const newBasket1 = (reBasket2[0] + ',').concat(reBasket2[1]);
    const newBasket = basketOne.concat(basketTwo);
    console.log('this is the new basket', newBasket);
    newBasket.forEach(function(props, item, index, i, reBasket) {
      //an example of input value
      const input = 'mangoes';
      item[i] = index[''];
      item[i] < index.length;
      //this is for input if to be added.
      const addItem = input;
      let obj = addItem.concat(',' + newBasket);
      console.log('this item for new Basket', obj);
      //this is a way to call the props to be called
      this.props = {
        blue: newBasket1
      }
      console.log('this is getting props blue', this.props.blue);
      //this is to show the data jquery.
      $('#1').append(obj)
      $('#2').append(this.props.blue)
      this.innerHTML(methodNumber2);
      console.log('this is checking in props to be checked as well:', propsNewBasket);

    });
  })

//here is a simple fizz buzz example without concat or join or split.
const mergeFizzBuzz = $('.fizzBuzzButton').on('click', function() {
  //this is an example of a length of 3 times to loop with 1 and 2 being the string values"
  let fizz = ['Fizz'];
  let buzz = ['Buzz'];
  //this is showing either or in call.
  let f = fizz || buzz;
  //calling the number differently so it is easier to read for inital value calling.
  for (f = 1 || 2; f <= 3; f++) {
    //this is checking if value is equal to show this.
    (fizz === 1)
    console.log('this is fizz:', fizz[0]);
    (buzz === 2)
    //this is checking if value is equal to show this.
    console.log('this is buzz:', buzz[0]);
    const fizzBuzz = fizz[0] + buzz[0];
    console.log('this is fizzbuzz in a list:', fizzBuzz);
    //this is to show the data jquery.
    $('#buzzContent').append(buzz)
    $('#fizzContent').append(fizz)
    $('#fizzBuzzContent').append(fizzBuzz)
    this.innerHTML();
  }
})
/*! Created by: Aimee Ramirez */
