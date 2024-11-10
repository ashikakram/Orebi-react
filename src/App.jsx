import { useState } from 'react'
import './App.css'
import { Container } from './assets/components/Container'
import { Flex } from './assets/components/Flex'
import Image from './assets/components/Image'
import Lo from '../src/assets/components/images_all/orebilogo.png'
import addone from '../src/assets/components/images_all/Ad_1.jpg'
import addtwo from '../src/assets/components/images_all/Ad_2.png'
import addthree from '../src/assets/components/images_all/Ad_3.jpg'


import Menu from './assets/components/Menu'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { TbManFilled } from "react-icons/tb";
import { FaCaretDown,FaShoppingCart } from "react-icons/fa";
import { FaShuttleVan } from "react-icons/fa";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";



import Heading from './assets/components/Heading'
import Search from './assets/components/Search'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* header top part start */}
    <div className={'w-full py-[30px]'}>
      <Container className={'max-w-headerContainer '}>
       <Flex className={''}>
        <div className={'w-iconW py-[10px]'}>
        <Image imgSrc={Lo}/>
        </div>
        <div className={'w-menuW'}>
          <Flex  className={' justify-center'}>
                <Menu className={'py-[5px] px-[10px] gap-x-4 mr-3 '}  menuName={'Home'}/>
                <Menu className={'py-[5px] px-[10px] gap-x-4 mr-3 '}  menuName={'Shop'}/>
                <Menu className={'py-[5px] px-[10px] gap-x-4 mr-3 '}  menuName={'About'}/>
                <Menu className={'py-[5px] px-[10px] gap-x-4 mr-3 '}  menuName={'Contacts'}/>
                <Menu className={'py-[5px] px-[10px] gap-x-4 mr-3 '}  menuName={'Journal'}/>
          </Flex>
        </div>
       </Flex>
      </Container>
    </div>
    {/* header top part end */}

    {/* header bottom part start */}
    <div className='w-full py-[30px] bg-[#C4C4C4] bg-opacity-20 border-[#979797] border-t-[1px] border-b-[4px] border-opacity-30 border-l-0 border-r-0'>
      <Container className={'max-w-headerContainer  '}>
        <Flex className={''} >

              <div className='w-1/5'>
                <Flex className={'mt-2'}>
                <HiBars3BottomLeft />
                <Heading as={'h3'} className={'pl-3 mt-[-3px] text-sm'} text={'Shop by Category'}/>

                </Flex>
              </div>

              <div className={'w-3/5 text-center ml-[90px] relative'}>
              <Search  className={' w-[90%] py-[5px] px-5 '}/>
              <IoMdSearch className={'absolute right-10 bottom-2 '} />
              </div>

              <div className={'w-1/5'}>
              <Flex className={'mt-2 justify-end'}>
              <TbManFilled className={'gap-x-3'} />
              <FaCaretDown className={'mr-[50px]'}/>
              <FaShoppingCart />

              </Flex>
              </div>
        </Flex>
      </Container>
    </div>
     {/* header bottom part start */}

     {/* intro  part start */}
     <div  className={'w-full bg-intro h-intro bg-no-repeat bg-cover	bg-center mt-[-130px]'}>
      <Container className={'max-w-headerContainer' }>

      </Container>
     </div>
     {/* intro part end */}
     {/*intro footer part start  */}

     <div className={' w-full py-[20px] border-introB border-t-[1px] border-b-[1px]'}>
      <Container className={'max-w-headerContainer'}>
        <Flex className={'justify-between'}>
          <div className={'w-[30%]'}>
            <Flex className={'gap-x-3'}>
            <h3>2</h3>
            <p className={''}>Two years warranty</p>
            </Flex>
          </div>
          <div className={'w-[30%]'}>
            <Flex className={'gap-x-3 justify-center'} >
            <FaShuttleVan className={'mt-1'} />
            <p>Free shipping</p>
            </Flex>
          </div>
          <div className={'w-[30%]'}>
            <Flex className={'gap-x-3 justify-end'}>
            <HiMiniArrowPathRoundedSquare className={'mt-1'} />
            <p>Return policy in 30 days</p>
            </Flex>
          </div>
        </Flex>
      </Container>
     </div>
     {/*intro footer part end  */}

     {/* add part start */}
     <div className='w-full py-[120px]'> 
      <Container className={'max-w-headerContainer'}>
        <Flex className={'justify-between'}>
          <div className={'w-[49%]'}>
            <Image imgSrc={addone}/>
          </div>
          <div className={'w-[49%]'}>
          <Image imgSrc={addtwo}/>
          <Image imgSrc={addthree} className={'pt-6'}/>
          
          </div>
        </Flex>
      </Container>
     </div>
     {/* add part end */}

     


    </>
  )
}

export default App
