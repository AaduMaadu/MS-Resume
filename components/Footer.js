import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/Makerspace.png" alt="Makerspace Logo" className={styles.logo} />
        {/* Need to be able to write some text on the right of the Makerspace Logo */}
        <p> 
          @<a href="https://wiki.utd.ms/" target="_blank" >Makerspace</a>❤
        </p>
      </footer>
    </>
  )
}
