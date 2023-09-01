import React from 'react'
import BuscarSvg from '../svgs/BuscarSvg'
import styles from './Inputs.module.css'
import SetaSelect from '../svgs/SetaSelectSvg'
import { ThemaContex } from '../ThemaContex'
import { CountrieContex } from '../CountrieContex'

const Inputs = () => {
    const {thema} = React.useContext(ThemaContex)
    const {setInputSearch,getInputFilter} = React.useContext(CountrieContex)
    const [selectBtn, setSelectBtn] = React.useState(false)
    const [pesquisaPais, setPesquisaPais] = React.useState('')
    const [selectRegiao, setSelectRegiao] = React.useState('')
    const [availableRegions, setAvailableRegions] =  React.useState(['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania']);

     function searchCountrie(event){
        setPesquisaPais(event.target.value)
        setInputSearch(event.target.value)
    }

    function handleClique(event){
        const regiaoClique = event.target.id;

        if(selectRegiao){
            setAvailableRegions(availableRegions => [...availableRegions,selectRegiao])
        }
      
        setSelectRegiao(regiaoClique)

        setAvailableRegions(availableRegions => availableRegions.filter((regiao => regiao !== regiaoClique)))
        setSelectBtn(!selectBtn)
        getInputFilter(regiaoClique)
    }   

  return (
    <div className={`${styles.flex} container`}>
        <div className={styles.relative}>
            <BuscarSvg whatTema={thema} />
            <input autoComplete='off' className={thema == 'light' ? styles.input : `${styles.inputDark} ${styles.input}`} type="text" id='pais' value={pesquisaPais} onChange={searchCountrie} placeholder='Search for a country...' />
        </div>
        <div>
            <div className={thema == 'light' ? styles.select : `${styles.selectDark} ${styles.select}`}>
                {selectRegiao || 'Filter by Region'}
                    <SetaSelect selectBtn={selectBtn} setSelectBtn={setSelectBtn} whatTema={thema} />
            </div>
            <div className={`${selectBtn ? styles.list : styles.listNone} ${thema == 'light' ? null : styles.listDark}`}>
                <ul>
                    {availableRegions.map((regiao) =>(
                        <li key={regiao} id={regiao} onClick={handleClique}>
                            {regiao}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Inputs