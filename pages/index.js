import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  const FileSystemHandle = (event) => {
    const file = event.target.files[0];
    console.log('Selected file:', file);
  };
  
  return (
    <div className="container">
      <Head>
        <title>Resume Fabricator</title>
        <link rel="icon" href="/Makerspace.png" />
      </Head>

      <main>
        <Header title="Start by uploading your resume" />
        <p className="description">
          {/* Create button to upload pdf */}
          <input type="file" accept=".pdf" onChange={FileSystemHandle}/>
          <code>Upload PDF</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
