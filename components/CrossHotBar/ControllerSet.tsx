import HotBarSlot from '../HotBarSlot/HotBarSlot';
import styles from './ControllerSet.module.css'



function ControllerSet({ slots, id, index, role, modifier, rowIndex, groupIndex, setIndex }) {
    console.log("Set Index: ", setIndex)
    return (
    <div  className={styles.slot}>
      { slots.map((slot, index) => (
        <HotBarSlot
          id={slot.id}
          key={`slot-${slot.id}`}
          action={slot.action}
          modifier={modifier}
          storageID={`chb-${role.Abbr}-${rowIndex}-${groupIndex}-${setIndex}-${index}`}

        />
      ))}
    </div>
  );
}


export default ControllerSet;
