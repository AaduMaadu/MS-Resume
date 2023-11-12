import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo-netlify.svg" alt="Makerspace Logo" className={styles.logo} />
      </footer>
    </>
  )
}
