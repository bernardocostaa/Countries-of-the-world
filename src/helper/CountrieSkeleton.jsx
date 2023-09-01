import React from 'react'
import styles from './CardSkeleton.module.css'
import Skeleton from 'react-loading-skeleton'
import { ThemaContex } from '../ThemaContex'


const CountrieSkeleton = ({cards}) => {
  const {thema} = React.useContext(ThemaContex)

  return (
    Array(cards).fill(0).map((_,i) => <div key={i}>
      <Skeleton width={560} height={400} />
        <div className={thema == 'light' ? styles.skeleton2 : styles.skeletonDark2} data-testid="skeleton"></div>
     </div>)
  )
}

export default CountrieSkeleton