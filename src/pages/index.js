import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillPhone, AiOutlineMail, AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { useState } from 'react';
import Image from 'next/image';
import selfImage from '../images/myselfRemoved.png';
import csharp from '../images/csharp.png';
import css from '../images/css.png';
import html from '../images/html.png';
import javascript from '../images/javascript.png';
import reactLogo from '../images/react.png';
import node from '../images/node.png';
import python from '../images/python.png';
import tailwind from '../images/tailwind.png';
import sql from '../images/sql.png';
import oracle from '../images/oracle.png';
import java from '../images/java.png';
import php from '../images/php.png';
import git from '../images/git.png';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const techImageWidth = 50;
  const techImageHeight = 50;

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Tyler Ferreira Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section id='slide' className='min-h-screen'>
          <nav className='pt-10 md:pb-10 md:mb-3 flex justify-between sticky top-0'>
            <div className='flex'>
            <a href='tel:905-515-1651' className='mobile cursor-pointer bg-gradient-to-r from-fuchsia-700 to-purple-700 text-4xl text-white p-2 shadow-md dark:shadow-fuchsia-900 rounded-lg'><AiFillPhone/></a>
              <a href='mailto:tyler.ferreira1@mohawkcollege.ca' className='mobile cursor-pointer bg-gradient-to-r from-fuchsia-700 to-purple-700 text-4xl text-white p-2 mx-5 shadow-md dark:shadow-fuchsia-900 rounded-lg'><AiOutlineMail/></a>
              <a href='tel:905-515-1651' className='desktop cursor-pointer bg-gradient-to-r from-fuchsia-700 to-purple-700 text-xl text-white p-2 shadow-md dark:shadow-fuchsia-900 rounded-lg'>905-515-1651</a>
              <a href='mailto:tyler.ferreira1@mohawkcollege.ca' className='desktop cursor-pointer bg-gradient-to-r from-fuchsia-700 to-purple-700 text-xl text-white p-2 mx-5 shadow-md dark:shadow-fuchsia-900 rounded-lg'>Tyler.ferreira1@mohawkcollege.ca</a>
            </div>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='animate-bounce cursor-pointer text-2xl dark:text-white'/></li>
              <li><a href="https://1drv.ms/b/s!ApUrob8mlp8DjUVi_b3PBuotOqeI?e=IwiDgv" target='_blank' className='text-xl bg-gradient-to-r from-fuchsia-700 to-purple-700 text-white px-4 py-2 rounded-md ml-8 shadow-lg dark:shadow-fuchsia-900'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-fuchsia-700 font-medium md:text-6xl dark:text-fuchsia-500'>TYLER FERREIRA</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Software Developer</h3>
            <p className='text-md py-5 text-gray-800 max-w-xl mx-auto md:text-xl dark:text-slate-200'>
              Full-Stack Developer designing and developing web applications.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-slate-400'>
            <a href="https://twitter.com/Tyler_Ferreira4" target='_blank'><AiFillTwitterCircle/></a>
            <a href="https://www.linkedin.com/in/tyler-ferreira" target='_blank'><AiFillLinkedin/></a>
            <a href="https://github.com/TylerFerreira" target='_blank'><AiFillGithub/></a>
          </div>
          <div className='relative mx-auto text-center bg-gradient-to-b from-fuchsia-700 rounded-full w-80 h-80 mt-20 overflow-hidden shadow-lg dark:shadow-fuchsia-900 md:h-96 md:w-96'>
           <Image src={selfImage} layout='fill' objectFit='cover' alt='Image of myself'></Image>
          </div>
          
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Technical Skills</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-slate-200 md:max-w-4xl'>
              As a Software Developer, I pride myself on being able to utilize a variety of technologies. I have experience with the following languages and frameworks.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg py-10 rounded-xl my-10 dark:bg-white dark:shadow-slate-500 lg:w-1/3'>
              <h3 className='text-lg font-medium pb-2'>Front-End</h3>
              <div className='flex justify-around md:flex-1'>
                <Image src={html} width={techImageWidth} height={techImageHeight}/>
                <Image src={css} width={techImageWidth} height={techImageHeight}/>
                <Image src={javascript} width={techImageWidth} height={techImageHeight}/>
                <Image src={reactLogo} width={techImageWidth} height={techImageHeight}/>
                <Image src={tailwind} width={techImageWidth} height={techImageHeight}/>
              </div>
            </div>

            <div className='text-center shadow-lg py-10 rounded-xl my-10 dark:bg-white dark:shadow-slate-500 lg:w-1/3'>
              <h3 className='text-lg font-medium pb-2'>Back-End</h3>
              <div className='flex justify-around md:flex-1'>
                <Image src={php} width={techImageWidth} height={techImageHeight}/>
                <Image src={sql} width={techImageWidth} height={techImageHeight}/>
                <Image src={oracle} width={techImageWidth} height={techImageHeight}/>
                <Image src={node} width={techImageWidth} height={techImageHeight}/>
              </div>
            </div>

            <div className='text-center shadow-lg py-10 rounded-xl my-10 dark:bg-white dark:shadow-slate-500 lg:w-1/3'>
              <h3 className='text-lg font-medium pb-2'>Miscellaneous</h3>
              <div className='flex justify-around md:flex-1'>
                <Image src={python} width={techImageWidth} height={techImageHeight}/>
                <Image src={java} width={techImageWidth} height={techImageHeight}/>
                <Image src={csharp} width={techImageWidth} height={techImageHeight}/>
                <Image src={git} width={techImageWidth} height={techImageHeight}/>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-slate-200 md:max-w-4xl'>
              As a Full-Stack Developer I pride myself on being able to offer a wide range of services to my clients. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat earum soluta quis. Laudantium explicabo quos facere eius at magnam placeat minus, laboriosam accusamus, a aliquam temporibus, perspiciatis ratione vel!
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1 dark:text-slate-200'>IMAGE HERE</div>
            <div className='basis-1/3 flex-1 dark:text-slate-200'>IMAGE HERE</div>
            <div className='basis-1/3 flex-1 dark:text-slate-200'>IMAGE HERE</div>
            <div className='basis-1/3 flex-1 dark:text-slate-200'>IMAGE HERE</div>
            <div className='basis-1/3 flex-1 dark:text-slate-200'>IMAGE HERE</div>
            <div className='basis-1/3 flex-1 dark:text-slate-200'>IMAGE HERE</div>
          </div>
        </section>
      </main>
    </div>
  )
}
