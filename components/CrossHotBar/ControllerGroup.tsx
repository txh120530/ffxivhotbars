import ControllerSet from './ControllerSet';

interface ControllerGroupProps {
  slots: any;
  id: any;
  index: any;
  role: any;
  modifier: any;
  rowIndex: any;
  groupIndex: any;
}

const group = (array, size) => {
    const arr = [];
    const newArray = [].concat.apply(arr, array.map((elem, i) => (i % size ? [] : [array.slice(i, i + size)])));
    return newArray;
  };
  

function ControllerGroup({ slots, id, index, role, modifier, rowIndex, groupIndex }: ControllerGroupProps) {
  const slotSets = group(slots, 4);

  console.log("Group Index: ", groupIndex)
  
  return (
    <>
      {slotSets.map((groupSlots, index) => (
        <ControllerSet 
        slots={groupSlots} 
        key={`set-${index}`}
        id={id}
        index={index}
        rowIndex={rowIndex}
        groupIndex={groupIndex}
        setIndex={index}
        role={role}
        modifier={modifier}
        />
      ))}
    </>
  );
}


export default ControllerGroup;
