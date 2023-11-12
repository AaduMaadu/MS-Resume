import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/Makerspace.png" alt="Makerspace Logo" className={styles.logo} />
        {/* Need to be able to write some text on the right of the Makerspace Logo */}
        <p> @Aadesh Senthilkumar</p>
      </footer>
    </>
  )
}
