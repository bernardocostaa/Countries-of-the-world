import React from 'react'
import styles from './CardSkeleton.module.css'
import Skeleton from 'react-loading-skeleton'
import { ThemaContex } from '../ThemaContex'


const CardSkeleton = ({cards}) => {
  const {thema} = React.useContext(ThemaContex)

  return (
    Array(cards).fill(0).map((_,i) => <div key={i}>
      <Skeleton width={270} height={332} />
        <div className={thema == 'light' ? styles.skeleton : styles.skeletonDark} data-testid="skeleton"></div>
     </div>)
  )
}

export default CardSkeleton