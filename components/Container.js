import StickyFooter from 'components/StickyFooter'

export default function Container({ children, ...props }) {
  return (
    <div
      style={{ marginLeft: '10%', width: '80%', paddingBottom: '50px' }}
      {...props}
    >
      {children}
      <StickyFooter />
    </div>
  )
}
