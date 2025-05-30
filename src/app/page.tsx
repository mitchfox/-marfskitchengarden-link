'use client'

import Link from 'next/link'
import { Container } from '@/components/Container'
import {
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
  FacebookIcon,
} from '@/components/SocialIcons'
import { DynaPuff } from 'next/font/google'
import { FreeTrialBanner } from '@/components/FreeTrial'
import WithMeLogo from '@/images/photos/withmelogo.png'
import Marf_Image from '../images/photos/marf_image.jpg'
import Book1 from '../images/photos/book_img_1.webp'
import Book2 from '../images/photos/book_img_2.webp'
import { TbBook, TbHeadphones } from "react-icons/tb";
import { FaGlobe } from 'react-icons/fa'
import recipes from '../images/photos/recipes.jpg'
import projects from '../images/photos/projects.jpg'

const dynaPuff = DynaPuff({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link
      className="group -m-1 transform p-1 transition-transform hover:scale-110"
      {...props}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-6 w-6 fill-emerald-700 transition group-hover:fill-emerald-600" />
    </Link>
  )
}

function LinkBox({
  icon: Icon,
  title,
  description,
  href,
  image,
}: {
  icon?: React.ComponentType<{ className?: string }>
  title: string
  description?: string
  href: string
  image?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center justify-between rounded-2xl border border-emerald-100 bg-white p-2 shadow-xs transition-all hover:border-emerald-200 hover:scale-105"
    >
      <div className="flex flex-1 items-center gap-4">
        {image ? (
          <div className="aspect-square h-12 w-12 min-w-[3rem] overflow-hidden rounded-xl border border-emerald-100">
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        ) : (
          Icon && (
            <div className="flex aspect-square h-12 w-12 min-w-[3rem] items-center justify-center rounded-xl bg-emerald-100 p-2">
              <Icon className="h-6 w-6 text-emerald-700" />
            </div>
          )
        )}
        <div className="text-left">
          <h2 className="pr-6 text-xs text-emerald-900 font-bold" style={{ lineHeight: '1.5' }}>{title}</h2>
          {description && (
            <p className="mt-0.5 text-xs text-emerald-700">{description}</p>
          )}
        </div>
      </div>
      <svg
        className="h-4 w-4 flex-shrink-0 text-emerald-400"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </a>
  )
}

function ElongatedBlob({ className = '', variant = 'a', ...props }: { className?: string, variant?: 'a' | 'b' | 'c' | 'd' }) {
  const blobStyles = {
    a: {
      borderRadius: '90% 10% 90% 10% / 30% 70% 30% 70%',
      width: '28rem',
      height: '10rem',
      '--translate-x': '60px',
      '--translate-y': '-40px',
      '--scale': '1.3',
      '--duration': '12s',
    },
    b: {
      borderRadius: '20% 80% 20% 80% / 65% 35% 65% 35%',
      width: '25rem',
      height: '9rem',
      '--translate-x': '-50px',
      '--translate-y': '30px',
      '--scale': '1.4',
      '--duration': '15s',
    },
    c: {
      borderRadius: '70% 30% 70% 30% / 40% 60% 40% 60%',
      width: '30rem',
      height: '11rem',
      '--translate-x': '70px',
      '--translate-y': '-35px',
      '--scale': '1.25',
      '--duration': '10s',
    },
    d: {
      borderRadius: '70% 30% 70% 30% / 40% 60% 40% 60%',
      width: '26rem',
      height: '10rem',
      '--translate-x': '-65px',
      '--translate-y': '45px',
      '--scale': '1.35',
      '--duration': '13s',
    },
  }

  return (
    <div
      className={`absolute mix-blend-multiply filter blur-[60px] opacity-40 animate-float ${className}`}
      style={{
        backgroundColor: '#FF00AA',
        animation: `float var(--duration) cubic-bezier(0.4, 0, 0.6, 1) infinite`,
        ...blobStyles[variant]
      }}
      {...props}
    />
  )
}

