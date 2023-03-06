import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { inventory } from '../data/inventory'
import { useState, useEffect } from 'react'
import Product from '@/components/products'

export default function Home() {

  const [data, setData] = useState();

  const addingData = () => {
    console.log("Here");
    setData(inventory);
    console.log(inventory);
  }

  return (
    <>
      <Head>
        <title>Geared Up Online Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/newfavicon.ico" />
      </Head>
      <main className={styles.main}>

        <Image src="/logo.png" width="300" height="100" />


        {/* Male section */}

        <h1 onClick={() => addingData()}>Male</h1>

        {
          data && data.clothing.map((item, male) => {
            if (item.sex === "Male") {
              return (
                <div key={male}>
                  <Product img={item.image} tag={item.title} />
                </div>
              )
            }
          })
        }


        <p onClick={() => addingData()}>Hoodies</p>

        {
          data && data.clothing.map((item, malehoodies) => {
            if (item.category === "Hoodies" && item.sex === "Male") {
              return (
                <div key={malehoodies}>
                  <Product img={item.image} tag={item.title} colorCircle={item.colours} price={item.cost} />
                </div>
              )
            }
          })
        }

        <p onClick={() => addingData()}>Jackets</p>

        {
          data && data.clothing.map((item, malejackets) => {
            if (item.category === "Jackets" && item.sex === "Male") {
              return (
                <div key={malejackets}>
                  <Product img={item.image} tag={item.title} colorCircle={item.colours} price={item.cost} />
                </div>
              )
            }
          })
        }

        <p onClick={() => addingData()}>Headgear</p>

        {
          data && data.clothing.map((item, maleheadgear) => {
            if (item.category === "Headgear" && item.sex === "Male") {
              return (
                <div key={maleheadgear}>
                  <Product img={item.image} tag={item.title} colorCircle={item.colours} price={item.cost} />
                </div>
              )
            }
          })
        }


        {/* Female section */}

        <h1 onClick={() => addingData()}>Female</h1>

        {
          data && data.clothing.map((item, female) => {
            if (item.sex === "Female") {
              return (
                <div key={female}>
                  <Product img={item.image} tag={item.title} />
                </div>
              )
            }
          })
        }

        <p onClick={() => addingData()}>Hoodies</p>

        {
          data && data.clothing.map((item, femalehoodies) => {
            if (item.category === "Hoodies" && item.sex === "Female") {
              return (
                <div key={femalehoodies}>
                  <Product img={item.image} tag={item.title} colorCircle={item.colours} price={item.cost} />
                </div>
              )
            }
          })
        }

        <p onClick={() => addingData()}>Jackets</p>

        {
          data && data.clothing.map((item, femalejackets) => {
            if (item.category === "Jackets" && item.sex === "Female") {
              return (
                <div key={femalejackets}>
                  <Product img={item.image} tag={item.title} colorCircle={item.colours} price={item.cost} />
                </div>
              )
            }
          })
        }

        <p onClick={() => addingData()}>Headgear</p>

        {
          data && data.clothing.map((item, femaleheadgear) => {
            if (item.category === "Headgear" && item.sex === "Female") {
              return (
                <div key={femaleheadgear}>
                  <Product img={item.image} tag={item.title} colorCircle={item.colours} price={item.cost} />
                </div>
              )
            }
          })
        }


        {/* Unisex section */}

        <h1 onClick={() => addingData()}>Unisex</h1>

        {
          data && data.clothing.map((item, unisex) => {
            if (item.sex === "Unisex") {
              return (
                <div key={unisex}>
                  <Product img={item.image} tag={item.title} />
                </div>
              )
            }
          })
        }

        <p onClick={() => addingData()}>Hoodies</p>

        {
          data && data.clothing.map((item, unihoodies) => {
            if (item.category === "Hoodies" && item.sex === "Unisex") {
              return (
                <div key={unihoodies}>
                  <Product img={item.image} tag={item.title} colorCircle={item.colours} price={item.cost} />
                </div>
              )
            }
          })
        }

        <p onClick={() => addingData()}>Jackets</p>

        {
          data && data.clothing.map((item, unijackets) => {
            if (item.category === "Jackets" && item.sex === "Unisex") {
              return (
                <div key={unijackets}>
                  <Product img={item.image} tag={item.title} colorCircle={item.colours} price={item.cost} />
                </div>
              )
            }
          })
        }

        <p onClick={() => addingData()}>Headgear</p>

        {
          data && data.clothing.map((item, uniheadgear) => {
            if (item.category === "Headgear" && item.sex === "Unisex") {
              return (
                <div key={uniheadgear}>
                  <Product img={item.image} tag={item.title} colorCircle={item.colours} price={item.cost} />
                </div>
              )
            }
          })
        }

      </main>
    </>
  )
}

