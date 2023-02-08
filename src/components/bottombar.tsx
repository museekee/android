import styles from "./../styles/bottombar.module.scss"
import Icon from "./icon"
import Logo from "./../logo.svg"

function BottomBar() {
  return (
    <div id={styles["bar"]}>
      <Icon icon={Logo}/>
    </div>
  )
}
export default BottomBar