import HotBarSlot from '../HotBarSlot/HotBarSlot';
import styles from './ControllerSet.module.css'

interface ControllerSetProps {
    slots: any;
    role: any;
    modifier: any;
    rowIndex: any;
    groupIndex: any;
    setIndex: any;
}

function ControllerSet({ slots, role, modifier, rowIndex, groupIndex, setIndex }: ControllerSetProps) {
    return (
    <div  className={styles.slot}>
      { slots.map((slot, index) => (
        <HotBarSlot
              id={slot.id}
              key={`slot-${slot.id}`}
              modifier={modifier}
              storageID={`chb-${role.Abbr}-${rowIndex}-${groupIndex}-${setIndex}-${index}`} index={undefined} role={undefined}
        />
      ))}
    </div>
  );
}


export default ControllerSet;
