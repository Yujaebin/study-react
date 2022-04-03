import { createContext } from "react";

export const ThemeContext =createContext(null);

//  null 자리는 만약 ThemeContext.Provider value={{isDark,setIsDark}} 와 같이
//  선언을 미리 안하면서 value값도 넣어주지 않으면 자동으로 null에 있는 값을 사용한다


//
//씨바ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ 예제 코드다날라감... 유튜브 참고하기

/*

1. useContext 사용하는 이유는 최상위 컴포넌트가 최하위 컴포넌트로 데이터를 옮기는데
하나하나 props로 전달하지 않고 한번에 전달하기위함

2. 하지만 useContext 사용하면 컴퍼넌트를 재사용이 힘들어질수있다 그러므로 단순한 props 전달 목적이면 
Component Composition 을 먼저 고려하기

3. 다양한 레벨의 많은 컴포넌트에게 전역적인 데이터를 전달하기위함


*/