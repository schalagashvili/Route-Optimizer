import React from 'react'
import { PlanningConsumer } from './plan'

export default function withPlanningState(Component) {
  return props => (
    <PlanningConsumer>{({ ...rest }) => <Component {...props} {...rest} />}</PlanningConsumer>
  )
}
