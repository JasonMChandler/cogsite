import Head from 'next/head'
import { Provider } from 'react-redux'
import App from '../components/baseapp'
import store from '../store/index'
export default function Home() {
  return (
    <Provider store={store}><App/></Provider>
  )
}
