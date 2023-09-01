import React from 'react'

const SetaSelect = ({whatTema,selectBtn,setSelectBtn}) => {
  return (
    <svg onClick={() => setSelectBtn(!selectBtn)}  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Group 2">
    <g id="expand-more">
    <path id="Shape" d="M9.45 3.45L6 6.9L2.55 3.45L1.5 4.5L6 9L10.5 4.5L9.45 3.45Z" fill={whatTema == 'light' ? "black" : 'white'}/>
</g>
</g>
</svg>

  )
}

export default SetaSelect