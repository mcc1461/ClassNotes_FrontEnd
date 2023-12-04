//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//! message console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
//* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
//* static olarak kabul etmesinden kaynaklanir.

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
//? 1. Statefull Classes (Class Components).
//? 2. Hooks (Functional Components).

//?Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.




//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.



//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react
//?    https://react.dev/reference/react/hooks#state-hooks
//* =============================================================

//* ==================== useState() ===============================
//! useState() fonksiyonu bir state olusturulmasini saglar.
//! useState() fonksiyonu bir array dondurur.
//! useState() fonksiyonu 2 elemanli bir array dondurur.
//! 1. eleman state'in kendisidir.
//! 2. eleman state'i guncelleyen fonksiyondur.
//! useState() fonksiyonu icerisine ilk deger atamasi yapilabilir.
//! useState() fonksiyonu icerisine fonksiyon da yazilabilir.
//! useState() fonksiyonu icerisine fonksiyon yazilmasi durumunda
//! state'in ilk degeri fonksiyonun return degeridir.
//! useState() fonksiyonu icerisine fonksiyon yazilmasi durumunda
//! state'i guncelleyen fonksiyonun parametresi state'in ilk degeridir.

import { useState } from 'react';

const UseStateCounter = () => {
    const [count, setCount] = useState(10)

    const increment = () => {
        setCount(count + 1)
    }
    // const decrement = () => {
    //     setCount(count - 1)
    // }
    /* Eger setSayac metodunu callback ile yazmazsak bu metot ilk acilistan itibaren doğrudan cagirilmis olur. Bu durumda da sayac state'ini gunceller. State guncellendigi icinde component re-render olur. Re-render ise yeniden setSayac araciligi ile state'in guncellenmesine yol acar ve sonsuz donguye girer */
    const reset = () => {
        setCount(0)
    }
    const complexIncrease = () => {
        setTimeout(() => {
            // setCount(count + 1)
            setCount((prevState) => {
                return prevState + 1
            })
        }, 5000)
    }
    return (
        <div>
            <h1>UseStateCounter</h1>
            <h2>Count: {count}</h2>
            <button onClick={increment}>INC</button>
            <button onClick={() => count > 0 && setCount(count - 1)}>DEC</button>
            <button onClick={reset}>CLR</button>
            <button onClick={complexIncrease}>INC2</button>
        </div>
    )

}

export default UseStateCounter







