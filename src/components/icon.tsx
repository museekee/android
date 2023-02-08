import styles from "./../styles/icon.module.scss"

function Icon({name, icon, onclick}: {name: string, icon: string, onclick: () => void}) {
  return (
    <div className={styles["icon"]} onClick={onclick}>
      <div className={styles["img"]} style={{backgroundImage: `url(${icon})`}} />
      <div className={styles["name"]}>{name}</div>
    </div>
  )
}

Icon.defaultProps = {
  name: "",
  icon: "",
  onclick: () => {}
}

export default Icon