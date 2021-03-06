import React from 'react'
import { connect } from 'react-redux'

import { buyFeature, removeFeature } from './actions'

import Header from './components/Header'
import AddedFeatures from './components/AddedFeatures'
import AdditionalFeatures from './components/AdditionalFeatures'
import Total from './components/Total'

const App = props => {
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={props.removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures
          store={props.additionalFeatures}
          buyFeature={props.buyFeature}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    additionalPrice: state.car.additionalPrice,
    car: state.car.car,
    additionalFeatures: state.car.additionalFeatures,
  }
}

export default connect(mapStateToProps, { buyFeature, removeFeature })(App)
