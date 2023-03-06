import Image from "next/image";
import styles from '@/Components/products/product.module.css';

export default function Product({
    img = "",
    tag = "",
    price = "",
    colorCircle = ""

}) {

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

            <div>
                {colorCircle}
            </div>

            <div>
                {price}
            </div>

        </div>

    )

}