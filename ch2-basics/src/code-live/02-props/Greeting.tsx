import styles from "./Greeting.module.css";
// interface User {name: string;}
type User = {name: string; age?: number}

export default function Greeting({name, age}: User) {
    return (
        <p className={styles.hello}>
            안녕하세요, {name}
            {age !== undefined && `(${age})`}
        </p>
    );

    // if (!age) {
    //     return(
    //         <p>안녕하세요, {name}님!</p>
    //     );
    // }
    
    // return(
    //     <p>안녕하세요, {name}님! {age}살!</p>
    // );
}