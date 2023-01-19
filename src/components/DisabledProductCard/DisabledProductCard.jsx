import React from 'react';
import styles from "./_DisabledProductCard.module.scss"

const DisabledProductCard = ({product}) => {
    const {title, description1, description2, description3, flavor, weight, outOfStock, image} = product

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.disable}>
                <div className={styles.card__wrapper}>
                    <div className={styles.card__content}>
                        <h3>Сказочное заморское яство</h3>
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
                <p>{outOfStock}</p>
            </div>
        </div>
    );
};

export default DisabledProductCard;