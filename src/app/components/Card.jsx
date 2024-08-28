import '../styles/container.css'

const Card = ({ styles = '', children }) => {
  return(
    <section className={`blurred rounded shadow transition ease-in-out duration-300 hover:scale-105 p-4 ${styles}`}>
      {children}
    </section>
  )
}

export default Card