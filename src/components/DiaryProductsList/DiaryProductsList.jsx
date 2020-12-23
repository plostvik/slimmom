import React from 'react';
import styles from './DiaryProductsList.module.scss';
// import DiaryProductsListItem from '../../components/DiaryProductsListItem';

const products = [
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: '507f1f77bcf86cd799439011',
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
];

const DiaryProductsList = () => {
  const mappedList = products.map(product => {
    return (
      /* <DiaryProductsListItem key={product._id}
          name={product.title.ru}
          weight={product.weight}
          cal={product.calories}
        /> */
      <li key={product._id} className={styles.listItem}>
        <span>{product.title.ru}</span>
        <span>{product.weight}</span>
        <span>{product.calories}</span>
      </li>
    );
  });

  return (
    <ul className={`${styles.productList} ${styles.scrollbar}`}>
      {mappedList}
    </ul>
  );
};

export default DiaryProductsList;
