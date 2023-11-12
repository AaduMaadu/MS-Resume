import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/Makerspace.png" alt="Makerspace Logo" className={styles.logo} />
      </footer>
    </>
  )
}
