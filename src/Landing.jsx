import NavigationBar from './NavigationBar.jsx'
import testAxios from './API.js'

export default function LandingPage() {
  testAxios();

  return (
    <div>
      <NavigationBar />
      <h1>A new world awaits</h1>
      <p>See the latest in crypto, and make your mark.</p>
    </div>
  )
}
