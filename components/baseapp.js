
import Head from 'next/head'
import NBack from '../components/nBack'
import { useSelector, useDispatch } from 'react-redux'
export default function BaseApp(props) {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()


	  return (
        <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <NBack />
      {JSON.stringify(state)}
      </main>

      <footer>
      </footer>

      <style jsx>{``}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        .boxesdefault {
        background-color: #d9d9d9;

        }
        .boxeslit {
        background-color: #bd874d;


        }

      `}</style>
    </div>) 
	}