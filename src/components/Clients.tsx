import clickupImg  from '../assets/Group 13.png'
import dropboxImg from '../assets/Group 14.png'
import segmentImg from '../assets/Group 15.png'
import freshbookImg from '../assets/freshbooks-logo-1 1.png'
import githubImg from '../assets/GitHub_Logo 1.png'

const Clients = () => {
  return (
    <div className='mt-28'>
      <p className="text-2xl text-primaryColor font-medium text-center">Trusted by 100k plus customers</p>
      <div className='flex flex-col justify-center items-center flex-wrap mt-12 gap-8 sm:flex-row md:gap-x-16 lg:gap-x-32 xl:gap-x-36'>
        <img src={clickupImg} alt="clickup logo"/>
        <img src={dropboxImg} alt="dropbox logo"/>
        <img src={segmentImg} alt='segment logo' />
        <img src={freshbookImg} alt='freshbook logo' />
        <img src={githubImg} alt='github logo' />
      </div>
    </div>
  )
}

export default Clients