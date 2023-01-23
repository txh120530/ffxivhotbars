import HotBarSlot from '../HotBarSlot/HotBarSlot';
import styles from './ControllerSet.module.css'

interface ControllerSetProps {
    slots: any;
    id: any;
    index: any;
    role: any;
    modifier: any;
    rowIndex: any;
    groupIndex: any;
    setIndex: any;
}

function ControllerSet({ slots, id, index, role, modifier, rowIndex, groupIndex, setIndex }: ControllerSetProps) {
    console.log("Set Index: ", setIndex)
    return (
    <div  className={styles.slot}>
      { slots.map((slot, index) => (
        <HotBarSlot
          id={slot.id}
          key={`slot-${slot.id}`}
          modifier={modifier}
          storageID={`chb-${role.Abbr}-${rowIndex}-${groupIndex}-${setIndex}-${index}`}

        />
      ))}
    </div>
  );
}


export default ControllerSet;
