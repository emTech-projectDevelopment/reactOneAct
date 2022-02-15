//this is a template folder for you to move into your src folder after you created a boilerplate
import React, {useState} from "react";

// Starting code for if your group Chose CLASS COMPONENTS
// export class Dog extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//        <img alt="dog" src="https://www.dogfoodadvisor.com/wp-content/uploads/2019/08/golden-retriever-puppy-343x335.jpg"></img>
//       <button>I'm more of a cat person!</button>
//       </div>
//     );
//   }
// }

//Starting code for if your group Chose FUNCTION COMPONENTS
export const Dog = props => {
    const [animal, setAnimal] = useState('dog')
    const [animalSrc, setAnimalSrc] = useState('https://www.dogfoodadvisor.com/wp-content/uploads/2019/08/golden-retriever-puppy-343x335.jpg')
    const [animalSound, setAnimalSound] = useState('WoofWoof!')
    const animals = [
        {animal:'dog', animalSrc:'https://www.dogfoodadvisor.com/wp-content/uploads/2019/08/golden-retriever-puppy-343x335.jpg', animalSound:'Woof!'},
        {animal:'cat', animalSrc:'https://www.womansday.com/life/g32979681/cute-cat-photos/', animalSound: 'Purr!'}
    ]

    const thisAlt = animal === 'dog' ? animals[0].animal : animal[1].animal;
    const thisSrc = animal === 'dog' ? animals[0].animalSrc : animal[1].animalSrc;
    const showAnimalSound = animal === 'dog' ? animals[0].animalSound : animal[1].animalSound;
    console.log(thisAlt)
    console.log(thisSrc)
    console.log(showAnimalSound)

    function changeAnimal(){
        setAnimal(animals[1].animal)
        setAnimalSrc(animals[1].animalSrc)
        setAnimalSound(animal[1].makeSound)
        console.log(animal)
    }

  return (
    <div>
      <img
        alt={thisAlt}
        src={thisSrc}
      ></img>
      <button
        onClick={changeAnimal}
      >I'm more of a cat person!</button>
      <p>{showAnimalSound}</p>
    </div>
  );
};
