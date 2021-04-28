import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const sushisList = props.uneatenSushis.map(sushi => <Sushi sushi={sushi} eatTheSushi={props.eatTheSushi} />)
  return (
    <Fragment>
      <div className="belt">
        {sushisList}
        <MoreButton getTheSushi={props.getTheSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer