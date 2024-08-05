import imgLogo from '../assets/Logo.png'

const Header = () => {
  return (
    <header>
      <div className="max-container mt-9 flex justify-between items-start border-b h-[var(--header-height)]">
        <a href="#">
          <img src={imgLogo} />
        </a>
        <nav className='space-x-10 *:font-medium max-lg:hidden'>
          <a href='#product'>Product</a>
          <a href='#pricing'>Pricing</a>
          <a href='#company'>Company</a>
          <a href='#ressources'>Ressourses</a>
          <a href='#contact'>Contact</a>
        </nav>
        <div className='flex space-x-5 items-center *:font-medium'>
          <a href='#login'>Login</a>
          <a href='#' className='text-white bg-accentColor px-4 py-2 rounded-full'>Get Started</a>
        </div>
      </div>
    </header>
  )
}

export default Header