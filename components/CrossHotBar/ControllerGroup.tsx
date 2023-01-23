import ControllerSet from './ControllerSet';

interface ControllerGroupProps {
  slots: any;
  id: any;
  role: any;
  modifier: any;
  rowIndex: any;
  groupIndex: any;
}

const group = (array: any[], size: number) => {
    const arr = [];
    const newArray = [].concat.apply(arr, array.map((elem: any, i: number) => (i % size ? [] : [array.slice(i, i + size)])));
    return newArray;
  };
  

function ControllerGroup({ slots, id, role, modifier, rowIndex, groupIndex }: ControllerGroupProps) {
  const slotSets = group(slots, 4);

  console.log("Group Index: ", groupIndex)
  
  return (
    <>
      {slotSets.map((groupSlots: any, index: any) => (
        <ControllerSet 
        key={`set-${index}`}
        slots={groupSlots} 
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
