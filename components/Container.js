import StickyFooter from 'components/StickyFooter'

export default function Container({ children, ...props }) {
  return (
    <div
      style={{
        position: 'relative',
        margin: 'auto',
        width: '80%',
        paddingBottom: '50px',
        maxWidth: '400px',
      }}
      {...props}
    >
      {children}
      <StickyFooter />
    </div>
  )
}
