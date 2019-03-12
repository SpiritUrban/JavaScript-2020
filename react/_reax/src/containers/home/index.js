import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

import {_do} from '../../modules/test-module'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>
    <p>test_count: {props.test_count}</p>

    

    <p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </button>
    </p>

    <p>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </button>
    </p>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>

    <p>
      <button onClick={() => props._do(333)}>
        DO!!!
      </button>
    </p>

  </div>
)

// <-- state
const mapStateToProps = ({ counter, test_module }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing,
  test_count: test_module.test_count
})

// --> state
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us'),
      _do
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
