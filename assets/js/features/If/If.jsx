const If = props => props.cond
  ? props.then
  : props.else || null

export default If
