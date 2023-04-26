import Navigation from 'components/Navigation.tsx'

export default function Layout({ children }) {
  return (
    <div class="relative h-screen flex flex-col row justify-center items-center text-left">
      <main>{children}</main>
        <Navigation/>    
    </div>
  )
}
