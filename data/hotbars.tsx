const xBarSlots = (group, key) => {
    const numSlots = 16;
    const slotsArr = [];
  
    for (let i = 1; i <= numSlots; i += 1) {
      slotsArr.push({
        id: `${group}-${i}`,
        key
      });
    }
  
    return slotsArr;
  };
  
  export const xbars = () => (
    {
      one: xBarSlots('one', 1),
      two: xBarSlots('two', 2),
      three: xBarSlots('three', 3),
      four: xBarSlots('four', 4),
      five: xBarSlots('five', 5),
      six: xBarSlots('six', 6),
      seven: xBarSlots('seven', 7),
      eight: xBarSlots('eight', 8)
    }
  );
  
  export const chotbar = xbars();

const hotbarSlots = (group, index) => {
    const numSlots = 12;
    const slots = [];
  
    for (let i = 0; i < numSlots; i++) {
      slots.push({ id: `${group}-${index++}`, 
      index });
    }
    return slots;
  };



const hotbars = () => (
    {
      one: hotbarSlots('one', 1),
      two: hotbarSlots('two', 2),
      three: hotbarSlots('three', 3),
      four: hotbarSlots('four', 4),
      five: hotbarSlots('five', 5),
      six: hotbarSlots('six', 6),
      seven: hotbarSlots('seven', 7),
      eight: hotbarSlots('eight', 8),
      nine: hotbarSlots('nine', 9),
      ten: hotbarSlots('ten', 10)
    }
  );
  
  export const hotbar = hotbars();
  
  export const layouts = ['chotbar', 'hotbar'];
  
  export const keyToInt = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10
  };
  
  const moduleExports = {
    chotbar, hotbar, layouts, keyToInt
  };
  
  export default moduleExports;
  