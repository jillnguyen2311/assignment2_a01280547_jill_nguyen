import Image from "next/image";
import styles from '@/Components/products/product.module.css';
import { useState } from "react";

export default function Product({
    
    img = "",
    tag = "",
    price = "",
    colorCircle = ""

}) {
    const [color,changeColor] = useState();
    return (
        <div className={styles.products}>
            <Image
                src={img}
                alt="image"
                width={200}
                height={200}
            />
            
            <div>
                {tag}
            </div>

            <div style={{ backgroundColor: colorCircle, height: 15, width: 15, borderRadius: 50 }}>
            </div>

            <div>
                {price}
            </div>

        </div>

    )

}