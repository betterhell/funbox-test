import React, {useState} from 'react';
import styles from "./_ProductCard.module.scss"
import DisabledProductCard from "../DisabledProductCard/DisabledProductCard";

const ProductCard = ({product}) => {
    const {title, description1, description2, description3, info, stock, flavor, weight, image} = product

    const [style, setStyle] = useState(styles.card)
    const [isPrescription, setIsPrescription] = useState(<h3>Сказочное заморское яство</h3>)
    const [selectItem, setSelectItem] = useState(false)


    const changeStyle = () => {
        setStyle(
            (prevState) => prevState === styles.card
            ? styles.active
            : styles.card
        )
        setSelectItem(!selectItem)
    }

    const changePrescription = () => {
        if (selectItem && style === styles.active) {
            setIsPrescription(<h3>Сказочное заморское яство</h3>)
        }
        setIsPrescription(<p className={styles.ask}>Котэ не одобряет?</p>)
    }

    const changePrescriptionLeave = () => {
        setIsPrescription(<h3>Сказочное заморское яство</h3>)
    }

    return (
        <>
            {stock > 0
                ?
                    <div className={styles.cardWrapper} onClick={changeStyle}>
                        <div onMouseLeave={changePrescriptionLeave} onMouseEnter={changePrescription} className={style}>
                            <div className={styles.card__wrapper}>
                                <div className={styles.card__content}>
                                    {!selectItem ? <h3>Сказочное заморское яство</h3> : <h3>{isPrescription}</h3> }
                                    <h1>{title}</h1>
                                    <h2>{flavor}</h2>
                                    <p>{description1}</p>
                                    <p>{description2}</p>
                                    <p>{description3}</p>
                                    <img src={image} alt={title}/>
                                    <div className={styles.card__wrapper_weight}>
                                        <h3>{weight}</h3>
                                        <h4>КГ</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.card__buy}>
                            {selectItem ? <p>{info}</p> : <p>Чего сидишь, Порадуй котэ, <button>купи.</button></p> }
                        </div>
                    </div>
                : <DisabledProductCard product={product} /> }
        </>
    );
};

export default ProductCard;