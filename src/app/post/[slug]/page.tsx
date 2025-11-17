import styles from './styles.module.scss'

export default function Page({ params: { slug } }: {
  params: { slug: string }
}){
  return(
    <div>
      <h1>PAGINA {slug}</h1>
    </div>
  )
}