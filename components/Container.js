import StickyFooter from 'components/StickyFooter'

export default function Container({ children, ...props }) {
  return (
    <div style={{ marginLeft: '15%', width: '70%' }} {...props}>
      {children}
      <StickyFooter />
    </div>
  )
}
