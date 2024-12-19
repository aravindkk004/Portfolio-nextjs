const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-secondary p-4"><p className='text-center text-white text-xl'>&copy; {year} | Aravind K K</p></footer>
  )
}

export default Footer