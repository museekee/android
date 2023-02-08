import styles from "./styles/main.module.scss"
import BottomBar from "./components/bottombar"
import { useState } from "react"

function Main() {
  const pageLen = 10
  const pageLenArr = new Array(pageLen).fill(0)
  const pages = pageLenArr.map((v, i) => (<div key={i} className={styles["page"]}>{i}</div>))
  const pageSelectors = pageLenArr.map((v, i) => (
    <input
      type={"radio"}
      name="pageSelectBtn"
      key={i}
      className={styles["pageBtn"]}
      title={`${i+1}번째 페이지 버튼`}
      onClick={(e) => setPage(i)} />
  ))
  console.log(pages)
  const [page, setPage] = useState(0)
  return (
    <div id={styles["container"]}>
      <div className={styles["pages"]}>
        {pages[page]}
      </div>
      <div id={styles["pageSelect"]}>
        {pageSelectors}
      </div>
      <BottomBar /> 
    </div>
  )
}

export default Main