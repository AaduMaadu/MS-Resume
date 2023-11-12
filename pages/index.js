import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  const redirectToGitHub = () => {
    window.open("https:/github.com/AaduMaadu/MS-Resume", "_blank");
  };
  // const FileSystemHandle = (event) => {
  //   const file = event.target.files[0];
  //   console.log('Selected file:', file);
  // };
  
  return (
    <div className="container">
      <Head>
        <title>Welcome to my Website</title>
        <link rel="icon" href="/Makerspace.png" />
        {/* <link rel="stylesheet" href="/styles.css" /> */}
      </Head>

      <main>
        <Header title="About me" />
        <p>
          Hi, my name is Aadesh Senthilkumar
        </p>
        <p className="description">
          <div className="image-profile">
            <img src="./profile-pic.jpg" alt="Aadesh" height="250" width="200"></img>
          </div>
        
          {/* <label htmlFor="file" className="custom-button" href="https://github.com/AaduMaadu/MS-Resume">Github</label> */}
          {/* <input type="file" accept=".pdf" id="file" className="file-input" onChange={FileSystemHandle}/> */}
          <p>
            <button onClick={redirectToGitHub} className="custom-button">Github</button>
            <button onClick={redirectToGitHub} className="custom-button">LinkedIn</button>
            <button onClick={redirectToGitHub} className="custom-button">Minecraft</button>
          </p>
        </p>
      </main>

      <Footer />
    </div>
  )
}
