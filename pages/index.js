import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { inventory } from '../data/inventory'
import { useState, useEffect } from 'react'
import Product from '@/components/products'

export default function Home() {

  const [dataMale, setDataMale] = useState();
  const [dataMHoodies, setDataMHoodies] = useState();
  const [dataMJackets, setDataMJackets] = useState();
  const [dataMHeadgear, setDataMHeadgear] = useState();


  const [dataFemale, setDataFemale] = useState();
  const [dataFHoodies, setDataFHoodies] = useState();
  const [dataFJackets, setDataFJackets] = useState();
  const [dataFHeadgear, setDataFHeadgear] = useState();


  const [dataUnisex, setDataUnisex] = useState();
  const [dataUHoodies, setDataUHoodies] = useState();
  const [dataUJackets, setDataUJackets] = useState();
  const [dataUHeadgear, setDataUHeadgear] = useState();




  const addingDataMale = () => {
    console.log("Male");
    setDataMale(inventory);
    console.log(inventory);
  }
  const addingDataMHoodies = () => {
    console.log("Male Hoodies");
    setDataMHoodies(inventory);
    console.log(inventory);
  }
  const addingDataMJackets = () => {
    console.log("Male Jackets");
    setDataMJackets(inventory);
    console.log(inventory);
  }
  const addingDataMHeadgear = () => {
    console.log("Male Headgear");
    setDataMHeadgear(inventory);
    console.log(inventory);
  }



  const addingDataFemale = () => {
    console.log("Female");
    setDataFemale(inventory);
    console.log(inventory);
  }
  const addingDataFHoodies = () => {
    console.log("Female Hoodies");
    setDataFHoodies(inventory);
    console.log(inventory);
  }
  const addingDataFJackets = () => {
    console.log("Female Jackets");
    setDataFJackets(inventory);
    console.log(inventory);
  }
  const addingDataFHeadgear = () => {
    console.log("Female Headgear");
    setDataFHeadgear(inventory);
    console.log(inventory);
  }



  const addingDataUnisex = () => {
    console.log("Unisex");
    setDataUnisex(inventory);
    console.log(inventory);
  }

  const addingDataUHoodies = () => {
    console.log("Unisex Hoodies");
    setDataUHoodies(inventory);
    console.log(inventory);
  }
  const addingDataUJackets = () => {
    console.log("Unisex Jackets");
    setDataUJackets(inventory);
    console.log(inventory);
  }
  const addingDataUHeadgear = () => {
    console.log("Unisex Headgear");
    setDataUHeadgear(inventory);
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
        <h1 className={styles.introTitle}>Filter by:</h1>


        {/* Male section */}

        <h2 className={styles.bigTitle}
          onClick={() => {
            addingDataMale()
          }}>Male</h2>


        <div className={styles.content}>
          {
            dataMale && dataMale.clothing.map((item, male) => {
              if (item.sex === "Male") {
                return (
                  <div key={male}>
                    <Product img={item.image} tag={item.title} />
                  </div>
                )
              }
            })
          }
        </div>

        <div className={styles.smallTitle}
          onClick={() => addingDataMHoodies()}>Hoodies</div>

        <div className={styles.content}>

          {
            dataMHoodies && dataMHoodies.clothing.map((item, malehoodies) => {
              if (item.category === "Hoodies" && item.sex === "Male") {
                return (
                  <div key={malehoodies}>
                    <Product img={item.image}
                      tag={item.title}
                      colorCircle={item.hex}
                      price={item.cost} />
                  </div>
                )
              }
            })
          }

        </div>

        <div className={styles.smallTitle}
          onClick={() => addingDataMJackets()}>Jackets</div>

        <div className={styles.content}>

          {
            dataMJackets && dataMJackets.clothing.map((item, malejackets) => {
              if (item.category === "Jackets" && item.sex === "Male") {
                return (
                  <div key={malejackets}>
                    <Product img={item.image}
                      tag={item.title}
                      colorCircle={item.hex}
                      price={item.cost} />
                  </div>
                )
              }
            })
          }

        </div>

        <div className={styles.smallTitle}
          onClick={() => addingDataMHeadgear()}>Headgear</div>

        <div className={styles.content}>

          {
            dataMHeadgear && dataMHeadgear.clothing.map((item, maleheadgear) => {
              if (item.category === "Headgear" && item.sex === "Male") {
                return (
                  <div key={maleheadgear}>
                    <Product img={item.image}
                      tag={item.title}
                      colorCircle={item.hex}
                      price={item.cost} />
                  </div>
                )
              }
            })
          }

        </div>


        {/* Female section */}

        <h2 className={styles.bigTitle}
          onClick={() => addingDataFemale()}>Female</h2>

        <div className={styles.content}>

          {
            dataFemale && dataFemale.clothing.map((item, female) => {
              if (item.sex === "Female") {
                return (
                  <div key={female}>
                    <Product img={item.image} tag={item.title} />
                  </div>
                )
              }
            })
          }

        </div>

        <div className={styles.smallTitle}
          onClick={() => addingDataFHoodies()}>Hoodies</div>

        <div className={styles.content}>

          {
            dataFHoodies && dataFHoodies.clothing.map((item, femalehoodies) => {
              if (item.category === "Hoodies" && item.sex === "Female") {
                return (
                  <div key={femalehoodies}>
                    <Product img={item.image}
                      tag={item.title}
                      colorCircle={item.hex}
                      price={item.cost} />
                  </div>
                )
              }
            })
          }

        </div>

        <div className={styles.smallTitle}
          onClick={() => addingDataFJackets()}>Jackets</div>

        <div className={styles.content}>

          {
            dataFJackets && dataFJackets.clothing.map((item, femalejackets) => {
              if (item.category === "Jackets" && item.sex === "Female") {
                return (
                  <div key={femalejackets}>
                    <Product img={item.image}
                      tag={item.title}
                      colorCircle={item.hex}
                      price={item.cost} />
                  </div>
                )
              }
            })
          }

        </div>

        <div className={styles.smallTitle}
          onClick={() => addingDataFHeadgear()}>Headgear</div>

        <div className={styles.content}>

          {
            dataFHeadgear && dataFHeadgear.clothing.map((item, femaleheadgear) => {
              if (item.category === "Headgear" && item.sex === "Female") {
                return (
                  <div key={femaleheadgear}>
                    <Product img={item.image}
                      tag={item.title}
                      colorCircle={item.hex}
                      price={item.cost} />
                  </div>
                )
              }
            })
          }

        </div>


        {/* Unisex section */}

        <h2 className={styles.bigTitle}
          onClick={() => addingDataUnisex()}>Unisex</h2>

        <div className={styles.content}>

          {
            dataUnisex && dataUnisex.clothing.map((item, unisex) => {
              if (item.sex === "Unisex") {
                return (
                  <div key={unisex}>
                    <Product img={item.image} tag={item.title} />
                  </div>
                )
              }

            })
          }

        </div>

        <div className={styles.smallTitle}
          onClick={() => addingDataUHoodies()}>Hoodies</div>

        <div className={styles.content}>

          {
            dataUHoodies && dataUHoodies.clothing.map((item, unihoodies) => {
              if (item.category === "Hoodies" && item.sex === "Unisex") {
                return (
                  <div key={unihoodies}>
                    <Product img={item.image}
                      tag={item.title}
                      colorCircle={item.hex}
                      price={item.cost} />
                  </div>
                )
              }
            })
          }

        </div>

        <div className={styles.smallTitle}
          onClick={() => addingDataUJackets()}>Jackets</div>

        <div className={styles.content}>

          {
            dataUJackets && dataUJackets.clothing.map((item, unijackets) => {
              if (item.category === "Jackets" && item.sex === "Unisex") {
                return (
                  <div key={unijackets}>
                    <Product img={item.image}
                      tag={item.title}

                      colorCircle={
                        item.hex && item.hex.map((cl, ind) => {
                          return (
                            <div key={ind}>
                              {cl}
                            </div>
                          )
                        })
                      }

                      price={item.cost} />
                  </div>
                )
              }
            })
          }

        </div>

        <div className={styles.smallTitle}
          onClick={() => addingDataUHeadgear()}>Headgear</div>

        <div className={styles.content}>

          {
            dataUHeadgear && dataUHeadgear.clothing.map((item, uniheadgear) => {
              if (item.category === "Headgear" && item.sex === "Unisex") {
                return (
                  <div key={uniheadgear}>
                    <Product img={item.image}
                      tag={item.title}
                      colorCircle={item.hex}
                      price={item.cost} />
                  </div>
                )
              }
            })
          }

        </div>

      </main>
    </>
  )
}

