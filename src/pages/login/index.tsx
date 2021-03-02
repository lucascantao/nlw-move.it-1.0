// import Link from 'next/link'
// import { useContext } from 'react'
// import { UserContext, UserProvider } from '../../contexts/UserContext';
// import styles from '../../styles/pages/LoginPage.module.css'

// export default function LoginPage() {

//     return (

//         <UserProvider>

//             <div className={styles.loginPage}>

//                 <div className={styles.formContainer}>

//                     <header>
//                         <img src="icons/logo-full-white.svg" alt="logo-image" />
//                     </header>

//                     <div className={styles.loginBody}>
//                         <h3>Bem-vindo</h3>
//                         <div>
//                             <img src="icons/github.svg" alt="git-image" />
//                             <p>Faça login com seu Github para começar</p>
//                         </div>
//                     </div>

//                     <form>
//                         <input type="text" name='username' placeholder='Digite seu username' />

//                         <Link href='/home'>

//                             <button type='button'>
//                                 <span>{'-->'}</span>
//                             </button>
//                         </Link>

//                     </form>

//                 </div>

//             </div>

//         </UserProvider>

//     )
// }