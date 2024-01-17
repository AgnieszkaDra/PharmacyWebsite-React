import { useState } from 'react'

export const addNewElectronicOrder = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [newOne, addElectronicElement] = useState([])
  const addNew = (data) => {
    addElectronicElement([...newOne, { id: Date.now(), ...data }])
  }

  // const removeElement = (id) => {
  //   addElectronicElement(newOne.filter((todo) => todo.id !== id));
  //  console.log(newOne, id)
  // }
  const removeElement = (data, id) => {
    // addElectronicElement((prevNewOne) => [
    //   ...prevNewOne.filter((element) => element.id !== id),
    //   { id: Date.now(), ...data }
    // ]);
    console.log(data, id);
  };

  console.log(newOne)
  return { newOne, addNew, removeElement }
}
