"use client"

import Link from "next/link"
import styles from './error.module.scss'

export default function Error(){
    return(
        <div className={styles.error}>
            <h1> Ops essa pagina nao existe!</h1>
            <Link href="/">
              Volta para home
            </Link>
        </div>
    )
}