export default function Home() {
  const socialLinks = [
    {
      href: 'https://www.instagram.com/marfskitchengarden/',
      icon: InstagramIcon,
    },
    {
      href: 'https://www.tiktok.com/@marfskitchengarden',
      icon: TikTokIcon,
    },
    {
      href: 'https://youtube.com/@marfskitchengarden?si=e0belEEwRKq8rbEv',
      icon: YouTubeIcon,
    },
    {
      href: 'https://www.facebook.com/MarfsKitchen/',
      icon: FacebookIcon,
    },
  ]

  const linksData = [
    {
      title: 'GIVE A GROW - BOOK INFO',
      description: '',
      href: 'https://www.penguin.co.uk/books/463153/give-it-a-grow-by-swales-martha/9780241710364',
      image: null,
      icon: TbBook,
    },
    {
      title: 'GIVE IT A GROW - AUDIO BOOK ',
      description: '',
      href: 'https://www.penguin.co.uk/books/463153/give-it-a-grow-by-swales-martha/9781405983693',
      image: null,
      icon: TbHeadphones,
    },
    {
      title: 'JOIN MARFSKITCHENGARDEN GROW WITHME',
      description: '',
      href: 'https://www.withme.so/MarfsKitchenGarden',
      image: WithMeLogo,
      icon: null,
    },
    {
      title: 'ALL MY SMALL GARDEN PROJECTS',
      description: '',
      href: 'https://www.withme.so/MarfsKitchenGarden?open_collection=true&id=2754',
      image: projects,
      icon: FaGlobe,
    },
    {
      title: 'RECIPES FROM MY GARDEN',
      description: '',
      href: 'https://www.withme.so/MarfsKitchenGarden?open_collection=true&id=2758',
      image: recipes,
      icon: FaGlobe,
    },
    {
      title: 'WORK WITH ME ',
      description: 'Martha Swales  |  The Soho Agency',
      href: 'https://thesohoagency.co.uk/authors/martha-swales/',
      image: null,
      icon: FaGlobe,
    },
  ]

  const bookLinksData = [
    {
      title: 'ORDER MY BOOK (Amazon)',
      description: '',
      href: 'https://www.amazon.co.uk/Give-Grow-Projects-Nurture-Wildlife/dp/0241710367?nodl=1&dplnkId=c9505a50-4992-4020-b7b0-75ca5b48d960',
      image: Book1,
      icon: null,
    },
    {
      title: 'ORDER MY BOOK  (Bookshop.org)',
      description: '',
      href: 'https://uk.bookshop.org/p/books/give-it-a-grow-martha-swales/7698400?ean=9780241710364',
      image: Book1,
      icon: null,
    },
    {
      title: 'ORDER MY BOOK (Waterstones)',
      description: '',
      href: 'https://www.waterstones.com/book/give-it-a-grow/martha-swales/9780241710364',
      image: Book1,
      icon: null,
    },
    {
      title: 'ORDER MY BOOK (Hive)',
      description: '',
      href: 'https://www.hive.co.uk/Product/Martha-Swales/Give-it-a-Grow--Simple-Projects-to-Nurture-Food-Flowers-a/30380742',
      image: Book1,
      icon: null,
    },
    {
      title: 'ORDER MY BOOK (Foyles)',
      description: '',
      href: 'https://www.foyles.co.uk/book/give-it-a-grow/martha-swales/9780241710364',
      image: Book1,
      icon: null,
    },
    {
      title: 'ORDER MY BOOK (Germany)',
      description: '',
      href: 'https://www.thalia.de/shop/home/artikeldetails/A1072112741',
      image: Book2,
      icon: null,
    },
    {
      title: 'ORDER MY BOOK (Netherlands)',
      description: '',
      href: 'https://www.bol.com/nl/nl/p/give-it-a-grow/9300000181729611/?bltgh=rJxZJi9FdzqZPRsOkGxDLw.2_6.7.ProductImage',
      image: Book2,
      icon: null,
    },
    {
      title: 'ORDER MY BOOK  (Australia)',
      description: '',
      href: 'https://www.penguin.com.au/books/give-it-a-grow-9781405968843',
      image: Book2,
      icon: null,
    },
    {
      title: 'ORDER MY BOOK (Sweden)',
      description: '',
      href: 'https://www.adlibris.com/se/bok/give-it-a-grow-9780241710364',
      image: Book1,
      icon: null,
    },
    {
      title: 'ORDER MY BOOK (NZ)',
      description: '',
      href: 'https://www.penguin.co.nz/books/give-it-a-grow-9781405968843',
      image: Book2,
      icon: null,
    },
    {
      title: 'ORDER MY BOOK (India)',
      description: '',
      href: 'https://www.amazon.in/Give-Grow-Projects-Nurture-Wildlife-ebook/dp/B0D6DN6TFT/ref=sr_1_1?nodl=1&crid=3DSAJGVUMMH8U&dib=eyJ2IjoiMSJ9.YCP0ABvQM4uDziyvejA7Yg.hFLmJN4Y1GwMNpZ5F2bjr70dVv3Nh_IXvrrKHkOCibQ&dib_tag=se&keywords=9781405968843&qid=1728633492&sprefix=9781405968843%2Caps%2C70&sr=8-1&dplnkId=2da77c93-6441-4f67-a5f6-f31c7ed745dd',
      image: Book1,
      icon: null,
    },
  ]

  return (
    <>
      <Container className="flex-1 min-w-screen w-full bg-gradient-to-b from-[#E5FCF0] to-[#E5FCF0] relative max-w-none">
        <style jsx global>{`
          @keyframes float {
            0%, 100% {
              transform: translate(0, 0) scale(1) rotate(0deg);
            }
            33% {
              transform: translate(var(--translate-x), var(--translate-y)) scale(var(--scale)) rotate(5deg);
            }
            66% {
              transform: translate(calc(var(--translate-x) * -0.5), calc(var(--translate-y) * -0.5)) scale(calc(var(--scale) * 0.9)) rotate(-3deg);
            }
          }
        `}</style>
        <div className="absolute inset-0 overflow-hidden">
          <ElongatedBlob variant="a" className="absolute left-[-15%] top-[700px] rotate-45 sm:left-[-10%]" />
          <ElongatedBlob variant="b" className="absolute right-[-15%] top-[1100px] -rotate-30 sm:right-[-5%]" />
          <ElongatedBlob variant="c" className="absolute left-[-5%] top-[1600px] rotate-145 sm:left-[10%]" />
          <ElongatedBlob variant="d" className="absolute right-[-10%] top-[2100px] rotate-15 sm:right-[45%]" />
        </div>
        <div className="mx-auto w-full max-w-lg text-center relative z-[1] pb-32 ">
          <div className="relative w-full">
            <div className="relative">
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[30dvh] sm:hidden"
                style={{
                  marginBottom: '-1px',
                  background:
                  
                    'linear-gradient(to bottom, rgba(229, 252, 240, 0) 0%, rgba(229, 252, 240, 0.8) 50%, rgba(229, 252, 240, 0.95) 75%, rgba(229, 252, 240, 1) 100%)',
                }}
              />
              <div className="mx-auto h-[45dvh] min-h-[350px] sm:mt-12 sm:h-48 sm:w-40 md:h-72 md:w-64">
                <img
                  src={Marf_Image.src}
                  style={{ objectFit: 'cover', objectPosition: 'center', }}
                  alt="Marfs Kitchen Garden"
                  className="h-full w-full object-cover object-top sm:rounded-3xl"
                />
              </div>
            </div>

            <div className="relative z-30">
              <h1
                className={`${dynaPuff.className} -mt-16 mb-2 text-3xl leading-none text-emerald-800 sm:mt-6 sm:text-3xl`}
              >
                {"Marf's Kitchen Garden"}
              </h1>
              <p className="mb-8 px-6 text-sm font-medium text-emerald-700">
                Easy gardening projects and recipes
              </p>

              <div className="mb-12 flex justify-center gap-6">
                {socialLinks.map(({ href, icon: Icon }) => (
                  <SocialLink key={href} href={href} icon={Icon} />
                ))}
              </div>

              <div className="space-y-4 px-6">
                {linksData.map(({ title, description, href, image, icon }) => (
                  <LinkBox
                    key={title}
                    title={title}
                    description={description}
                    href={href}
                    {...(icon ? { icon } : {})}
                    {...(image ? { image: image.src } : {})}
                  />
                ))}
              </div>
              <div className="space-y-4 px-6 mt-8">
                <div className="flex justify-center">
                  <p className={`${dynaPuff.className} px-4 py-2 text-md text-emerald-700 font-extrabold rounded-full`}>
                    Order My Book ☺️
                  </p>
                </div>
                {bookLinksData.map(({ title, description, href, image, icon }) => (
                  <LinkBox
                    key={title}
                    title={title}
                    description={description}
                    href={href}
                    {...(icon ? { icon } : {})}
                    {...(image ? { image: image.src } : {})}
                  />
                ))}
              </div>
              <FreeTrialBanner />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}