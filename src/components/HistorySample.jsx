import React, { useEffect, useRef } from 'react';

const HistorySample = ({ history }) => {
    const cnt = useRef(1);
    const goBack = () => {
        history.goBack();
    };

    const goHome = () => {
        history.push('/');
    };

    useEffect(() => {
        console.log(history);
        console.log(`useEffect in value :: ${++cnt.current}`);
        const unblock = history.block('정말 떠나실건가요?');
        return () => {
            console.log(`return in value :: ${cnt.current}`);
            console.log(cnt.current);
            unblock();
        };
    }, [history]);

    return (
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로</button>
        </div>
    );
}

export default HistorySample;