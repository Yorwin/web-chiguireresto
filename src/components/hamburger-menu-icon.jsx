import styles from './hamburger-menu-icon.module.css'

function HamburgerMenu(props) {

  return <>
    <label>
      <input type="checkbox" id={styles['check']} onChange={props.OnChange} checked={props.isChecked} />
      <span></span>
      <span></span>
      <span></span>
    </label>
  </>
}

export default HamburgerMenu;